<template>
  <nav>
    <router-link
      :to="{
        path: '/labels',
      }"
      class="item"
      active-class="selected"
    >
      <Icon name="label" class="icon" />
      标签
    </router-link>
    <router-link
      :to="{
        path: '/money',
      }"
      class="item"
      active-class="selected"
    >
      <Icon name="money" class="icon" />
      记账</router-link
    >
    <router-link
      :to="{
        path: '/statistics',
      }"
      class="item"
      active-class="selected"
    >
      <Icon name="statistics" class="icon" />
      统计</router-link
    >
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  height: 80px;
  background-color: $yellow;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    color: rgb(31, 31, 31);
    text-decoration: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  > .item.selected {
    margin-top: -8px;
  }
}
</style>