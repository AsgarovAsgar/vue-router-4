<template>
  <div>
    <h1>Welcome, {{ username }}</h1>
    <router-link :to="{ name: 'invoices' }" style="margin-right: 8px;">
      <button>Invoices</button>
    </router-link>
    <button @click="handleLogout">Log Out</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const username = ref(window.user)

const handleLogout = () => {
  window.user = null
  router.push({ name: 'home' })
}
</script>