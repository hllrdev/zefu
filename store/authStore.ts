import { defineStore } from "pinia";
import { useAppStore } from "./appStore";

interface UserSignInInterface {
    email: string,
    password: string
}

interface UserSignUpInterface {
    name: string,
    email: string,
    password: string
}

export const useAuthStore = defineStore('authStore', () => {

    const appStore = useAppStore();
    const router = useRouter();

    const runtimeConfig = useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;

    const auth = reactive({
        user: {},
        authenticated: false
    });

    const signInUser = async ({email, password}:UserSignInInterface) => {

        await useFetch(`${API_URL}/auth/signin`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: {
                email,
                password
            },
            onResponse({ response }) {
                if(response.status == 200){
                    const value:any = response._data;
                    const token = value.token;
                    auth.user = value.user;
                    auth.authenticated = true;
        
                    localStorage.setItem("token", token as string);
                    appStore.setAlert(true, 'success', 'Login realizado com sucesso.');
                    router.push('/calculator')
                }
                else if(response.status == 401){
                    appStore.setAlert(true, 'warning', 'Credenciais inválidas.');
                }
                else {
                    appStore.setAlert(true, 'error', 'Erro ao realizar login.');
                }
            }
        });
    }

    const signUpUser = async ({name, email, password}:UserSignUpInterface) => {
    
        await useFetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: {
                name,
                email,
                password
            },
            onResponse({ response }) {

                if(response.status == 409){
                    let message = response._data.split('"')[1];
                    if(message == 'Email already exists.')
                        message = 'E-mail já cadastrado.'
                    else
                        message = 'E-mail já cadastrado via Google';

                    appStore.setAlert(true, 'warning', message);
                }
                else if (response.status == 201){
                    appStore.setAlert(true, 'success', 'Cadastro realizado com sucesso!');
                    auth.user = response._data.value as Object;
                    router.push("/auth/signin");
                }
                else{
                    appStore.setAlert(true, 'error', 'Erro ao realizar cadastro.');
                }
            }
        });
    }

    const setUser = (user:object) => {
    auth.user = user;
    auth.authenticated = true;
    }

    const hasPermission = (acceptedPermissions:string[]) => {
        const user:any = {...auth.user};
        if(JSON.stringify(user) !== "{}"){
            const roles = user.roles;

            const userRoles = [];
            for (let index = 0; index < roles.length; index++) {
                const r = roles[index];
                userRoles.push(r.role);
            }

            for (let index = 0; index < acceptedPermissions.length; index++) {
                const acceptedPermission = acceptedPermissions[index];
                if(userRoles.includes(acceptedPermission))
                    return true;  
            }
        }
        
        return false;
    }

    return {
        auth, setUser, hasPermission,
        signInUser, signUpUser
    }

}); 