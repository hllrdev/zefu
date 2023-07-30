<script setup>
    const photoFilename = ref("arquivo_atual.jpg");

    const changeFileInput = (event) => {
        photoFilename.value = event.target.files[0].name;
    }

    const formData = reactive({
        title: 'Título here',
        link: 'link aqui',
        photo: ''
    })
</script>

<template>
    <div>
        <NuxtLayout name="main">
            <template #content>
                <div class="pt-24 px-4 pb-10">
                    <h1 class="text-center pb-6">Editar produto</h1>
                    <div class="flex justify-center">
                        <div class="md:w-4/5 lg:w-3/5">
                            <form action="">
                                <Input :value="formData.title" class="mb-2" name="title" label="Título" placeholder="Digite o título do produto" v-model="formData.title" @update:model-value="formData.title = $event" />
                                <Input :value="formData.link" class="mb-2" name="link" label="Link" placeholder="Digite o link de afiliado" v-model="formData.link" @update:model-value="formData.link = $event" />
                                <label class="label">
                                    <span class="label-text text-neutral-600">Foto do produto</span>
                                </label>
                                <div class="mt-3 md:mb-12">
                                    <label class="border p-3 cursor-pointer hover:bg-neutral-100" for="photo">Selecionar arquivo</label>
                                    <span class="block mt-6 mx-2 md:mt-0 md:inline" >{{ photoFilename }}</span>
                                    <input type="file" id="photo" name="photo" class="invisible" @change="changeFileInput" />
                                </div>
                                <div class="flex justify-center">
                                    <button class="btn btn-accent btn-wide">Editar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>