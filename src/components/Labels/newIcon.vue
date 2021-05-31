<template>
  <Layout>
    <Head></Head>
    <ul>
      <li v-for="tag in tags" :key="tag">
        <Icon :name="tag"></Icon>
        <button @click="clearTag(tag)">删除</button>
      </li>
      <li>
        <button>完成</button>
      </li>
    </ul>
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Head from "@/components/Labels/Head.vue";
import { tags } from "@/Tags";
import Icon from "@/components/Icon.vue";

@Component({
  components: { Layout, Head, Icon },
})
export default class newIcon extends Vue {
  tags = tags;

  clearTag(tag: string) {
    const index = this.tags.indexOf(tag);
    const xxx = this.tags.splice(index, 1);
    window.localStorage.setItem('tags',JSON.stringify(this.tags))
  }
}
</script>

<style lang="scss" scoped>
</style>
