<template>
  <div
    :data-notification-type="getNotification.type"
    :class="{ 'fadeInDown': getNotification.show }">
    <p>{{ getNotification.message }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Notification',
  computed: {
    ...mapGetters(['getNotification']),
  },
  mounted() {
    setTimeout(() => {
      this.showNotification({
        show: false,
        message: '',
      });
    }, 2000);
  },
  methods: {
    ...mapActions(['showNotification']),
  },
};
</script>

<style lang="scss" scoped>
  div {
    padding: 10px 20px;
    border-radius: 3px;
    position: absolute;
    top: 40px;
    background-color: var(--white);
    color: var(--black-80);
    left: 50%;
    transform: translate(-50%);

    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
