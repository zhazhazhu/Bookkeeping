<template>
  <div class="tags">
    <ul class="current">
      <li>
        <Icon name="apparel" class="icon" />
      </li>
      <li>
        <Icon name="foot" class="icon" />
      </li>
      <li>
        <Icon name="house" class="icon" />
      </li>
      <li>
        <Icon name="travel" class="icon" />
      </li>
      <li>
        <Icon name="new" class="icon" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tags",
};
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  > .current {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    > li {
      width: 25%;
      height: 50px;
      margin-bottom: 16px;
      > .icon {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>