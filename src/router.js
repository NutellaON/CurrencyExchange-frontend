import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import ExchangeRates from './components/ExchangeRates.vue';

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/exchange-rates/:currency', component: ExchangeRates },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router;