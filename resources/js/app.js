import { createApp } from 'vue';
import router from './router';
import './bootstrap';
import Index from './components/Index.vue';

const app = createApp({
    el: '#app',

    components:{
        Index
    },

    router 
});
app.mount('#app');