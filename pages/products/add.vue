<script setup>
    import { required, maxLength, helpers} from "@vuelidate/validators";
    import { useVuelidate  } from "@vuelidate/core";

    const formData = reactive({
        title: '',
        link: '',
        photo: ''
    })

    const rules = computed(() => {
        return {
            title: { 
                required: helpers.withMessage('Preencha o título', required),
                maxLength: helpers.withMessage('Digite no máximo 50 caracteres', maxLength(50))
            },
            link: { 
                required: helpers.withMessage('Preencha o link', required),
                maxLength: helpers.withMessage('Digite no máximo 50 caracteres', maxLength(50))
            },
            photo: { required: helpers.withMessage('Selecione a foto', required)}
        }
    })

    const v$ = useVuelidate(rules, formData);
    const photoFilename = ref("");

    const runtimeConfig = useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;

    const submitForm = async () => {
        v$.value.$validate();
        if(!v$.value.$error){
            const form = new FormData();
            form.append('title', formData.title);
            form.append('link', formData.link);
            form.append('photo', formData.photo);

            await $fetch(`${API_URL}/products`,
            {
                method: 'POST',
                body: form,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
            ).then(() => {
                appStore.setAlert(true, 'success', "Produto adicionado com sucesso.");
            }).catch(() => {
                appStore.setAlert(true, 'error', "Houve um erro ao adicionar o produto.");
            })
        }
    }

    const changeFileInput = (event) => {
        photoFilename.value = event.target.files[0].name;
        formData.photo = event.target.files[0];
    }

    
</script>

<template>
    <NuxtLayout name="main">
        <template #content>
            <div class="pt-24 px-4 pb-10">
                <h1 class="text-center pb-6">Adicionar produto</h1>
                <div class="flex justify-center">
                    <div class="md:w-4/5 lg:w-3/5">
                        <form action="">
                            <div class="mb-2">
                                <Input  name="title" label="Título" placeholder="Digite o título do produto" @update:model-value="formData.title = $event" />
                                <span class="text-error font-medium text-xs" v-if="v$.title.$error">{{ v$.title.$errors[0].$message }}</span>
                            </div>
                            <div class="mb-2">
                                <Input class="mb-2" name="link" label="Link" placeholder="Digite o link de afiliado" @update:model-value="formData.link = $event" />
                                <span class="text-error font-medium text-xs" v-if="v$.link.$error">{{ v$.link.$errors[0].$message }}</span>
                            </div>
                            <label class="label">
                                <span class="label-text text-neutral-600">Foto do produto</span>
                            </label>
                            <div class="mt-3 md:mb-12">
                                <label class="border py-3 px-5 cursor-pointer hover:bg-neutral-100" for="photo">Selecionar arquivo</label>
                                <span class="text-error font-medium text-xs mx-2" v-if="v$.photo.$error">{{ v$.photo.$errors[0].$message }}</span>
                                <span class="block mt-6 mx-2 md:mt-0 md:inline" >{{ photoFilename }}</span>
                                <input type="file" id="photo" name="photo" class="invisible" @change="changeFileInput" />
                            </div>
                            <div class="flex justify-center">
                                <button type="button" class="btn btn-accent btn-wide" @click="submitForm">Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>