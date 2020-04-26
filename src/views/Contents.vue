<template>
  <div class="Contents py-4">
      <Carusel class="my-3" :content=media :id=0></Carusel>
      <Carusel class="my-3"  :content=media :id=1></Carusel>
      <Carusel  class="my-3" :content=media :id=2></Carusel>
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
      source: "",
      media: [
        {
          id: "0",
          name: "media1",
          image: "http://placehold.it/380?text=1",
          type: "video",
          description: "just a test"
        },
        {
          id: "1",
          name: "media2",
          image: "http://placehold.it/380?text=2",
          type: "video",
          description: "just a test"
        },
        {
          id: "2",
          name: "media3",
          image: "http://placehold.it/380?text=3",
          type: "video",
          description: "just a test"
        },
        {
          id: "3",
          name: "media4",
          image: "http://placehold.it/380?text=4",
          type: "video",
          description: "just a test"
        },
        {
          id: "4",
          name: "media5",
          image: "http://placehold.it/380?text=5",
          type: "video",
          description: "just a test"
        }]
    };
  },
  computed: {},
  methods: {},
  created() {
    this.source = this.$router.currentRoute.params.source;
  }
};
</script>