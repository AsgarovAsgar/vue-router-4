<template>
  <div id="nav">
    <router-link to="/" id="logo">Travel App</router-link>
    <router-link 
      v-for="destination in  destinations" 
      :key="destination.id" 
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug }}"
    >
      {{ destination.name }}
    </router-link>
    <router-link :to="{ name: 'protected' }">Dashboard</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import sourceData from '@/data.json'

const destinations = ref(sourceData.destinations)

</script>