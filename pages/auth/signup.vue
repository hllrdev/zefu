<template>
    <div>
        <NuxtLayout name="auth">
            <div>
                <form action="" class="py-6">
                    <h1 class="text-center pb-6">Cadastro</h1>
                    <div class="pb-2">
                        <Input name="name" type="text" label="Nome completo" placeholder="Digite aqui seu nome" @update:model-value="formData.name = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
                    </div>
                    <div class="pb-2">
                        <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" @update:model-value="formData.email = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                    </div>
                    <div class="pb-2">
                        <Input name="password" type="password" label="Senha" placeholder="Digite aqui sua senha" @update:model-value="formData.password = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                    </div>
                    <div class="pb-6">
                        <Input name="confirmPassword" type="password" label="Confirmar senha" placeholder="Digite a senha novamente" @update:model-value="formData.confirmPassword = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.confirmPassword.$error">{{ v$.confirmPassword.$errors[0].$message }}</span>
                    </div>      
                    <button type="button" class="btn w-full" @click="submitForm">Cadastrar</button>
                </form>
                <p class="text-sm text-center">Já possui uma conta?<NuxtLink to="/auth/login"><span class="font-semibold ml-2">Entrar</span></NuxtLink></p>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">

    import { useAppStore } from "~/store/appStore";

    const appStore = useAppStore();

    const router = useRouter();

    const submitForm = async () => {
        v$.value.$validate();
        if(!v$.value.$error){
            await useAsyncData(() => $fetch('http://localhost:8080/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({
                    "name": formData.name,
                    "email": formData.email,
                    "password": formData.password
                })
            })
            .then(() => {
                appStore.alert.type = "alert-success";
                appStore.alert.message = "Cadastro realizado com sucesso!";
                appStore.alert.icon = "mdi:success-bold";
                appStore.alert.show = true;
                setTimeout(() => {
                        router.push({
                        path: "/auth/login"
                    })
                }, 3000)
            })
            .catch((error) => {
                if(error.status == 400 || 409){
                    appStore.alert.type = "alert-warning";
                    appStore.alert.icon = "material-symbols:warning";
                    appStore.alert.show = true;
                    if(error.status == 409)
                        appStore.alert.message = "E-mail já cadastrado, utilize outro.";
                    else
                        appStore.alert.message = "E-mail já cadastrado via login Google.";
                }
                else{
                    appStore.alert.type = "alert-error";
                    appStore.alert.message = "Houve um erro, tente novamente mais tarde.";
                    appStore.alert.icon = "icon-park-solid:error";
                    appStore.alert.show = true;
                }
            })
            );
        }
    }

    const formData = reactive({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    import { required, email, sameAs, minLength, helpers} from "@vuelidate/validators";

    const rules = computed(() => {
        return {
            name: { 
                required: helpers.withMessage('Preencha o nome completo', required) 
            },
            email: { 
                required: helpers.withMessage('Preencha o e-mail', required), 
                email: helpers.withMessage('Formato de e-mail inválido', email)
            },
            password: { 
                required: helpers.withMessage('Preencha a senha', required), 
                minLength: helpers.withMessage('É preciso no minímo 6 caracteres', minLength(6))
            },
            confirmPassword: { 
                required: helpers.withMessage('Preencha o confirmar senha', required), 
                sameAs: helpers.withMessage('As senhas são diferentes', sameAs(formData.password))}

        }
    })

    import { useVuelidate  } from "@vuelidate/core";

    const v$ = useVuelidate(rules, formData);

</script>