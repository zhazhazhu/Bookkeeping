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
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop() readonly value!: string;

  @Watch("value")
  onValueChanged(value: string, oldValue: string): void {
    if (value !== "") {
      this.$emit("update:value", value);
    }
  }
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