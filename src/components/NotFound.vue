<template>
  <div>
    <h1>Oops!</h1>
    <h3>This page is not found</h3>
    <router-link :to="{ name: 'home' }">Go Home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped></style>
