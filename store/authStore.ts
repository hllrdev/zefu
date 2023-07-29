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
        authenticated: false

    });

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
            auth.user = value.user;
            auth.authenticated = true;
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

    const validate = async (token:string) => {
        
        const valid = await useFetch('http://localhost:8080/api/auth/validate',{
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then((response) => {
            return response.data.value;
            
        }).catch(() => {
            return null;
        })

        return valid;
    }



    // const logout = () => {
    //     localStorage.removeItem('token');
    //     authenticated.value = false;
    //     user.value = {};
    // }

    return {
        auth,
        signInUser, signUpUser, validate
    }

});