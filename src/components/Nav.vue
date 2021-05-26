<template>
  <div>
    <router-link
      :to="{
        path: '/labels',
      }"
      >标签</router-link
    >
    <router-link
      :to="{
        path: '/money',
      }"
      >记账</router-link
    >
    <router-link
      :to="{
        path: '/statistics',
      }"
      >统计</router-link
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Nav",
});
</script>

<style scoped>
</style>