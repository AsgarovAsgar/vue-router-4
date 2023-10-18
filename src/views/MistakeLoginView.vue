<script setup lang="ts">
import { ref } from 'vue';
import MistakeLoginForm from '../components/MistakeLoginForm.vue';

const loginData = ref({
  email: 'me@test.com',
  password: '1234'
})

</script>

<template>
  <div>
    <MistakeLoginForm v-model="loginData" />
    <pre>
      {{ loginData }}
    </pre>
  </div>
</template>