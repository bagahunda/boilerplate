import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/dashboard',

    routes: [
        {
            path: '/profile',
            name: 'profile',
            component: () =>
                import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
        },
    ],
});
