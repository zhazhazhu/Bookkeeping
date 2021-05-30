<template>
  <div class="nav-wrapper" :class=" classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class=" classPrefix && `${classPrefix}-content`  ">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Labels from '@/views/Labels.vue'

@Component({
  components:{Labels}
})
export default class Layout extends Vue{
  @Prop() classPrefix !: string
  @Prop() value !: string[]
  newValue:string[]|undefined
  methods(){
    this.newValue = this.value
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex-grow: 1;
  overflow: auto;
}
</style>