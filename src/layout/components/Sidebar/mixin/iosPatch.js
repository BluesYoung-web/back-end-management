import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['device'])
  },
  mounted() {
    this.fixBusIniOS();
  },
  methods: {
    fixBusIniOS() {
      const $subMenu = this.$refs.subMenu;
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave;
        $subMenu.handleMouseleave = (e) => {
          if (this.device === 'mobile') {
            return;
          }
          handleMouseleave(e);
        };
      }
    }
  }
};
