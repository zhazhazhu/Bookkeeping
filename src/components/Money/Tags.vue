<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)">
        <Icon
          :name="tag"
          :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        />
      </li>
      <li @click="create">
        <Icon name="new" class="icon" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop(Array) dataSource: string[] | undefined; //表示这个数组里面是字符串

  selectedTags: string[] = [];

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 0);
    } else {
      this.selectedTags.splice(index,1,tag);
    }
    this.$emit('update:value',this.selectedTags) //把selectedTags数据传到名字为update:selected的外部组件，这里是Money组件，
  }
  create(){
    const name =window.prompt("请输入标签名：")
    console.log(name);
    if(name === ''){
      window.alert('标签名不能为空')
    }else{
      if(this.dataSource){
        this.$emit('updata:dataSource',[...this.dataSource,name])
      }
      }
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
      > .icon.selected {
        width: 50px;
        border: 1px solid rgb(255, 145, 0);
        border-radius: 50%;
        box-shadow: 1px 1px 10px rgb(255, 183, 89);
      }
    }
  }
}
</style>