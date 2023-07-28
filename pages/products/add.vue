<template>
    <div>
        <NuxtLayout name="initial">
            <div class="pt-24 px-4 pb-10">
                <h1 class="text-center pb-6">Cadastrar produto</h1>
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
                                <label class="border p-3 cursor-pointer hover:bg-neutral-100" for="photo">Selecionar arquivo</label>
                                <span class="text-error font-medium text-xs mx-2" v-if="v$.photo.$error">{{ v$.photo.$errors[0].$message }}</span>
                                <span class="block mt-6 mx-2 md:mt-0 md:inline" >{{ photoFilename }}</span>
                                <input type="file" id="photo" name="photo" class="invisible" @change="changeFileInput" />
                            </div>
                            <div class="flex justify-center">
                                <button type="button" class="btn btn-accent btn-wide" @click="submitForm">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>


<script setup lang="ts">

    import { useAppStore } from "~/store/appStore";

    definePageMeta({
        middleware: 'permission'
    })

    const appStore = useAppStore();

    const router = useRouter();

    const submitForm = async () => {
        v$.value.$validate();
         if(!v$.value.$error){
            

            await $fetch('http://localhost:8080/api/products').then((res) => {console.log(res)}).catch((error) => {console.log(error)});


            //  .then((response) => {
            //      appStore.alert.type = "alert-success";
            //      appStore.alert.message = "Produto cadastrado com sucesso!";
            //      appStore.alert.icon = "mdi:success-bold";
            //      appStore.alert.show = true;
                 
            //      setTimeout(() => {
            //              router.push({
            //              path: "/products/list"
            //          })
            //      }, 3000)
            //  })
            //  .catch((error) => {
            //     appStore.alert.type = "alert-error";
            //     appStore.alert.message = "Houve um erro, tente novamente mais tarde.";
            //     appStore.alert.icon = "icon-park-solid:error";
            //     appStore.alert.show = true;
            // })
        }
    }

    const photoFilename = ref("");

    const changeFileInput = (event: any) => {
        photoFilename.value = event.target.files[0].name;
        formData.photo = event.target.files[0];
    }

    const formData = reactive({
        title: 'titulo',
        link: 'aqui',
        photo: ''
    })

    import { required, helpers} from "@vuelidate/validators";

    const rules = computed(() => {
        return {
            title: { 
                required: helpers.withMessage('Preencha o título', required),
            },
            link: { 
                required: helpers.withMessage('Preencha o link', required)
            },
            photo: { 
                required: helpers.withMessage('Selecione a foto', required)
            }
        }
    })

    import { useVuelidate  } from "@vuelidate/core";

    const v$ = useVuelidate(rules, formData);


</script>