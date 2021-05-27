<template>
  <div class="buttons">
    <button>1</button>
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
</template>

<script lang="ts">
export default {
  name: "Numbers",
};
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