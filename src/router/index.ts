import { AuthAPI } from '@/apis/auth';
import { createRouter, createWebHistory } from 'vue-router'
import { fetchCsrfToken } from '@/apis/csrf';

export enum RoutePath {
  Login = '/',
  Members = '/members',
}

export enum RouteName {
  Login = 'Login',
  ViewMembers = 'ViewMembers',
  UpdateMember = 'UpdateMember',
}

const routes = [
  {
    path: RoutePath.Login,
    name: RouteName.Login,
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: RoutePath.Members,
    name: RouteName.ViewMembers,
    component: () => import('../views/members/ViewListPage.vue'),
  },
  {
    path: RoutePath.Members + '/:memberId',
    name: RouteName.UpdateMember,
    component: () => import('../views/members/UpdatePage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach(async (to, from, next) => {
  await fetchCsrfToken();
  const result = await AuthAPI.authenticate();
  if (to.name !== RouteName.Login) {
    try {
      if (result) {
        next();
      } else {
        next({ name: RouteName.Login });
      }
    } catch (error) {
      console.error(error);
      next({ name: RouteName.Login });
    }
  } else {
    if (result)
      next({ name: RouteName.ViewMembers });
    else
      next();
  }
})

export default router;
