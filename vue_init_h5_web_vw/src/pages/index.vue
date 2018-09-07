<template>
  <div class="index">
      <router-link to="/home">模块一</router-link> |
      <router-link to="/index/about">模块二</router-link>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
 @Component
export default class IndexPage extends Vue {

}
</script>
