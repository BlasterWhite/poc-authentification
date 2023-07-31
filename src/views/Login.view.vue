<script setup lang="ts">
import { ref, computed } from "vue";

const email = ref("");
const password = ref("");

const isComplete = computed(() => {
  return !(email.value && password.value);
});
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div class="btn-container">
        <button type="submit" :disabled="isComplete">Login</button>
        <a href="#">Forgot your password?</a>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .btn-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    button {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #4af633;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:disabled {
        background-color: #aaa;
        cursor: not-allowed;

        &:hover {
          background-color: #aaa;
        }
      }

      &:hover {
        background-color: #26a918;
      }
    }
  }
}
</style>
