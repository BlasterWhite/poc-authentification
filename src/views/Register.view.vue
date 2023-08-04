<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const fName = ref("");
const lName = ref("");
const cPassword = ref("");

const isPwd = ref(true);
const isSecondPwd = ref(true);

const isComplete = ref(false);

function isEmailValid(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const isLengthValid = (val: string) => {
  const minLength = 8;
  const maxLength = 48;
  return (
    (val.length >= minLength && val.length <= maxLength) ||
    `Password must be between ${minLength} and ${maxLength} characters long`
  );
};

const isPasswordContainsLowercase = (val: string) => {
  const re = /[a-z]/;
  return (
    re.test(val) ||
    "Password must contain at least one lowercase alphabetical character"
  );
};

const isPasswordContainsUppercase = (val: string) => {
  const re = /[A-Z]/;
  return (
    re.test(val) ||
    "Password must contain at least one uppercase alphabetical character"
  );
};

const isPasswordContainsNumber = (val: string) => {
  const re = /[0-9]/;
  return re.test(val) || "Password must contain at least one numeric character";
};

const isPasswordContainsSpecialCharacter = (val: string) => {
  const re = /[!@#$%^&*]/;
  return (
    re.test(val) ||
    "Password must contain at least one special character (!@#$%^&*)"
  );
};
</script>

<template>
  <div class="register">
    <h3>Register</h3>
    <q-form v-if="true">
      <q-input
        v-model="fName"
        label="First Name"
        type="text"
        color="primary"
        lazy-rules
        :rules="[(val: string) => !!val || 'A First Name is required']"
      />
      <q-input
        v-model="lName"
        label="Last Name"
        type="text"
        color="primary"
        lazy-rules
        :rules="[(val: string) => !!val || 'A Last Name is required']"
      />
      <q-input
        v-model="email"
        label="Email"
        type="email"
        color="primary"
        lazy-rules
        :rules="[
          (val: string) => !!val || 'Valid email is required',
          (val: string) => isEmailValid(val),
        ]"
      />
      <q-input
        v-model="password"
        label="Password"
        :type="isPwd ? 'password' : 'text'"
        :rules="[
          (val: string) => !!val || 'Password is required',
          (val: string) => isLengthValid(val),
          (val: string) => isPasswordContainsLowercase(val),
          (val: string) => isPasswordContainsUppercase(val),
          (val: string) => isPasswordContainsNumber(val),
          (val: string) => isPasswordContainsSpecialCharacter(val),
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input
        v-model="cPassword"
        label="Password"
        :type="isSecondPwd ? 'password' : 'text'"
        :rules="[
          (val: string) =>
            (!!val && val === password) || 'Passwords must match',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isSecondPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isSecondPwd = !isSecondPwd"
          />
        </template>
      </q-input>
      <q-btn
        type="submit"
        label="Register"
        :disable="isComplete"
        color="primary"
      />
      <q-btn
        flat
        label="I already have an account"
        size="sm"
        color="primary"
        @click="$router.push('/login')"
      />
    </q-form>
  </div>
</template>

<style scoped lang="scss">
.register {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
