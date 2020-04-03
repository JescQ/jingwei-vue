import Vue from 'vue'
import Router from 'vue-router'

import layoutRouter from './modules/layoutRouter'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            redirect: '/layout'
        },
        {
            path: '/layout',
            name: 'layout',
            component: () =>
                import ('@/views/layout'),
            redirect: '/layout/energyOverview',
            children: layoutRouter
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/views/login')
        },
        {
            path: '*',
            name: '404',
            component: () =>
                import ('@/views/404')

        }
    ]
})

export default router