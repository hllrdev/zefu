<script setup>
    import { useAuthStore } from "~/store/authStore";

    const authStore = useAuthStore();

    const formData = reactive({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const submitForm = async () => {
        v$.value.$validate();
        if(!v$.value.$error){
            await authStore.signUpUser({name: formData.name, email: formData.email, password: formData.password});
        }
    }

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
                required: helpers.withMessage('Confirme a senha', required), 
                sameAs: helpers.withMessage('As senhas são diferentes', sameAs(formData.password))}
        }
    })

    import { useVuelidate  } from "@vuelidate/core";
    const v$ = useVuelidate(rules, formData);
</script>

<template>
    <NuxtLayout name="auth">
        <template #content>
            <div>
                <form action="" class="py-6">
                    <h1 class="text-center pb-6 text-white">Cadastro</h1>
                    <div class="mb-1">
                        <Input name="name" type="text" label="Nome completo" placeholder="Digite aqui seu nome" @update:model-value="formData.name = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
                    </div>
                    <div class="mb-1">
                        <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" @update:model-value="formData.email = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                    </div>
                    <div class="mb-1">
                        <Input name="password" type="password" label="Senha" placeholder="Digite aqui sua senha" @update:model-value="formData.password = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                    </div>
                    <div class="pb-6">
                        <Input name="confirmPassword" type="password" label="Confirmar senha" placeholder="Digite a senha novamente" @update:model-value="formData.confirmPassword = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.confirmPassword.$error">{{ v$.confirmPassword.$errors[0].$message }}</span>
                    </div>      
                    <button type="button" class="btn btn-secondary text-neutral-50 w-full" @click="submitForm">Cadastrar</button>
                </form>
                <p class="text-sm text-center">
                    Já possui uma conta?
                    <NuxtLink to="/auth/signin" class="font-semibold ml-2">Entrar</NuxtLink>
                </p>
            </div>
        </template>
    </NuxtLayout>
</template>