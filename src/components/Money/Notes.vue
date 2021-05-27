<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input v-model="money.remark" type="text" />
      <div class="output">{{ money.value }}</div>
    </label>
  </div>
</template>

<script lang="ts">
import { Money } from "@/types";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop({
    type: String, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: " ", // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  })
  output!: undefined;

  @Prop()
  money: Money | undefined;
}
</script>

<style lang="scss" scoped>
.notes {
  max-width: 100%;
  font-size: 14px;
  background: #eeeeee;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 50px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
  .output {
    font-size: 24px;
  }
}
</style>