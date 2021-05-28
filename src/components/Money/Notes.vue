<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注" v-model="value" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Notes extends Vue {

value = ''

  // @Prop({
  //   type: String, // 父组件传递给子组件的数据类型
  //   required: false, // 是否必填
  //   default: " ", // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  // })
  // output!: undefined;

  // @Prop({
  //   type:String,
  //   required:false,
  //   default:"0"
  // })
  // money : Money | undefined;
}
</script>

<style lang="scss" scoped>
.notes {
  max-width: 64%;
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
    outline: none;
  }
  
}
</style>