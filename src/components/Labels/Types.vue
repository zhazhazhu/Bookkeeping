<template>
  <div class="types">
    <ul>
      <li v-for="(tag, i) in value" :key="i" class="tag-item">
        <Icon :name="tag"></Icon>
      </li>
      <li class="new">
        <Icon name="newIcon"></Icon>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Icon from "@/components/Icon.vue";
@Component({
  components: { Icon },
})
export default class Types extends Vue {
  @Prop() value!: string[];
}
</script>

<style lang="scss" scoped>
.types {
  > ul {
    > .tag-item {
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,187,97,1) 87%);
      padding: 10px;
      width: 100vw;
      margin-top: 10px;
      >.icon{
        display: flex;
        left: 0;
      }
    }
    >.new{
      padding: 12px;
      width: 40vw;
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,220,174,1) 77%);
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      margin: 20px auto;
    }
  }
}
</style>
