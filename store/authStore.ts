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
            auth.user = value.user;
            auth.authenticated = true;

            localStorage.setItem("token", token as string);
            // localStorage.setItem("user", JSON.stringify(auth.user));
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