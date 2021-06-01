<template>
  <div class="types">
    <ul>
      <li v-for="(tag, i) in tagList" :key="i" class="tag-item">
        <Icon :name="tag.type" />
        <span>{{ tag.name }}</span>
        <button @click="clearTag(tag)">删除</button>
      </li>
      <li class="new">
        <router-link
          :to="{
            path: '/newIcon',
          }"
        >
          <Icon name="newIcon" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Icon from "@/components/Icon.vue";
import tagListModel from "../../models/tagListModel";
import { tag } from "@/models/tagAllModel";

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

  clearTag(tag: tag) {
    const index = this.tagList.indexOf(tag);
    index !== -1 && this.tagList.splice(index, 1);
    window.localStorage.setItem("tagList", JSON.stringify(this.tagList));
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
      > span {
        width: 14%;
        height: 50px;
        font-size: 16px;
        display: flex;
        position: absolute;
        left: 15%;
        top: 0;
        justify-content: center;
        align-items: center;
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
