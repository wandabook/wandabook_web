import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import('../view/WHome.vue'),
        },
        {
            path: "/book/:id",
            name: "bookDetail",
            component: () => import('../view/products/WBookDetail.vue'),
        },
        {
            path: "/sign_up",
            name: "CreateAccount",
            component: () => import('../view/authentication/WSignUp.vue'),
        },
        {
            path: "/login",
            name: "login",
            component: () => import('../view/authentication/WLogin.vue'),
        }
    ],
});

/*router.beforeEach(async (to, from, next) => { });*/

export default router;
