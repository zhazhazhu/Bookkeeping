<template>
  <div class="types">
    <ul>
      <li v-for="(tag, i) in tagList" :key="i" class="tag-item">
        <Icon :name="tag"></Icon>
        <button @click="clearTag(tag)">删除</button>
      </li>
      <li class="new">
        <router-link
          :to="{
            path: '/newIcon',
          }"
        >
          <Icon name="newIcon"></Icon>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Icon from "@/components/Icon.vue";
@Component({
  components: { Icon },
})
export default class Types extends Vue {
  @Prop() value!: string[];

  tagList: string[] = JSON.parse(localStorage.getItem("tagList") || "[]");

  created() {
    if(this.tagList.length===0){
      this.tagList = this.value
    }
  }
  clearTag(tag: string) {
    const index = this.value.indexOf(tag);
    const xxx = this.value.splice(index, 1);
    window.localStorage.setItem("tagList", JSON.stringify(this.value));
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
        rgba(255, 187, 97, 1) 87%
      );
      padding: 10px;
      width: 100vw;
      margin-top: 10px;
      position: relative;
      > .icon {
        display: flex;
        left: 0;
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
    margin: -40px auto;
    padding: 10px;
    border: 1px solid transparent;
    outline: none;
    position: absolute;
    right: 0;
  }
}
</style>
