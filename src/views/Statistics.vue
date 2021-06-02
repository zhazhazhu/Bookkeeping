<template>
  <Layout>
    <Types :value.sync="value"></Types>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Types from '@/components/Money/Types.vue';

@Component({
  components: { Types },
})
export default class Statistics extends Vue {
  value="-"
}
</script>

<style lang="scss" scoped>
</style> scoped>