<template>
  <Layout classPrefix="layout">
    <Numbers :value.sync="record.numbers" @done="handleDone"></Numbers>
    <Notes :value.sync="record.notes"></Notes>
    <Tags
      :tags="tags"
      :currTag.sync="record.tag"
      @update:value="onUpdateTags"
    ></Tags>
    <Types :value.sync="record.type"></Types>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Numbers from "@/components/Money/Numbers.vue";
import { Component, Prop, Watch } from "vue-property-decorator";

const version = window.localStorage.getItem("version") || "0";
const recordList: Record[] = JSON.parse(
  window.localStorage.getItem("recordList") || "[]"
);

if (version === "0.0.1") {
  //数据库升级，迁移数据
  recordList.forEach((record) => {
    record.createdAt = new Date(2020, 2, 1);
  });
  window.localStorage.setItem("recordList", JSON.stringify(recordList));
}
window.localStorage.setItem("version", "0.0.1");

type Record = {
  tag: string;
  notes: string;
  type: string;
  numbers: string;
  createdAt: Date | undefined;
};

@Component({
  components: { Types, Tags, Notes, Numbers },
})
export default class Money extends Vue {
  tags = ["apparel", "foot", "house", "travel"];

  record: Record = {
    tag: "",
    notes: "",
    type: "-",
    numbers: "0",
    createdAt: undefined,
  };

  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );

  onUpdateTags(tag: string): void {
    this.record.tag = tag;
  }
  handleDone(): void {
    // localStorage.setItem("record", JSON.stringify(this.record));
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch("recordList")
  onRcordListChange() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>