<template>
  <div class="login">
    <form class="form" @submit.prevent="handleSubmit">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="form.username" name="username" type="text" class="input">
      <label for="password">Password</label>
      <input v-model="form.password" name="password" type="password" class="input">
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const form = ref({
  username: '',
  password: ''
})

const handleSubmit = () => {
  window.user = form.value.username
  router.push({ name: 'protected' })
}
</script>