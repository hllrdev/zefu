import { useAuthStore } from "~/store/authStore";

export default defineNuxtRouteMiddleware(async (to, from) => {

    const authStore = useAuthStore();

    const protectedRoutes = [
        '/calculator'
    ];

    const routesPermission = [
        '/products/list', '/products/add', '/products/edit'
    ]

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
        
    if(protectedRoutes.includes(to.fullPath) && (!authStore.auth.authenticated)){
        return navigateTo("/auth/signin")
    }
    else if((to.fullPath.split("/")[1] == "auth") && (authStore.auth.authenticated)){
        authStore.auth.authenticated = false;
        authStore.auth.user = {};
        localStorage.removeItem("token");
    }
    else if ((routesPermission.includes(to.fullPath))){

        if(authStore.auth.authenticated){
            const user:any = authStore.auth.user;
            const roles = user.roles;
            let permission = false;
            const havePermission = ['ADMIN', 'MANAGER'];
            for (let index = 0; index < roles.length; index++) {
                if(havePermission.includes(roles[index].role))
                    permission = true;
                    break;      
            }

            if(!permission){
                return navigateTo("/")
            }
        }
        else {
            return navigateTo("/auth/signin")
        }
    }
    // }
})