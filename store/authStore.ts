import { defineStore } from "pinia";

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

    const authenticated = ref(false);
    const user = ref({});

    const signInUser = async ({email, password}:UserSignInInterface) => {

        await useFetch('http://localhost:8080/api/auth/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: {
                email,
                password
            }
        }).then((response) => {
            const value:any = response.data.value;
            const token = value.token;
            localStorage.setItem("token", token as string);
            user.value = value.user;
            authenticated.value = true;
        }).catch(() => {
            console.log("error");
        });
    }

    const signUpUser = async ({name, email, password}:UserSignUpInterface) => {
        
        await useFetch('http://localhost:8080/api/auth/signup', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: {
                name,
                email,
                password
            }
        }).then((response) => {
            user.value = response.data.value as Object;
            authenticated.value = true;
        }).catch(() => {
            console.log("error");
        })
    }

    const logout = () => {
        localStorage.removeItem('token');
        authenticated.value = false;
        user.value = {};
    }

    return {
        authenticated, user,
        signInUser, signUpUser, logout
    }

});