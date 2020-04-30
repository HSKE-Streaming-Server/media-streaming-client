<template>
  <div class="carusel">
    <div class="row mx-auto my-auto">
      <div :id="'Carousel' + id" class="carousel slide w-100" data-ride="carousel">
        <div class="carousel-inner w-100" role="listbox">
          <div
            class="carousel-item"
            v-for="media in content"
            v-bind:key="media.id"
            :class="{ active: media.id==0 }"
          >
            <div class="col-md-4">
              <router-link :to="'../player/' +media.name">
                <div class="card card-body">
                  <img class="img-fluid" :src="media.image" />
                  <p class="m-0 text-center">{{media.name}}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev w-auto"
          :href="'#Carousel' + id"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark border border-dark rounded-circle"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next w-auto"
          :href="'#Carousel' + id"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark border border-dark rounded-circle"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  name: "Carusel",
  props: {
    id: {
      type: Number
    },
    content: {
      type: Array
    }
  },
  mounted() {
    $("#recipeCarousel").carousel({
      interval: 10000
    });

    $(".carousel .carousel-item").each(function() {
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }
      next
        .children(":first-child")
        .clone()
        .appendTo($(this));

      for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(":first");
        }

        next
          .children(":first-child")
          .clone()
          .appendTo($(this));
      }
    });
  }
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

a:hover{
    text-decoration: none !important;
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
</style>