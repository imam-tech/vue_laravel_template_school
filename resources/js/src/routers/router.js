import Vue from 'vue'
import Router from 'vue-router'

import hasLoggedIn from "../middleware/hasLoggedIn";

import authRouter from './authRouter';
import ParentLayout from '../layouts/ParentLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
    routes: [
        {
            path: '/app',
            component: ParentLayout,
            children: [
                {
                    path: '',
                    component:  () => import('../pages/Index'),
                    meta: {
                        // middleware: hasLoggedIn,
                        pageTitle: 'Dashboard',
                    },
                }
            ]
        },
        {
            path: '/auth',
            component: AuthLayout,
            children: authRouter
        }
    ]
})

function nextFactory(context, middleware, index){
    const subsequentMiddleware = middleware[index];
    if (!subsequentMiddleware) return context.next;

    return (...parameters) =>{
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({ ...context, next: nextMiddleware });
    }
}
router.beforeEach((to, from, next) =>{
    if (to.meta.middleware){
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
        const context = {
            from, next, router, to
        };
        const nextMiddleware = nextFactory(context, middleware, 1);
        return middleware[0]({ ...context, next: nextMiddleware });
    }
    return next();
})

export default router
