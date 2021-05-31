<template>
  <Layout>
    <Head></Head>
    <ul>
      <li v-for="tag in tagAll" :key="tag">
        <Icon :name="tag"></Icon>
        <button @click="createTag(tag)">添加</button>
      </li>
      <li>
        <button @click="yes">完成</button>
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
import tagListModel from '@/models/tagListModel'
import tagAll from '../../models/tagAllModel';

tagListModel.fetch()

tagAll.fetch()

tagAll.data = tags

@Component({
  components: { Layout, Head, Icon },
})
export default class newIcon extends Vue {
  tags = tagListModel.data;

  tagAll = tagAll.data

  created() {
   tagAll.save() 
  }

  createTag(tag: string) {
    if(this.tags.indexOf(tag) >= 0 ){
      window.alert('标签已存在')
      return
    }
    this.tags.push(tag)
    window.localStorage.setItem('tagList',JSON.stringify(this.tags))
  }
  
  yes(){
    console.log(this.tagAll)
  }
}
</script>

<style lang="scss" scoped>
</style>
