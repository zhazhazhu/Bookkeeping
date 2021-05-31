<template>
  <div class="types">
    <ul>
      <li v-for="(tag, i) in tagList" :key="i" class="tag-item">
        <Icon :name="tag"></Icon>
        <button @click="clearTag(tag)">删除</button>
      </li>
      <li class="new" @click="createTag">
        <Icon name="newIcon"></Icon>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Icon from "@/components/Icon.vue";
import tagListModel from "../../models/tagListModel";

tagListModel.fetch();

@Component({
  components: { Icon },
})
export default class Types extends Vue {
  tags = tagListModel.data;

  tagList = tagListModel.fetch();

  created() {
    window.localStorage.setItem("tagList", JSON.stringify(this.tags));
  }

  clearTag(tag: string) {
    const index = this.tagList.indexOf(tag);
    index !== -1 && this.tagList.splice(index, 1);
    window.localStorage.setItem("tagList", JSON.stringify(this.tagList));
  }

  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签已存在");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.types {
  > ul {
    > .tag-item {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 187, 97, 0.6) 87%
      );
      width: 100vw;
      margin-top: 10px;
      position: relative;
      > .icon {
        display: flex;
        margin-left: 10px;
        height: 50px;
        width: 50px;
      }
    }
    > .new {
      padding: 8px;
      width: 30vw;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 220, 174, 1) 77%
      );
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      margin: 20px auto;
    }
  }
  button {
    background-color: rgba(238, 238, 238, 0.308);
    color: rgb(43, 43, 43);
    height: 100%;
    margin: -50px auto;
    padding: 10px;
    border: 1px solid transparent;
    outline: none;
    position: absolute;
    right: 0;
  }
}
</style>
