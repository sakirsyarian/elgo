import { createApp } from 'vue'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import App from './App.vue'
import './style.css'
import 'flowbite';

const app = createApp(App);
app.use(ToastPlugin);
app.mount('#app');