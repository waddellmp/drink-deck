import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import DrinksView from '@/views/DrinksView.vue';
import ListVue from '@/views/ListVue.vue';
import SearchView from '@/views/SearchView.vue';
import FavoritesView from '@/views/FavoritesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: DrinksView
    },
    {
      path: '/lists',
      name: 'lists',
      component: ListVue
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    }
  ]
});

export default router;
