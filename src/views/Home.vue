<template>
  <div>
    <h1>Home</h1>
    <router-link :to="{ name: 'source', params: { type: type } }"
      >SOURCE</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Country",
  data() {
    return {
      type: "music"
    };
  }
};
</script>
