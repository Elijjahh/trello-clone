import './assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import AppPopup from './components/app/AppPopup.vue';

const app = createApp(App);

app.component('AppPopup', AppPopup);

app.mount('#app');
