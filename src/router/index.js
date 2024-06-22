import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/AppHome.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // Добавьте другие маршруты здесь
  ]
});
