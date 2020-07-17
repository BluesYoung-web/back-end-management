<template>
  <!-- 侧边栏 -->
  <div :class="showLogo ? 'has-logo' : ''">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in finalRoutes" :key="route.path" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from './Logo';
import SidebarItem from './SidebarItem';
import variables from '@/styles/variables.scss';
export default {
  name: 'Sidebar',
  components: {
    Logo,
    SidebarItem
  },
  computed: {
    ...mapGetters({
      sidebar: 'sidebar',
      routes: 'leftArr',
      showLogo: 'sidebarLogo'
    }),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    finalRoutes() {
      const temp = JSON.parse(JSON.stringify(this.routes));
      return temp.filter((item) => item && item.part && item.part instanceof Array && item.part.length > 0);
    }
  }
};
</script>
