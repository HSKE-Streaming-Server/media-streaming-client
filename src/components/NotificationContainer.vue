<!--suppress ALL -->
<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    ></NotificationBar>
  </div>
</template>

<script>
import NotificationBar from "./NotificationBar";
import { mapState } from "vuex";
export default {
  name: "NotificationContainer",
  components: {
    NotificationBar
  },
  computed: {
    ...mapState("notification", ["notifications"])
  }
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding-right: 40px;
}
</style>
