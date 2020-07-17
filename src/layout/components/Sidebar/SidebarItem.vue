<template>
  <!-- 侧边栏菜单项 -->
  <div>
    <template v-if="isOne">
      <app-link v-if="item.is_show" :to="resolvePath(item.node_path)">
        <el-menu-item :index="item.node_name" :class="isNest ? '' : 'submenu-title-noDropdown'">
          <item :title="item.node_name" />
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="item.node_name" popper-append-to-body>
      <template slot="title">
        <item v-if="item.is_show" :title="item.node_name" />
      </template>
      <sidebar-item v-for="child in item.part" :key="child.node_path" :item="child" :is-nest="true" :bath-path="resolvePath(child.node_path)" class="nest-menu" />
    </el-submenu>
  </div>
</template>

<script>
import { getRouteUrl } from '@/utils/routerMap';
import Item from './Item';
import AppLink from './Link';
import iosPatch from './mixin/iosPatch';

let onlyOneChild = null;
export default {
  name: 'SidebarItem',
  components: {
    Item,
    AppLink
  },
  mixins: [iosPatch],
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    };
  },
  computed: {
    isOne() {
      return this.hasOneShowingChild(this.item.part, this.item) && (!onlyOneChild.part || onlyOneChild.noShowingChildren);
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (!item.is_show) {
          return false;
        } else {
          onlyOneChild = item;
          return true;
        }
      });
      if (showingChildren.length === 1) {
        return true;
      }
      if (showingChildren.length === 0) {
        onlyOneChild = {
          ...parent,
          node_path: '',
          noShowingChildren: true
        };
        return true;
      }
      return false;
    },
    resolvePath(path) {
      return getRouteUrl(path);
    }
  }
};
</script>

<style scoped>

</style>
