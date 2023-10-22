import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import sourceData from '@/data.json'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    alias: '/home'
  },
  // {
  //   path: '/home',
  //   redirect: { name: 'home' }
  // },
  {
    path: "/protected",
    name: "protected",
    component: () => import('@/views/ProtectedView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import('@/views/InvoicesView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShowView.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter: (to, from) => {
      const exists = sourceData.destinations
        .find(destination => destination.id === parseInt(to.params.id))
      if(!exists) return {
        name: 'NotFound',
        // always keep the url while rendering a different page
        params: { pathMatch: to.path.split('/').slice(1) },
        query: to.query,
        hash: to.hash
      }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShowView.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/mistakes/unintentionally-mutating-props',
    name: 'unintentionally-mutating-props',
    component: () => import('@/views/MistakeLoginView.vue')
  },
  {
    path: '/mistakes/forgetting-to-clean-up-your-manual-event-listeners',
    name: 'forgetting-to-clean-up-your-manual-event-listeners',
    component: () => import('@/views/MistakeEventListenerView.vue')
  },
  {
    path: '/mistakes/expecting-changes-to-non-reactive-dependencies-to-trigger-updates',
    name: 'expecting-changes-to-non-reactive-dependencies-to-trigger-updates',
    component: () => import('@/views/MistakeNonReactiveDataView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise(resolve => {
      setTimeout(() => resolve({ top: 0 }), 500) 
      // should be the same with page transition duration
    })
  }
});

router.beforeEach((to, from) => {
  if(to.meta.requiresAuth && !window.user) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router;