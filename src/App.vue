<template>
  <TheNavigation />
  <div class="container">
    <RouterView v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
</script>

<style lang="css">
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translate(-30%)
  }
</style>