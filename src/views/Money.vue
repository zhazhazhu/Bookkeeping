<template>
  <Layout classPrefix="layout">
    <Numbers :value.sync="record.numbers" @done="handleDone"></Numbers>
    <Notes :value.sync="record.notes"></Notes>
    <Tags :tags="tags" :currTag.sync="record.tag" @update:value="onUpdateTags"></Tags>
    <Types :value.sync="record.type"></Types>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Numbers from "@/components/Money/Numbers.vue";
import { Component, Prop } from "vue-property-decorator";

type Record = {
  tag: string;
  notes: string;
  type: string;
  numbers: string;
};

@Component({
  components: { Types, Tags, Notes, Numbers },
})
export default class Money extends Vue {
  tags = ["apparel", "foot", "house", "travel"];

  record: Record = { tag: "", notes: "", type: "-", numbers: "999" };

  handleDone(): void {
    localStorage.setItem("record", JSON.stringify(this.record));
  }
  onUpdateTags(tag: string): void {
    this.record.tag = tag;
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>