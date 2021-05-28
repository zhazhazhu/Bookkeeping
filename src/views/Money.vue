<template>
  <Layout classPrefix="layout">
    <Numbers :money="money"></Numbers>
    <Notes :money="money"></Notes>
    <Tags></Tags>
    <Types></Types>
  </Layout>
</template>

<script lang="ts">
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Numbers from "@/components/Money/Numbers.vue";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: { Types, Tags, Notes, Numbers },
})
export default class Money extends Vue {
// tag:"" | undefined
// remark:"请输入"|undefined
// type:"支出" |undefined
data(){
  return{
    money:{
      value:''
    }
  }
}

  // methods: {
  //   handleDone() {
  //     // 处理完成
  //   },
  // }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>