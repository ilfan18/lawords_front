import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import components from '@/components/UI';
import directives from '@/directives';
import VueFeather from 'vue-feather';

const app = createApp(App);

components.forEach((component) => {
	app.component(component.name, component);
});

directives.forEach((directive) => {
	app.directive(directive.name, directive);
});

app.component(VueFeather.name, VueFeather);

app.use(store).use(router).mount('#app');
