<template>
  <div class="home">
    <Carusel class="my-3" :content="history" :id="0" v-if="history"></Carusel>
    <table class="w-100 h-100" v-if="!history">
      <tr>
        <td class="text-center align-middle">
          <p>You have no History yet.</p>
          <router-link :to="{ name: 'source', params: { type: 'video' } }">
            <button class="btn btn-dark">start watching</button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Carusel from "@/components/Carusel.vue";

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
    this.fetchAllHistory(this.history);
    console.log(this.history);
  }
};
</script>
<style scoped lang="scss">
@import "../style.scss";

.home {
  height: 100vh;
}
</style>
