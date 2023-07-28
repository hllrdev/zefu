import { useAuthStore } from "~/store/authStore"

export default defineNuxtRouteMiddleware((to, from) => {

    const authStore = useAuthStore();

    let permission = false;

    if(authStore.authenticated){
        const roles = authStore.user.roles;
        for (let index = 0; index < roles.length; index++) {
            if(roles[index].role == 'MANAGER' || roles[index].role == 'ADMIN'){
                permission = true;
            }
        }
    }

    if(!permission){
        return navigateTo("/")     
    }
    
})