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
    <select style="max-width: 120px;" @change="changeRoute($event)">
      <option value="null" disabled selected>Select mistake</option>
      <option :value="mistake" v-for="mistake in mistakes" :key="mistake">{{ mistake }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import sourceData from '@/data.json'
import { useRouter } from 'vue-router';
const router = useRouter()

const destinations = ref(sourceData.destinations)
const mistakes = ref([
  'unintentionally-mutating-props',
  'forgetting-to-clean-up-your-manual-event-listeners',
  'expecting-changes-to-non-reactive-dependencies-to-trigger-updates'
])

const changeRoute = e => {
  const name = e.target.value
  router.push({ name })
}

</script>