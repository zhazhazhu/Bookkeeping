<template>
  <Layout>
    <Tabs class-prefix="type" :value.sync="type" :value2.sync="interval" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Statistics/Tabs.vue";

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "week";
}
</script>

<style lang="scss" scoped>
</style> scoped>