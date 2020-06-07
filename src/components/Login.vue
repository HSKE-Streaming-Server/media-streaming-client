<template>
  <div class="login">
    <table class="w-100 h-100">
      <tr class="h-100 w-100">
        <td class="text-center align-middle">
          <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-12 login-container">
                <img id="logo" class="my-5" src="../assets/logo.png" />
                <div class="input-group">
                  <input
                    id="usernameInput"
                    class="form-control input-field"
                    type="text"
                    placeholder="username"
                    v-on:keyup="onKeyUp"
                    v-model="username"
                  />
                  <input
                    id="passwordInput"
                    class="form-control input-field"
                    type="password"
                    placeholder="password"
                    v-on:keyup="onKeyUp"
                    v-model="password"
                  />
                </div>
                <button class="btn my-4 login-button px-4"  v-on:click="performLogin">Login</button>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import "hash.js";

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null
    };
  },
  computed: {
    ...mapState("authentication", ["userData"])
  },
  methods: {
    ...mapActions("authentication", ["login"]),
    performLogin: function() {
      if (!this.username || !this.password) return;
      var  hash = require('hash.js');
      this.login({ 
        username: this.username, 
        password: hash.sha256().update(this.password).digest('hex') 
        }).then(
        success => {
          if (success) {
            this.$router.push("home");
          } else {
            this.username = null;
            this.password = null;
          }
        }
      );
    },
    onKeyUp: function(event) {
      if (event.keyCode === 13) {
        this.performLogin();
      }
    }
  },
  created(){}
};
</script>
<style scoped lang="scss">
@import "../style.scss";

#logo {
  max-width: 90px;
  height: auto;
}

.login {
  height: 100vh;
  background-color: $dark-gray;
}

.form-control:focus {
  border-color: $neon-blue-green;
  box-shadow: none;
  background-color: $gray;
  color: $white;
}

.login-button {
  @extend .glow;
  color: $dark-gray;
  background-color: $neon-blue-green;
  border-color: $neon-blue-green;
  border-radius: 0;
  cursor: pointer;
  font-weight: bold;
  color: $dark-gray;
}

.input-field {
  color: $white;
  background-color: transparent;
  border-color: $neon-blue-green;
  border-radius: 0;
}

.input-group {
  @extend .glow;
}

.login-container {
  max-width: 30em;
}
</style>