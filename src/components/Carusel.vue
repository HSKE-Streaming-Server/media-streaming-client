<template>
  <div class="container">
    <carousel
      :per-page="2"
      :mouse-drag="true"
      :navigationEnabled="true"
      :centerMode="true"
      :autoplay="true"
      :loop="true"
      paginationActiveColor="rgb(50, 50, 50)"
      paginationColor="white"
      easing="ease-out"
    >
      <slide
        v-for="media in content"
        v-bind:key="media.id"
        :data-name="media.name"
      >
        <div class="col-12">
          <router-link
            :to="{
              name: 'stream',
              params: { stream_id: media.id, source: source }
            }"
          >
            <div class="card card-body">
              <img class="img-fluid" :src="media.image" />
              <p class="m-0 text-center">{{ media.name }}</p>
            </div>
          </router-link>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script>
export default {
  name: "Carusel",
  props: ["content", "source"]
};
</script>
<style scoped lang="scss">
@import "../style.scss";

.card-body {
  background-color: $dark-gray;

  p {
    color: white;
  }
}

a:hover {
  text-decoration: none !important;
}

.carousel-item:hover {
  cursor: pointer;
}

@media (max-width: 900px) {
  .carousel-inner .carousel-item > div {
    display: none;
  }
  .carousel-inner .carousel-item > div:first-child {
    display: block;
  }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

/* display 3 */
@media (min-width: 900px) {
  .carousel-inner .carousel-item-right.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(33.333%);
  }

  .carousel-inner .carousel-item-left.active,
  .carousel-inner .carousel-item-prev {
    transform: translateX(-33.333%);
  }
}

.carousel-inner .carousel-item-right,
.carousel-inner .carousel-item-left {
  transform: translateX(0);
}

.VueCarousel-dot {
}
</style>
