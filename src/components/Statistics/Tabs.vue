<template>
  <div>
    <ul class="tabs">
      <li
        v-for="item in typeList"
        :key="item.value"
        :class="{
          [classPrefix + '-item']: classPrefix,
          selected: value === item.value,
        }"
        @click="select(item)"
      >
        <span>{{ item.text }}</span>
      </li>
    </ul>
    <ul class="date">
      <li
        v-for="item in intervalList"
        :key="item.value"
        :class="{
          [classPrefix + '-tab']: classPrefix,
          selected: value2 === item.value,
        }"
        @click="select2(item)"
      >
        {{ item.text }}
      </li>
    </ul>
    <ul>
      <li v-for="(group, index) in result" :key="index">
        {{group.title}}
        <ol>
          <li v-for="item in group.items" :key="item.createdAt">
            {{ item.numbers }} {{ item.createdAt }}
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import intervalList from "@/constants/interval";
import typeList from "@/constants/typeList";
import { RecordItem, RootState } from "@/types";

type DataSourceItem = { text: string; value: string };

@Component
export default class Tabs extends Vue {
  @Prop() value!: string;

  @Prop() value2!: string;

  @Prop() classPrefix?: string;

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const { recordList } = this;
    type HashTableValue = { title: string; items: RecordItem[] };
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");
      hashTable[date] = hashTable[date] || {title:date,items:[]};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit("fetch");
  }

  intervalList = intervalList;

  typeList = typeList;

  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
    console.log(this.value);
  }
  select2(item: DataSourceItem) {
    this.$emit("update:value2", item.value);
    console.log(this.value2);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tabs {
  background-color: $yellow;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 80px;
  font-size: 20px;
  > .type-item {
    width: 30%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    padding-bottom: 8px;
    &.selected::after {
      content: "";
      position: absolute;
      margin-left: 30%;
      bottom: 0;
      left: 0;
      width: 40%;
      height: 2px;
      background: rgb(22, 22, 22);
    }
  }
}
.date {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  > .type-tab {
    border-radius: 20px/20px;
    width: 24%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $yellow;
    color: #2c3e50;
    &.selected {
      background-color: rgb(8, 25, 80);
      color: #d0d8e7;
    }
  }
}

// .tabs {
//   background: $yellow;
//   display: flex;
//   text-align: center;
//   height: 40px;
//   font-size: 14px;
//   justify-content: center;
//   > li {
//     border: 0.5px solid rgb(37, 37, 37);
//     width: 30%;
//     height: 65%;
//     margin-top: 6px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   > .selected {
//     background-color: rgb(15, 69, 85);
//     color: $yellow;
//   }
// }
</style>
