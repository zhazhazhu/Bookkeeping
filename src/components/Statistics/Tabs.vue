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
    

    <ul class="list">
      <li v-for="(group, index) in groupList" :key="index">
        <span class="title">{{ beautify(group.title) }}</span>
        <ol>
          <li v-for="item in group.items" :key="item.createdAt" class="record">
            <span v-if="item.tag.type" class="type"
              ><Icon :name="item.tag.type"></Icon
            ></span>
            <span v-else class="type">空</span>
            <span class="notes">{{
              item.notes ? item.notes : item.tag.name
            }}</span>
            <span class="money">¥{{ item.numbers }}</span>
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
import dayjs from "dayjs";
import clone from "@/lib/clone";

type DataSourceItem = { text: string; value: string };

@Component
export default class Tabs extends Vue {
  type = "-" || "+";

  @Prop() value!: string;

  @Prop() value2!: string;

  @Prop() classPrefix?: string;

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  beautify(string: string) {
    const day = dayjs(string);
    return day.format("M月D日");
  }

  get groupList() {
    const { recordList } = this;

    if (recordList.length === 0) {
      return '当前无数据';
    }

    if (this.value === "-") {
      const newList = clone(recordList)
        .filter((r) => r.type === this.value)
        .sort(
          (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
        );

      type Result = { title: string; total?: number; items: RecordItem[] }[];
      const result: Result = [
        {
          title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
          items: [newList[0]],
        },
      ];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
          last.items.push(current);
        } else {
          result.push({
            title: dayjs(current.createdAt).format("YYYY-MM-DD"),
            items: [current],
          });
        }
      }
      return result;
    }else{
      const newList = clone(recordList)
        .filter((r) => r.type === this.value)
        .sort(
          (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
        );
      if(newList.length === 0){return ['当前无数据'] }
      type Result = { title: string; total?: number; items: RecordItem[] }[];
      const result: Result = [
        {
          title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
          items: [newList[0]],
        },
      ];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
          last.items.push(current);
        } else {
          result.push({
            title: dayjs(current.createdAt).format("YYYY-MM-DD"),
            items: [current],
          });
        }
      }
      return result;
    }
  }

  beforeCreate() {
    this.$store.commit("fetch");
  }

  typeList = typeList;

  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
  select2(item: DataSourceItem) {
    this.$emit("update:value2", item.value);
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
.list {
  margin-top: 16px;
  width: 100vw;
  height: 72vh;
  display: flex;
  flex-direction: column;
  > li .title {
    color: #696969;
    padding-left: 10px;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid rgb(177, 177, 177);
  }
  > li ol .record {
    width: 100vw;
    line-height: 50px;
    display: flex;
    align-items: center;
    > .type {
      height: 30px;
      width: 30px;
      margin: 0 10px 0 10px;
    }
    > .notes {
      color: rgb(87, 87, 87);
      width: 55%;
      display: flex;
      margin-left: 10px;
    }
    > .money {
      display: flex;
      margin-left: auto;
      color: rgb(63, 63, 63);
      margin-right: 6px;
    }
  }
}
</style>
