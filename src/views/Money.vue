<template>
  <Layout classPrefix="layout">
    <Numbers :money="money" @done="handleDone"></Numbers>
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
export default {
  name: "Money",
  components: { Types, Tags, Notes, Numbers },
  data() {
    return {
      money: {
        tag: "",
        value: 0,
        remark: "",
        type: "支出",
      },
    };
  },
  methods: {
    handleDone() {
      // 处理完成
    },
  },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>