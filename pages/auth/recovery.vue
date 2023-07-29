<template>
    <div>
        <NuxtLayout name="auth">
            <div>
                <form action="" class="py-6">
                    <h1 class="text-center pb-6">Recuperar senha</h1>
                    <div class="pb-6">
                        <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" @update:model-value="formData.email = $event" />
                        <span class="text-error font-medium text-xs" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                    </div>
                    <button type="button" class="btn w-full" @click="submitForm">Recuperar</button>
                </form>
                <p class="text-sm text-center">Lembrou a senha? <NuxtLink to="/auth/signin"><span class="font-semibold ml-2">Entrar</span></NuxtLink></p>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">

    const submitForm= () => {
        v$.value.$validate();
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
    import { useAuthStore } from "~/store/authStore";

    const v$ = useVuelidate(rules, formData);

</script>