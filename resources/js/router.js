// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import PostComponent from './components/PostComponent.vue';

// Vue.use(VueRouter)

// export default new VueRouter({
//     mode: 'history',

//     routes: [
//         {
//             path: '/posts',
//             component: PostComponent
//         }
//     ]
// })

import {createRouter, createWebHistory}  from 'vue-router'
import PostComponent from './components/PostComponent.vue';

const routes = [
    {
        path:'/posts',
        name: PostComponent,
        
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router