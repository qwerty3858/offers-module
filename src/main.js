import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './assets/styles/layout.scss';
import './assets/demo/flags/flags.css';

import { createApp, reactive } from 'vue';
import router from './router';
import App from './App.vue';
import ApiService from '/src/service/api.service'
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';

import {prime} from "./auxiliary/components/prime";
import {directive} from "./auxiliary/directive/directive";
import {servce} from "./auxiliary/service/service";


const app = createApp(App);

app.config.globalProperties.$appState = reactive({ theme: 'saga-blue' });
ApiService.init();

app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.use(ToastService)
app.use(router);

prime(app);
directive(app);
servce(app);





app.mount('#app');