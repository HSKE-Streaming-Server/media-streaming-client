<template>
  <div id="notFound">
    <table class="w-100 h-100">
      <tr>
        <td class="text-center align-middle">
          <h1 class="text-center">Oops!</h1>
          <h3 class="text-center">This page is not found</h3>
          <router-link  :to="{ name: 'home' }"> <button class="btn"> Go Home</button> </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "NotFound"
  };
</script>

<style lang="scss">
  @import "./src/style.scss";

  body {
    overflow-x: hidden;
  }

  #notFound {
    @extend .font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: $gray;
    color: $white;
    height: 100vh;
  }

  .btn {
    background-color: $neon-blue-green !important;
  }
  .btn:hover {
    background-color: $neon-blue !important;
  }

  h1 {
    background: -webkit-linear-gradient($neon-green, $neon-blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
