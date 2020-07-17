<template>
  <!-- 所有的子页面都在此组件内部显示 -->
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="path" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppMain',
  computed: {
    ...mapGetters(['cachedViews']),
    path() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
  .app-main {
    min-height: calc(100vh - 85px);
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 20px;
  }
  .fixed-header + .app-main {
    padding-top: 50px;
  }
</style>
<style lang="scss">
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
</style>

