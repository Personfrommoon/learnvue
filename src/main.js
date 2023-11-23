import { createApp } from 'vue'
import './style.scss'
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './pages/Home.vue';
import ToDo from './pages/ToDo.vue';
const routes = [
    { path: '/', component: Home }
    { path: '/todo', component: ToDo }
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  const app = createApp(App);

  app.use(router);

  app.mount(#app);

createApp(App).mount('#app');
