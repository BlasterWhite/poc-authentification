<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isAuth = ref(false);
</script>

<template>
  <div class="navbar">
    <h1>Auth</h1>
    <div class="link">
      <router-link to="/">Home</router-link>
      <router-link to="/docs">Docs</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="profile" v-if="isAuth">
      <router-link to="/profile">Profile</router-link>
    </div>
    <div class="auth" v-else>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: #ff000000;
  width: 100%;
  color: #282828;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;

  * {
    padding: 6px;
  }

  h1 {
    line-height: 12px;
    padding: 6px 18px;
    color: rgb(61, 241, 226);
  }

  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile,
  .auth {
    a {
      margin: 0 10px;
    }
  }

  a {
    text-decoration: none;
    color: #282828;
    font-size: 1.4rem;
    margin: 0 20px;
    font-weight: 600;
    transition: 0.3s ease-in-out;

    &:hover {
      color: rgb(241, 61, 130);
    }
  }
}
</style>
