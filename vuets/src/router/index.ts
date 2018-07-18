import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const Demo = () => import('@/views/Demo.vue');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/demo',
            name: 'demo',
            component: Demo
        }
    ]
});
