<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <RouterLink
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }"
          >
          <ExperienceCard :experience="experience" />
        </RouterLink>
      </div>
    </section>
    <RouterView />
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue';
import { computed } from 'vue'

const props = defineProps({
  id: { type: Number, required: true }
})

// ***when we get id directly from route
// import { useRoute } from 'vue-router';
// const route = useRoute()
// const destinationId = computed(() => parseInt(route.params.id))

const destination = computed(() => sourceData.destinations
  .find(destination => destination.id === props.id
  ))

// ***when we fetch data from api
// const destination = ref(null)
// const fetchDestination = async () => {
//   const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}`)
//   destination.value = await response.json()
// }
// fetchDestination()

</script>