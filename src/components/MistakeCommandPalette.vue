<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const active = ref(false)

function handleKeyboardShortcut(e: KeyboardEvent) {
  if(e.metaKey && e.key === 'k') {
    console.log('toggling command palette');
    active.value = !active.value
    e.preventDefault()    
  }
}

onMounted(() => {
  document.body.addEventListener('keydown', handleKeyboardShortcut)
})

// DO NOT FORGET TO REMOVE CUSTOM EVENT LISTENERS !!!
onUnmounted(() => {
  document.body.removeEventListener('keydown', handleKeyboardShortcut)
})
</script>

<template>
  <div v-if="active">
    <input type="text" placeholder="Command Palette">
  </div>
</template>