<template>
  <div class="notification-bar">
    <div class="alert alert-danger" role="alert">
      <p>{{ notification.message }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NotificationBar",
  data() {
    return {
      timeout: null
    };
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.removeNotification(this.notification), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: mapActions("notification", ["removeNotification"])
};
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
