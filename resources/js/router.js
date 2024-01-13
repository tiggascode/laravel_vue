import { Vue } from 'vue';
import  VueRouter from '/node_modules/.vite/deps/vue-router.js?v=05a616f1';
import PostComponent from './components/PostComponent.vue';
import TagComponent from './components/TagComponent.vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/posts',
            component: PostComponent
            
        },
        {
            path: '/tags',
            component: TagComponent
            
        },
    ]
})