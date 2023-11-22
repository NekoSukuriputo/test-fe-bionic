import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'soal-a', component: () => import('pages/SoalA.vue') },
      { path: 'soal-b', component: () => import('pages/SoalB.vue') },
      { path: 'detail-b', component: () => import('pages/DetailB.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
