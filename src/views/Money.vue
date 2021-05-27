<template>
  <Layout classPrefix="layout">
    <Numbers></Numbers>
    <Notes></Notes>
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
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>