<template>
  <div class="Head">
    <span>Logo</span>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Head extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.Head {
  background: $yellow;
  display: flex;
  font-size: 20px;
  height: 80px;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
