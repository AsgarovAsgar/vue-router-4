import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShowView.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) }),
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShowView.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;