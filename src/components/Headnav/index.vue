<template>
  <!-- 头部导航组件 -->
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(route, index) in routes" :key="index" :item="route" :index="route.node_name" v-text="route.node_name" />
    </el-menu>
  </div>
</template>

<script>
import { getUserInfo } from '@/store/sessionStorage';
export default {
  name: 'Headnav',
  data() {
    return {
      activeIndex: '客服工具'
    };
  },
  computed: {
    routes() {
      return getUserInfo().menuBar.filter((item) => item.is_show === 1);
    }
  },
  created() {
    function clearIsShow(arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].is_show === 0) {
          arr.splice(i, 1);
        } else {
          clearIsShow(arr[i].part);
        }
      }
      return arr;
    }
    this.$store.dispatch('leftNav/setLeftArrAsync', clearIsShow(this.routes[0].part));
  },
  methods: {
    handleSelect(key, keyPath) {
      this.routes.forEach((item) => {
        if (item.node_name === key) {
          this.$store.dispatch('leftNav/setLeftArrAsync', item.part);
        }
      });
    }
  }
};
</script>

<style scoped>
  .el-menu--horizontal > .el-menu-item {
    height: 50px;
    line-height: 50px;
  }
</style>
