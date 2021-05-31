<template>
  <Layout>
    <Head></Head>
    <div class="div1">
      <span class="text">默认</span>
      <ul class="system">
        <li v-for="tag in tagAll" :key="tag" @click="getTag(tag)">
          <Icon :name="tag"></Icon>
          <!-- <button @click="createTag(tag)">确定</button> -->
        </li>
      </ul>
      <button @click="yes()">确定</button>
    </div>

    <div class="name">
      <span>自定义</span>
      <input type="text" placeholder="请输入标签名" />
    </div>

    <div class="me">
      <ul class="me-tag">
        <li v-for="tag in tagAll" :key="tag" @click="customize(tag)">
          <Icon :name="tag"></Icon>
        </li>
      </ul>
      <button @click="yes()">确定</button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Head from "@/components/Labels/Head.vue";
import { tags } from "@/Tags";
import Icon from "@/components/Icon.vue";
import tagListModel from "@/models/tagListModel";
import tagAll from "../../models/tagAllModel";

tagListModel.fetch();

tagAll.fetch();

tagAll.data = tags;

@Component({
  components: { Layout, Head, Icon },
})
export default class newIcon extends Vue {
  tags = tagListModel.data;

  tagAll = tagAll.data;

  tag!: string;

  created() {
    tagAll.save();
  }

  getTag(tag: string) {
    this.tag = tag;
    console.log(this.tag);
  }

  yes() {
    if (this.tags.indexOf(this.tag) >= 0) {
      window.alert("标签已存在");
      return;
    } else {
      window.alert("添加成功");
      this.tags.push(this.tag);
      window.localStorage.setItem("tagList", JSON.stringify(this.tags));
    }
  }
  customize() {
    if (this.tags.indexOf(this.tag) >= 0) {
      window.alert("标签已存在");
      return;
    } else {
      window.alert("添加成功");
      this.tags.push(this.tag);
      window.localStorage.setItem("tagList", JSON.stringify(this.tags));
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.div1 {
  border-bottom: 1px solid rgb(172, 172, 172);
  padding-bottom: 10px;
  > .text {
    width: 100vw;
    padding: 10px 0px 6px 26px;
    font-size: 15px;
    display: flex;
    font-size: 15px;
  }
  > .system {
    height: 25vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
    justify-content: space-around;
    > li {
      width: 18%;
      height: 40px;
      margin-top: 16px;
      > .icon {
        height: 100%;
        width: 100%;
      }
    }
  }
  > button {
    width: 40%;
    height: 34px;
    border: 1px solid rgb(226, 226, 226);
    background-color: $yellow;
    font-size: 16px;
    border-radius: 20px;
  }
}
.name {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  > span {
    width: 20%;
    padding: 6px;
    margin-left: 4px;
    font-size: 15px;
  }
  > input {
    border: 1px solid rgb(202, 202, 202);
    border-radius: 8px;
    padding: 8px;
    width: 52%;
    margin-left: 10px;
  }
}
.me{
  > .me-tag {
    height: 34vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
    justify-content: space-around;
    > li {
      width: 18%;
      height: 40px;
      margin-top: 16px;
      > .icon {
        height: 100%;
        width: 100%;
      }
    }
  }
  > button {
    width: 40%;
    height: 34px;
    border: 1px solid rgb(226, 226, 226);
    background-color: $yellow;
    font-size: 16px;
    border-radius: 20px;
  }
}
</style>
