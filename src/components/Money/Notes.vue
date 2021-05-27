<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" />
    <div class="output">100</div>

    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "Notes",
};
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
  .output{
    font-size: 24px;
  }
}

</style>