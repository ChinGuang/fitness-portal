import { createRouter, createWebHistory } from 'vue-router'

export enum RoutePath {
  Login = '/',
  Members = '/members',
}

const routes = [
  {
    path: RoutePath.Login,
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: RoutePath.Members,
    name: 'Members',
    component: () => import('../views/members/ViewListPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router;
