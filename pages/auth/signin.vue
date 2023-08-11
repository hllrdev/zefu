<script setup>
    import { useAuthStore } from "~/store/authStore";
    import { useVuelidate  } from "@vuelidate/core";
    import { required, email, helpers} from "@vuelidate/validators";

    const authStore = useAuthStore();

    const formData = reactive({
        email: '',
        password: ''
    });

    const submitForm = async () => {
        v$.value.$validate();
        if(!v$.value.$error){
           await authStore.signInUser({email: formData.email, password: formData.password});
        }
    }

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

    const v$ = useVuelidate(rules, formData);
</script>

<template>
    <NuxtLayout name="auth">
        <template #content>
            <div>
                <form action="" class="py-6">
                    <h1 class="text-center pb-6 text-white">Login</h1>
                    <div class="mb-1">
                        <Input name="email" type="email" label="E-mail" placeholder="Digite aqui seu e-mail" @update:model-value="formData.email = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                    </div>
                    <div>
                        <Input name="password" type="password" label="Senha" placeholder="Digite aqui sua senha" @update:model-value="formData.password = $event"/>
                        <span class="text-error font-medium text-xs" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                        <div class="text-end pb-4 pt-1">   
                            <NuxtLink class="text-xs" to="/auth/recovery">
                                Esqueceu sua senha?
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex justify-center flex-col">
                        <button type="button" class="btn btn-secondary text-neutral-50 w-full mb-4" @click="submitForm">Entrar</button>
                        <!-- <NuxtLink class="btn btn-neutral">
                            <Icon class="w-5 h-auto" name="flat-color-icons:google"></Icon> 
                            Entrar com Google
                        </NuxtLink> -->
                    </div>
                </form>
                <p class="text-sm text-center"> 
                    Ainda não possui uma conta? 
                    <NuxtLink to="/auth/signup">
                        <span class="font-semibold ml-2">Cadastrar</span>
                    </NuxtLink>
                </p>
            </div>
        </template>
    </NuxtLayout>
</template>