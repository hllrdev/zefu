<template>
    <div>
        <NuxtLayout name="auth">
            <div>
                <form action="" class="py-6">
                    <h1 class="text-center pb-6">Login</h1>
                    {{ authStore.authenticated }}
                    <div class="pb-2">
                        <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" @update:model-value="formData.email = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                    </div>
                    <div class="pb-2">
                        <Input name="password" type="password" label="Senha" placeholder="Digite aqui sua senha" @update:model-value="formData.password = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                        <div class="text-end pb-4 pt-1">   
                            <NuxtLink to="/auth/recovery"><span class="text-sm">Esqueceu sua senha?</span></NuxtLink>
                        </div>
                    </div>
                    <div class="flex justify-center flex-col">
                        <button type="button" class="btn btn-accent w-full mb-4" @click="submitForm">Entrar</button>
                        <a href="http://localhost:8080" class="btn btn-outline border-black">
                            <Icon name="flat-color-icons:google" size="1.25rem"></Icon> 
                            <span class="text-black">Entrar com Google</span>
                        </a>
                    </div>
                </form>
                <p class="text-sm text-center"> Ainda não possui uma conta? <NuxtLink to="/auth/signup"><span class="font-semibold ml-2">Cadastrar</span></NuxtLink></p>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">

    import { useAuthStore } from "~/store/authStore";

    const authStore = useAuthStore();
    const router = useRouter();

    onMounted(() => {
        if(authStore.authenticated)
            router.push("/")
    })

    const formData = reactive({
        email: 'heuller555@gmail.com',
        password: '123456'
    });

    const submitForm = async () => {
        v$.value.$validate();
        if(!v$.value.$error){
           await authStore.signInUser({email: formData.email, password: formData.password});
           if(authStore.authenticated)
                router.push("/");
        }
    }

    import { required, email, helpers} from "@vuelidate/validators";

    const rules = computed(() => {
        return {
            email: { 
                required: helpers.withMessage('Preencha o e-mail', required), 
                email: helpers.withMessage('Formato de e-mail inválido', email)
            },
            password: { 
                required: helpers.withMessage('Preencha a senha', required)
            }
        }
    })

    import { useVuelidate  } from "@vuelidate/core";
    import Index from "~/pages/index.vue";
    const v$ = useVuelidate(rules, formData);

</script>