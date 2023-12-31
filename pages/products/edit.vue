<script setup>
    const changeFileInput = (event) => {
        const selectedFile = event.target.files[0];
        formData.photo = selectedFile;
        photoFilename.value = selectedFile.name;
        
        const reader = new FileReader();
        reader.addEventListener("load", function() {
            imagePreview.value = reader.result;
        });

        reader.readAsDataURL(event.target.files[0]);
    }

    const imagePreview = ref('');
    const route = useRoute();
    const router = useRouter();
    const values = route.query;
    const initialImage = values.photo;
    const photoFilename = ref('');

    onMounted(() => {
        try {
            photoFilename.value = ref(values.photo.split("/").slice(-1)[0]);
        } catch (error) {
            router.push('/errors/404')
        }
        
    })
    
    const formData = reactive({
        id: values.id,
        title: values.title,
        link: values.link,
        photo: values.photo
    })

    import { required, maxLength, helpers} from "@vuelidate/validators";

    const rules = computed(() => {
        return {
            title: { 
                required: helpers.withMessage('Preencha o título', required),
                maxLength: helpers.withMessage('Digite no máximo 50 caracteres', maxLength(50))
            },
            link: { 
                required: helpers.withMessage('Preencha o link', required),
                maxLength: helpers.withMessage('Digite no máximo 50 caracteres', maxLength(50))
            }
        }
    })

    import { useVuelidate  } from "@vuelidate/core";
    const v$ = useVuelidate(rules, formData);

    const submitForm = async () => {
        v$.value.$validate();
        if(!v$.value.$error){
            const form = new FormData();
            if(formData.photo == initialImage)
                form.append('photo', null);
            else
                form.append('photo', formData.photo);

            form.append('title', formData.title);
            form.append('link', formData.link);

            await $fetch(`${API_URL}/products/${formData.id}`,
            {
                method: 'PUT',
                body: form,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
            ).then(() => {
                appStore.setAlert(true, 'success', "Produto editado com sucesso.");
            }).catch(() => {
                appStore.setAlert(true, 'error', "Houve um erro ao editar o produto.");
            })
        }
    }

</script>

<template>
    <NuxtLayout name="main">
        <template #content>
            <div class="pt-24 px-4 pb-10">
                <h1 class="text-center pb-6">Editar produto</h1>
                <div class="flex justify-center">
                    <div class="md:w-4/5 lg:w-3/5">
                        <form action="">
                            <div class="mb-2">
                                <Input :value="formData.title" class="mb-2" size="md:max-w-2xl" name="title" label="Título" placeholder="Digite o título do produto" v-model="formData.title" @update:model-value="formData.title = $event" />
                                <span class="text-error font-medium text-xs" v-if="v$.title.$error">{{ v$.title.$errors[0].$message }}</span>
                            </div>
                            <div class="mb-2">
                                <Input :value="formData.link" class="mb-2" size="md:max-w-2xl" name="link" label="Link" placeholder="Digite o link de afiliado" v-model="formData.link" @update:model-value="formData.link = $event" />
                                <span class="text-error font-medium text-xs" v-if="v$.link.$error">{{ v$.link.$errors[0].$message }}</span>
                            </div>
                            <label class="label">
                                <span class="label-text text-white font-semibold">Foto do produto</span>
                            </label>
                            <div class="mt-3 md:mb-12">
                                <label class="border py-3 px-5 cursor-pointer hover:bg-neutral-100" for="photo">Selecionar arquivo</label>
                                <span class="block mt-6 mx-2 md:mt-0 md:inline" >{{ photoFilename }}</span>
                                <input type="file" id="photo" name="photo" class="invisible" @change="changeFileInput" />
                            </div>
                            <div class="flex justify-center pb-6 pt-2">
                                <!-- <img class="w-72" :src="imagePreview ? imagePreview  : `${API_URL}/static${initialImage}`" /> -->
                                <img class="w-72" :src="imagePreview ? imagePreview  : initialImage" />
                            </div>
                            <div class="flex justify-center">
                                <button type="button" class="btn btn-accent text-white btn-wide" @click="submitForm">Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>