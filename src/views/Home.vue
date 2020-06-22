<!--suppress ALL -->
<template>
  <div class="home">
    <table class="w-100 h-100">
      <tr>
        <td class="text-center align-middle" v-if="history.length > 0">
          <Carusel class="my-3" :content="history" :id="0"></Carusel>
        </td>
        <td class="text-center align-middle" v-else>
          <p>You have no History yet.</p>
          <router-link :to="{ name: 'source', params: { type: 'video' } }">
            <button class="btn">start watching</button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Carusel from "../components/Carusel.vue";

export default {
  name: "Home",
  components: {
    Carusel
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("history", ["history"])
  },
  methods: {
    ...mapActions("history", ["fetchAllHistory", "saveAllHistory"])
  },
  created() {
    this.fetchAllHistory();
  }
};
</script>
<style scoped lang="scss">
@import "../style.scss";

.home {
  height: 100vh;
}
.btn {
  background-color: $neon-blue-green !important;
  transition: background 0.75s;
}

.btn:hover {
  background-color: $neon-blue !important;
}
</style>
