<template>
  <Layout>
    <Head></Head>
    <div class="name">
      <span>名称:</span>
      <input type="text" placeholder="请输入标签名" v-model="value" />
    </div>
    <hr />
    <div class="me">
      <span>类型:</span>
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
import Icon from "@/components/Icon.vue";
import tagListModel from "@/models/tagListModel";
import tagAll, { tag } from "../../models/tagAllModel";
import tagMex from "../../models/tagMeModel";
import { tagMeAll } from "@/TagMe";

tagListModel.fetch();

tagAll.fetch();

tagMex.fetch();

@Component({
  components: { Layout, Head, Icon },
})
export default class newIcon extends Vue {
  tags = tagListModel.data;

  tagMeAll = tagMeAll;

  value = "";

  tag: tag = { name: "", type: "" };

  created() {
    tagMex.save();
  }

  customize(tag: string) {
    this.tag.type = tag;
  }

  yesMe() {
    this.tag.name = this.value;
    const a = this.tags.map((item) => item.name);
    if (a.indexOf(this.tag.name) >= 0) {
      window.alert("标签已存在");
      return;
    } else if (this.tag.name === "" || this.tag.type === "") {
      window.alert("标签名或标签不能为空");
      return;
    } else {
      window.alert("添加成功");
      this.tags.push(this.tag);
      window.localStorage.setItem("tagList", JSON.stringify(this.tags));
      this.$router.replace("/money");
    }
  }

  createClass(tag: tag) {
    if (this.tag.name === tag.name) {
      return "selected";
    }
  }
  create(tag: string) {
    if (this.tag.type === tag) {
      return "selected";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.name {
  height: 60px;
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
    padding: 10px;
    width: 52%;
    margin-left: 10px;
  }
}
.me {
  position: relative;
  height: 80%;
  > span {
    display: flex;
    justify-content: center;
    width: 20%;
    padding: 6px;
    margin-left: 4px;
    font-size: 15px;
  }
  > .me-tag {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
    justify-content: space-around;
    > li {
      margin: 5px 16px;
      width: 45px;
      height: 45px;
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
    z-index: 1;
    position: absolute;
    bottom: 30px;
    left: 30%;
    width: 40%;
    height: 34px;
    border: 1px solid rgb(226, 226, 226);
    background-color: $yellow;
    font-size: 16px;
    border-radius: 20px;
  }
}
</style>
