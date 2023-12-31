import { useAuthStore } from "~/store/authStore";

export default defineNuxtRouteMiddleware(async (to, from) => {

    if (process.server) return
    // if (process.server || process.client) return

    if (process.client) {
        const runtimeConfig = useRuntimeConfig();
        const API_URL = runtimeConfig.public.API_URL;
        const authStore = useAuthStore();
        const token = localStorage.getItem('token');
        if(!authStore.auth.authenticated && token){
            await $fetch(`${API_URL}/users/authenticated`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }
                ).then((response) => {
                    authStore.setUser(response as object);
                }).catch(() => {
                    localStorage.removeItem('token')
                }) 
        }

        const authenticatedRoutes = ['/calculator'];
        const needPermission = ['/products/add', '/products/edit', '/products/list', '/products/view'];

        const route = to.path;
        if(authenticatedRoutes.includes(route) && !authStore.auth.authenticated)
            return navigateTo('/auth/signin');
        else if(needPermission.includes(route)){
            if(!authStore.auth.authenticated)
                return navigateTo('/auth/signin');
            else if(!authStore.hasPermission(['ADMIN','MANAGER'])){
                return navigateTo('/errors/403');
            }
        }
    }
  })