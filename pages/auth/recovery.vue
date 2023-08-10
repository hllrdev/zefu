<script setup>

    const appStore = useAppStore();
    const wait = ref(false);
    const router = useRouter();

    const submitForm= async () => {
        v$.value.$validate();
        if(!v$.value.$error){
            wait.value = true;
            const email = formData.email;
            await useFetch('http://localhost:8080/api/auth/recovery', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: {
                   email 
                },
                onResponse({response}){
                    if(response.status == 200){
                        appStore.setAlert(true, 'success', 'E-mail enviado. Vá a sua caixa de entrada, verifique o spam.')
                        router.push("/auth/signin")
                    }
                    else if (response.status == 404 ){
                        appStore.setAlert(true, 'error', 'Usuário não encontrado.')
                    }
                    else{
                        appStore.setAlert(true, 'error', 'Houve um problema. O e-mail não foi enviado.')
                    }
                    wait.value = false;
                }
            })
        }
    }

    const formData = reactive({
        email: '',
    });

    import { required, email, helpers} from "@vuelidate/validators";

    const rules = computed(() => {
        return {
            email: { 
                required: helpers.withMessage('Preencha o e-mail', required), 
                email: helpers.withMessage('Formato de e-mail inválido', email)
            }
        }
    })

    import { useVuelidate  } from "@vuelidate/core";
    import { useAppStore } from "~/store/appStore";
    const v$ = useVuelidate(rules, formData);
</script>

<template>
    <NuxtLayout name="auth">
        <template #content>
            <div>
                <form action="" class="py-6">
                    <h1 class="text-center pb-6">Recuperar senha</h1>
                    <div class="pb-6">
                        <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" @update:model-value="formData.email = $event" />
                        <span class="text-error font-medium text-xs" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                    </div>
                    <button type="button" class="btn btn-secondary w-full" @click="submitForm">Recuperar</button>
                </form>
                <p class="text-sm text-center pb-4">Lembrou a senha? <NuxtLink to="/auth/signin"><span class="font-semibold ml-2">Entrar</span></NuxtLink></p>
                <div v-show="wait" class="flex flex-col items-center">
                    <span class="loading loading-spinner loading-md mb-2"></span>
                    <p class="text-xs">Aguarde um instante</p>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>