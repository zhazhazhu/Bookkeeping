<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag" @click="toggle(tag)">
        <Icon :name="tag" :class="{ selected: tag === currTag }" />
      </li>
      <li >
        <router-link :to="{ path: '/labels' }">
          <Icon name="new" id="newIcon" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop, Watch } from "vue-property-decorator";
import { tags } from "@/Tags";
import tagListModel from "@/models/tagListModel";

tagListModel.fetch()

@Component
export default class Tags extends Vue {
  tags: string[] = tags; //表示这个数组里面是字符串

  tagList = tagListModel.data

  @Prop()
  currTag!: string;

  createTag() {
    console.log('hi');
  }

  

  // created() {
  //   if (this.tagList.length === 0) {
  //     this.tagList = this.tags;
  //   }
  // }

  @Watch("tagList")
  onTagListChange() {
    window.localStorage.getItem("tagList") || undefined;
  }

  @Emit()
  toggle(tag: string[]): void {
    console.log(tag);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  > .current {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    > li {
      width: 25%;
      height: 50px;
      margin-bottom: 16px;
      > .icon {
        height: 100%;
        width: 100%;
      }
      > .newIcon {
        border: 1px solid rgb(0, 255, 170);
      }
      > .icon.selected {
        width: 50px;
        border: 1px solid rgb(255, 145, 0);
        border-radius: 50%;
        box-shadow: 1px 1px 10px rgb(255, 183, 89);
      }
    }
  }
  #newIcon {
    width: 100%;
    height: 100%;
  }
}
</style>