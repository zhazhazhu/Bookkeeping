<template>
  <div class="tags">
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.name"
        @click="toggle(tag)"
        class="icon"
      >
        <Icon
          :name="tag.type"
          :class="{ selected: tag.name === currTag.name }"
        />
        <span>{{ tag.name }}</span>
      </li>
      <li>
        <router-link :to="{ path: '/newIcon' }" class="icon">
          <Icon name="new" class="newIcon" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { tag } from "@/models/tagAllModel";
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component, Emit, Prop, Watch } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  tagList = tagListModel.fetch();

  @Prop()
  currTag?: tag;

  @Watch("tagList")
  onTagListChange() {
    window.localStorage.getItem("tagList") || undefined;
  }

  @Emit("update:currTag")
  toggle(tag: tag) {
    return tag;
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
      height: 75px;
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > .icon {
        height: 68%;
        width: 80%;
      }
      > span {
        margin-top: 4px;
      }
      > .icon.selected {
        width: 50px;
        border: 1px solid rgb(255, 145, 0);
        border-radius: 50%;
        box-shadow: 1px 1px 5px rgb(255, 183, 89);
      }
    }
    .newIcon {
      height: 50px;
      width: 50px;
    }
  }
}
</style>