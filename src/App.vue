<template>
  <TheNavigation />
  <div class="container">
    <RouterView :key="$route.path" />
  </div>
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
</script>