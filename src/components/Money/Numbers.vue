<template>
  <div>
    <div class="buttons">
      <button @click="money.value += '1'">1</button>
      <button>2</button>
      <button>3</button>
      <button>今天</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button class="zero">删除</button>
      <button class="ok">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Notes from "./Notes.vue";
import { Money } from "@/types/index";

@Component({
  components: {
    Notes,
  },
})
export default class Numbers extends Vue {
  output = "1";
  @Prop()
  money: Money | undefined;
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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