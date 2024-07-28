import './assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import AppPopup from '@/components/app/AppPopup.vue';
import AppInput from '@/components/app/AppInput.vue';
import AppCheckbox from '@/components/app/AppCheckbox.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.component('AppPopup', AppPopup);
app.component('AppInput', AppInput);
app.component('AppCheckbox', AppCheckbox);

app.mount('#app');
