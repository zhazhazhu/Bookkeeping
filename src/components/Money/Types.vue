<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  type = "-"; //‘-’表示支出，‘+’表示收入
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(type: string) {
    //type只能是 ‘-’ 和 '+' 其中一个
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.type = type;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.types {
  background: $yellow;
  display: flex;
  text-align: center;
  font-size: 20px;
  justify-content: center;
  > li {
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
</style>