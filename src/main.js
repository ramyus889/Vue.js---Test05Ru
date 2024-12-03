import './style.css';

import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import Aura from '@primevue/themes/aura';
import { MotionPlugin } from '@vueuse/motion';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.component('UseButton', Button);
app.use(ToastService);
app.use(MotionPlugin);
app.use(createPinia());
app.use(autoAnimatePlugin);
app.mount('#app');
