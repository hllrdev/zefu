import { useAuthStore } from "~/store/authStore";

export default defineNuxtRouteMiddleware(async (to, from) => {

    const authStore = useAuthStore();

    const protectedRoutes = [
        '/calculator', 
        '/products/list', '/products/add', '/products/edit'
    ];

    if(process.client){
        if(!authStore.auth.authenticated){
            const token = localStorage.getItem("token");
            if(token){
                const response = await authStore.validate(token);
                if(response){
                    authStore.auth.user = response;
                    authStore.auth.authenticated = true;
                };
            }
        }
    }
})