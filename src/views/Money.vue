<template>
  <Layout classPrefix="layout">
    <Numbers :value.sync="record.numbers" @done="handleDone"></Numbers>
    <Notes :value.sync="record.notes"></Notes>
    <Tags :currTag.sync="record.tag" @update:value="onUpdateTags"></Tags>
    <Types :value.sync="record.type"></Types>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Numbers from "@/components/Money/Numbers.vue";
import { Component, Watch } from "vue-property-decorator";
import { RecordItem } from "@/types";
import model from "@/models/recordListModel";
import tagListModel from "../models/tagListModel";

const version = window.localStorage.getItem("version") || "0";
const recordList: RecordItem[] = model.fetch();
const tagList = tagListModel.fetch();

if (version === "0.0.1") {
  //数据库升级，迁移数据
  recordList.forEach((record) => {
    record.createdAt = new Date(2020, 2, 1);
  });
  window.localStorage.setItem("recordList", JSON.stringify(recordList));
}
window.localStorage.setItem("version", "0.0.1");

@Component({
  components: { Types, Tags, Notes, Numbers },
})
export default class Money extends Vue {
  tags = tagList;
  // tags = ["apparel", "foot", "house", "travel"];
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // @Emit("tags") send(tags: string[]) {
  //   console.log(tags);
  // }

  record: RecordItem = {
    tag: [],
    notes: "",
    type: "-",
    numbers: "0",
    createdAt: undefined,
  };

  recordList: RecordItem[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );

  onUpdateTags(tag: string[]): void {
    this.record.tag = tag;
  }
  handleDone(): void {
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch("recordList")
  onRecordListChange() {
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