<template>
  <div>
    <a class="github-button" href="https://github.com/i-break-codes/fuze" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star i-break-codes/fuze on GitHub">Star</a>
    <a href="https://github.com/i-break-codes/fuze">
      <GitHubLogo />
    </a>
  </div>
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

  div {
    position: absolute;
    top: 30px;
    right: 30px;

    a {
      display: inline-block;
      margin-left: 30px;
    }
  }
</style>
