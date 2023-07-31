<script setup lang="ts">
import { ref, computed } from "vue";
import PasswordField from "../components/PasswordField.vue";

const email = ref("");
const password = ref("");

const isComplete = computed(() => {
  return !(email.value && password.value);
});

const passwordRules = {
  min: 8,
  max: 20,
  number: false,
  special: false,
  uppercase: true,
  lowercase: true,
};
</script>

<template>
  <div class="register">
    <h1>Register</h1>
    <form>
      <input type="text" placeholder="Email" v-model="email" />
      <password-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
      />
      <password-field v-model="password" label="Confirm password" />
      <div class="btn-submit" type="submit" :disabled="isComplete">
        Register
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "@assets/variables.scss";

.register {
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid $primary;
    border-radius: 5px;
    font-size: 1rem;
    transition: 0.3s ease-in-out;
  }

  div.btn-submit {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: $primary;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: darken($primary, 10%);
    }
  }
}
</style>
