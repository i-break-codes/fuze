<template>
  <a href="https://github.com/i-break-codes">
    <GitHubLogo />
  </a>
</template>

<script>
import GitHubLogo from '@/assets/github.svg';

export default {
  components: {
    GitHubLogo,
  },
};
</script>

<style lang="scss" scoped>
  svg {
    width: 32px;
    fill: var(--white);
  }

  a {
    position: absolute;
    top: 30px;
    right: 30px;
  }
</style>
