<script setup lang="ts">
import { ref, computed } from "vue";

const email = ref("");
const password = ref("");
const isPwd = ref(true);

const isComplete = computed(() => {
  return !(email.value && password.value);
});

function isEmailValid(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function onsubmit() {
  console.log("submit");
}
</script>

<template>
  <div class="login">
    <h3>Login</h3>
    <q-form @submit="onsubmit">
      <q-input
        v-model="email"
        label="Email"
        type="email"
        color="primary"
        lazy-rules
        :rules="[
          (val: string) =>
            (!!val && isEmailValid(val)) || 'Valid email is required',
        ]"
      />
      <q-input
        v-model="password"
        label="Password"
        :type="isPwd ? 'password' : 'text'"
        :rules="[(val: string) => !!val || 'Password is required']"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-btn
        type="submit"
        label="Login"
        :disable="isComplete"
        color="primary"
      />
      <q-btn
        flat
        label="I don't have an account"
        size="sm"
        color="primary"
        @click="$router.push('/register')"
      />
    </q-form>
  </div>
</template>

<style scoped lang="scss">
.login {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
