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

    const auth = reactive({
        user: {},
        authenticated: false,
        token: ''
    });

    const signInUser = async ({email, password}:UserSignInInterface) => {

        await useFetch('http://localhost:8080/api/auth/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                email,
                password
            }
        }).then((response) => {
            const value:any = response.data.value;
            const token = value.token;
            localStorage.setItem("token", token as string);
            auth.user = value.user;
            auth.authenticated = true;
            auth.token = value.token;
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
            auth.user = response.data.value as Object;
        }).catch(() => {
            console.log("error");
        })
    }

    const nameFormatted = computed(() => {
        const user:any = auth.user;
        if(user.name)
            return user.name.split(" ")[0];
        return null;
    })

    return {
        auth, nameFormatted,
        signInUser, signUpUser
    }

});