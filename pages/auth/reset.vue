<script setup>
    const appStore = useAppStore();
    const route = useRoute();
    const router = useRouter();

    const submitForm = async () => {
        v$.value.$validate();
        if(!v$.value.$error){
            const password = formData.password;
            await useFetch('http://localhost:8080/api/auth/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': 'Bearer ' + route.query.token
                },
                body: {
                    password
                },
                onResponse({response}) {
                    if(response.status == 200){
                        appStore.setAlert(true, 'success', 'Senha resetada com sucesso!')
                        router.push("/auth/signin")
                    }
                    else{
                        appStore.setAlert(true, 'error', 'Houve um problema. A senha não foi resetada.')
                    }
                }
            })
        }
    }

    const formData = reactive({
        password: '',
        confirmPassword: ''
    });

    import { required, sameAs, minLength, helpers} from "@vuelidate/validators";

    const rules = computed(() => {
        return {
            password: { 
                required: helpers.withMessage('Preencha o e-mail', required), 
                minLength: helpers.withMessage('É preciso no minímo 6 caracteres', minLength(6))
            },
            confirmPassword: { 
                required: helpers.withMessage('Preencha o e-mail', required), 
                sameAs: helpers.withMessage('As senhas são diferentes', sameAs(formData.password))
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
                    <h1 class="text-center pb-6">Resetar senha</h1>
                    <div class="mb-1">
                        <Input name="password" type="password" label="Senha" placeholder="Digite a nova senha" @update:model-value="formData.password = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                    </div>
                    <div class="pb-6">
                        <Input name="confirmPassword" type="password" label="Confirmar senha" placeholder="Digite a senha novamente" @update:model-value="formData.confirmPassword = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.confirmPassword.$error">{{ v$.confirmPassword.$errors[0].$message }}</span>
                    </div>
                    <button type="button" class="btn btn-secondary w-full text-neutral-50" @click="submitForm">Resetar</button>
                </form>
            </div>
        </template>
    </NuxtLayout>
</template>