<template>
  <!-- 控制面板 -->
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import { getUserInfo } from '@/store/sessionStorage/index';
export default {
  name: 'Dashboard',
  data() {
    return {
      name: ''
    };
  },
  mounted() {
    this.name = getUserInfo().real_name;
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
