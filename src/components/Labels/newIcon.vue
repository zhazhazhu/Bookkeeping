<template>
  <Layout>
    <Head></Head>
    <div class="div1">
      <span class="text">默认</span>
      <ul class="system">
        <li v-for="tag in tagAll" :key="tag.type" @click="getTag(tag)">
          <Icon :name="tag.type" :class="createClass(tag)"></Icon>
          <span>{{ tag.name }}</span>
        </li>
      </ul>
      <button @click="yes()">确定</button>
    </div>

    <div class="name">
      <span>自定义</span>
      <input type="text" placeholder="请输入标签名" v-model="value" />
    </div>

    <div class="me">
      <ul class="me-tag">
        <li v-for="tag in tagMeAll" :key="tag" @click="customize(tag)">
          <Icon :name="tag" :class="create(tag)"></Icon>
        </li>
      </ul>
      <button @click="yesMe()">确定</button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Head from "@/components/Labels/Head.vue";
import { tagXxx } from "@/Tags";
import Icon from "@/components/Icon.vue";
import tagListModel from "@/models/tagListModel";
import tagAll, { tag } from "../../models/tagAllModel";
import tagMex from "../../models/tagMeModel";
import { tagMeAll } from "@/TagMe";

tagListModel.fetch();

tagAll.fetch();

tagAll.data = tagXxx;

tagMex.fetch();

tagMex.data = tagMeAll;

@Component({
  components: { Layout, Head, Icon },
})
export default class newIcon extends Vue {
  tags = tagListModel.data;

  tagAll = tagAll.data;

  tagMeAll = tagMex.data;

  value = "";

  tag: tag = { name: "", type: "" };

  created() {
    tagAll.save();
    tagMex.save();
  }

  getTag(tag: tag) {
    this.tag={name:'',type:''}
    if (this.tag.name==="" && this.tag.type === "") {
      this.tag = tag;
    }else{
      this.tag = {name:'',type:''}
    }
  }

  yes() {
    const a = this.tags.map((item) => item.name);
    if (a.indexOf(this.tag.name) >= 0) {
      window.alert("标签已存在");
      return;
    } else {
      window.alert("添加成功");
      this.tags.push(this.tag);
      window.localStorage.setItem("tagList", JSON.stringify(this.tags));
    }
  }

  customize(tag: string) {
    this.tag={name:'',type:''}
    if(this.tag.name==="" && this.tag.type === ""){
    this.tag.type = tag;
    }else{
      this.tag.type = ''
    }
  }

  yesMe() {
    this.tag.name = this.value;
    const a = this.tags.map((item) => item.name);
    if (a.indexOf(this.tag.name) >= 0) {
      window.alert("标签已存在");
      return;
    } else {
      window.alert("添加成功");
      window.localStorage.setItem("tagList", JSON.stringify(this.tags));
    }
  }

  createClass(tag: tag) {
    if (tag.name === this.tag.name) {
      return "selected";
    }
  }
  create(tag:string){
    if(this.tag.type === tag){
      return 'selected'
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
      width: 40px;
      height: 40px;
      margin-top: 16px;
      > .icon {
        height: 100%;
        width: 100%;
      }
      > .icon.selected {
        border: 1px solid rgb(255, 145, 0);
        border-radius: 50%;
        box-shadow: 1px 1px 5px rgb(255, 183, 89);
      }
      > span {
        width: 18%;
        height: 40px;
        font-size: 14px;
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
.me {
  > .me-tag {
    height: 34vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
    justify-content: space-around;
    > li {
      width: 40px;
      height: 40px;
      margin-top: 16px;
      > .icon {
        height: 100%;
        width: 100%;
      }
      > .icon.selected {
        border: 1px solid rgb(255, 145, 0);
        border-radius: 50%;
        box-shadow: 1px 1px 5px rgb(255, 183, 89);
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
