<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>模块一,首页</p>
    <p>这一套配置项目适合的是用来开发PC前端,面向大众</p>
    <HelloWorld msg="VUE+TS"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
