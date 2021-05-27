<template>
  <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
</template>

<script lang="ts">

  export default({
    name:'Types'
  })
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
        content: '';
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