<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  rules: {
    type: Object,
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "valid", "invalid"]);

const isFocused = ref(false);

const min = computed(() => {
  return props.rules.min || 0;
});

const max = computed(() => {
  return props.rules.max || Infinity;
});

const number = computed(() => {
  return props.rules.number || false;
});

const special = computed(() => {
  return props.rules.special || false;
});

const uppercase = computed(() => {
  return props.rules.uppercase || false;
});

const lowercase = computed(() => {
  return props.rules.lowercase || false;
});

const isComplete = computed(() => {
  if (props.modelValue.length < min.value) return inValid();
  if (props.modelValue.length > max.value) return inValid();
  if (number.value && !/\d/.test(props.modelValue)) return inValid();
  if (
    special.value &&
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(props.modelValue)
  )
    return inValid();
  if (uppercase.value && !/[A-Z]/.test(props.modelValue)) return inValid();
  if (lowercase.value && !/[a-z]/.test(props.modelValue)) return inValid();
  return valid();
});

const password = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

function inValid() {
  emit("invalid");
  return false;
}

function valid() {
  emit("valid");
  return true;
}
</script>

<template>
  <div class="password-field">
    <input
      type="password"
      :placeholder="label"
      v-model="password"
      @focusin="isFocused = true"
      @focusout="isFocused = false"
    />
    <div class="rules" v-if="rules" v-show="isFocused">
      <h4>Votre mot de passe doit avoir :</h4>
      <div v-if="min">
        Au <strong>Minimum {{ min }}</strong> caractères
      </div>
      <div v-if="max !== Infinity">
        Au <strong>Maximum {{ max }}</strong> caractères
      </div>
      <div v-if="number">Il doit contenir des chiffres</div>
      <div v-if="special">Il doit contenir des caractères spéciaux</div>
      <div v-if="uppercase">Il doit contenir des Majuscules</div>
      <div v-if="lowercase">Il doit contenir des Miniscules</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.password-field {
  height: 42px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .rules {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px;

    background: #eee;
    border-radius: 8px;
    position: relative;
    top: -110px;
    right: -290px;
    min-width: 200px;
    min-height: 200px;
  }
}
</style>
