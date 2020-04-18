<template>
  <div class="Contents">
    <div class="container">
        <h1>{{source}} Contents</h1>
        <Carusel></Carusel>
    </div>
  </div>
</template>
<script>
import Carusel from "@/components/Carusel.vue";

export default {
  name: "Contents",
  components: {
    Carusel
  },
  data() {
    return {
      source: ""
    };
  },
  computed: {},
  methods: {},
  created() {
    this.source =  this.$router.currentRoute.params.source;
  }
};
</script>