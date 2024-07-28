import './assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import AppPopup from '@/components/app/AppPopup.vue';
import AppInput from '@/components/app/AppInput.vue';
import AppCheckbox from '@/components/app/AppCheckbox.vue';

const app = createApp(App);

app.component('AppPopup', AppPopup);
app.component('AppInput', AppInput);
app.component('AppCheckbox', AppCheckbox);

app.mount('#app');
