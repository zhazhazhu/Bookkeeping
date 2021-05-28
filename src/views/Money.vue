<template>
  <Layout classPrefix="layout">
    {{record}}
    <Numbers @update:value="onUpdateNumbers"></Numbers>
    <Notes @update:value="onUpdateNotes"></Notes>
    <Tags @update:value="onUpdateTags" :dataSource.sync="tags"></Tags>
    <Types @update:value="onUpdateTypes"></Types>
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
  tags: string[];
  notes: string;
  type: string;
  numbers: number;
};

@Component({
  components: { Types, Tags, Notes, Numbers },
})
export default class Money extends Vue {
  tags = ["apparel", "foot", "house", "travel"];

  record:Record = {tags:[],notes:'',type:'-',numbers:0}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateTags(tags: string[]) {
    this.record.tags=tags; //获取到Tags组件里的用户选择的标签
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateNotes(note: string) {
    this.record.notes =note
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateNumbers(numbers: number) {
    this.record.numbers = numbers
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onUpdateTypes(types: string) {
    this.record.type = types
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>