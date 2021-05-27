<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss"; //进入全局scss
@import "~@/assets/style/helper.scss"; //引入全局颜色scss

body {
  line-height: 1.5;
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
