<script setup lang="ts">
import { ref, watch } from 'vue';

// NEVER EVER MUTATE THE PROP!!!

type Props = {
  modelValue: {
    email: String,
    password: String
  }
}
const props = defineProps<Props>()
const localValue = ref({...props.modelValue})
watch(props.modelValue, (newValue) => localValue.value = newValue, {
  deep: true
})

defineEmits<{
  (e: 'update:modelValue', payload: Props['modelValue']): void
}>()

</script>

<template>
  <div>
    <form @submit.prevent="$event => $emit('update:modelValue', {...localValue})">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="localValue.email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="localValue.password">
      </div>
      <button>Login</button>
    </form>
  </div>
</template>