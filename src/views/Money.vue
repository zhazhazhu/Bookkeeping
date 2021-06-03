<template>
  <Layout classPrefix="layout">
    <Numbers :value.sync="record.numbers" @done="handleDone"></Numbers>
    <Notes :value.sync="record.notes"></Notes>
    <Tags :currTag.sync="record.tag"></Tags>
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

@Component({
  components: { Types, Tags, Notes, Numbers },
})
export default class Money extends Vue {
  tags = tagListModel.fetch();

  record: RecordItem = {
    tag: { name: "", type: "" },
    notes: "",
    type: "-",
    numbers: "0",
    createdAt: '',
  };

  recordList: RecordItem[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );

  handleDone(): void {
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date().toUTCString();
    this.recordList.push(record2);
    window.alert('ok')
    location.reload()
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