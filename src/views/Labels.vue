<template>
  <Layout>
    <Head></Head>
    <Types></Types>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Head from "@/components/Labels/Head.vue";
import { Component } from "vue-property-decorator";
import Types from "@/components/Labels/Tags.vue";

@Component({
  components: { Head, Types },
})
export default class Labels extends Vue {}
</script>

<style scoped>
</style>