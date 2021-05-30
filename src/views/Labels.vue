<template>
  <Layout>
    <Head></Head>
    <Types :value="tags"></Types>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Head from "@/components/Labels/Head.vue";
import { Component} from "vue-property-decorator";
import { tags } from "../Tags";
import Types from '@/components/Labels/Types.vue'

@Component({
  components: { Head,Types },
})
export default class Labels extends Vue {
  tags = tags;
}
</script>

<style scoped>
</style>