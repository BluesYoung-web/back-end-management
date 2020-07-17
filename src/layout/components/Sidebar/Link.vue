<template>
  <a v-if="linkProps(to) === 'a'" href="to" target="_blank" rel="noopener">
    <slot />
  </a>
  <router-link v-else to="to">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'Link',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    isHref(url) {
      return /^(https?:|mailto:|tel:)/.test(url);
    },
    linkProps(url) {
      if (this.isHref(url)) {
        return 'a';
      } else {
        return 'router-link';
      }
    }
  }
};
</script>
