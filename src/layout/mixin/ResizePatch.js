/**
 * 设备切换的补丁（手机）
 */

import store from '@/store';

const { body } = document;
const WIDTH = 992;

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('app/closeSidebarAsync', { withoutAnimation: false });
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler);
  },
  beforeDestory() {
    window.removeEventListener('resize', this.$_resizeHandler);
  },
  mounted() {
    if (this.$_isMobile) {
      store.dispatch('app/toggleDeviceAsync', 'mobile');
      store.dispatch('app/closeSideBarAsync', { withoutAnimation: true });
    }
  },
  methods: {
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile();
        store.dispatch('app/toggleDeviceAsync', isMobile ? 'mobile' : 'desktop');
        isMobile && store.dispatch('app/closeSideBarAsync', { withoutAnimation: true });
      }
    }
  }
};
