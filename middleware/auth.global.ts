import { useAuthStore } from "~/store/authStore";

export default defineNuxtRouteMiddleware((to, from) => {

    const authStore = useAuthStore();

    const protectedRoutes = [
        '/calculator', 
        '/products/list', '/products/add', '/products/edit'
    ];

    if(process.client){
        
        if(!authStore.authenticated){
            const token = localStorage.getItem("token");
            if(token)
                authStore.validate(token);
            else{
                if(protectedRoutes.includes(to.fullPath))
                    return navigateTo("/auth/signin")
                }
        }
    }
})