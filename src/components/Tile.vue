<template>
  <div class="Tile">
    <router-link to="/contents/ZDF">
      <h1>{{ source.name }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["source"]
};
</script>
