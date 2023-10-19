<script setup lang="ts">
import { ref } from 'vue';
import MistakeCommandPalette from '../components/MistakeCommandPalette.vue'

const enabled = ref(true)
</script>

<template>
  <div>
    <p>Cleaning up global event listener example</p>
    <label>
      <input type="checkbox" v-model="enabled">
      {{ enabled ? 'Enabled' : 'Disabled' }}
    </label>

    <MistakeCommandPalette v-if="enabled" />
  </div>
</template>