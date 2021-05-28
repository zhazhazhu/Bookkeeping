<template>
  <div class="numbers">
    <div class="output">{{ money }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button>今天</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button>+</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button>-</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove" class="zero">删除</button>
      <button @click="ok" class="ok">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Numbers extends Vue {
  money = "0";
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string;
    if (this.money.length === 8) {
      return;
    }
    if (this.money === "0") {
      if (input === "0") {
        return;
      }
      if ("123456789".indexOf(input) >= 0) {
        this.money = input;
      } else {
        this.money += input;
      }
      return;
    }
    if (this.money.indexOf(".") >= 0) {
      if (input === ".") {
        return;
      }
    }
    this.money += input;
  }
  remove() {
    if (this.money.length === 1) {
      this.money = "0";
    } else {
      this.money = this.money.slice(0, -1);
    }
  }
  ok(){
    this.$emit('update:value',this.money)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numbers {
  position: relative;
  .output {
    font-size: 24px;
    height: 50px;
    width: 36%;
    text-align: right;
    line-height: 50px;
    position: absolute;
    right: 0;
    top: -50px;
    background-color: #eee;
  }
}
.buttons {
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;
  height: 220px;
  justify-content: center;
  > button {
    width: 25%;
    height: 25%;
    border: 1px solid transparent;
    border: 1px solid rgb(202, 202, 202);
    background-color: white;
  }
}
</style>