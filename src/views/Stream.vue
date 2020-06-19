<template>
  <div class="container">
    <div class="row align-items-center" v-if="detail != null">
        <div class="col-6 mt-5 card">
          <img
            class="card-img-top mt-2"
            :src="'http://placehold.it/380?text=' + detail.name"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">{{ detail.description }}</p>
            <router-link
              class="btn"
              :to="{
                name: 'play-now',
                params: { stream_id: stream_id}
              }"
              v-on:click.native="addToHistory(stream_id)"
              >Play Now</router-link
            >
          </div>
        </div>
    </div>

    <table class="w-100 h-100" v-if="detail == null">
      <tr>
        <td class="text-center align-middle">
          <div class="spinner-border m-5 spinner-border-lg" role="status"></div>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import StreamsServices from "../services/StreamsServices";
import CookieSerice from "../services/CookieSerice";
import { mapActions } from "vuex";

export default {
  name: "Stream",
  props: ["stream_id"],
  data() {
    return {
      detail: null
    };
  },
  computed: {

  },
  methods: {
    ...mapActions("history", ["addToHistory"]),
  },
  created() {

    let token = CookieSerice.getToken();
    StreamsServices.postDetail({ streamId: this.stream_id, token: token }).then(
      response => {
        this.detail = response.data;
      }
    );
  }
};
</script>

<style scoped lang="scss">
@import "../style.scss";
.card {
  margin: 0 auto;
  float: none;
  margin-bottom: 10px;
  background-color: $dark-gray;
}
.card-body {
  background-color: $dark-gray;

  p {
    color: white;
  }
  .btn {
    background-color: $neon-blue-green !important;
    transition: background .75s;
  }

  .btn:hover {
    background-color: $neon-blue !important;
  }
}
</style>
