<template>
  <div id="app">
    <!-- 这里不能引入组件 -->
     <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// 这里一定要写上vue后缀名
@Component
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
</style>
