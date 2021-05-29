<template>
  <Layout>
    <Head></Head>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Head from '@/components/Labels/Head.vue'
import { Component, Emit, Prop } from "vue-property-decorator";

@Component({
  components:{Head}
})
export default class Labels extends Vue{
  
}
</script>

<style scoped>

</style>