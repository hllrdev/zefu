<script setup>

    const changeFileInput = (event) => {
        photoFilename.value = event.target.files[0].name;

        const reader = new FileReader();
        reader.addEventListener("load", function() {
            imagePreview.value = reader.result;
        });

        reader.readAsDataURL(event.target.files[0]);

    }

    const route = useRoute();

    const values = route.query;

    const id = values.id;

    const title = ref(values.title);
    const link = ref(values.link);
    const initialImage = ref(values.photo);

    const imagePreview = ref('');

    const photoFilename = ref(values.photo.split("/").slice(-1)[0]);
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
                                <Input :value="title" class="mb-2" size="md:max-w-2xl" name="title" label="Título" placeholder="Digite o título do produto" v-model="title" @update:model-value="title = $event" />
                                <Input :value="link" class="mb-2" size="md:max-w-2xl" name="link" label="Link" placeholder="Digite o link de afiliado" v-model="link" @update:model-value="link = $event" />
                                <label class="label">
                                    <span class="label-text text-neutral-600">Foto do produto</span>
                                </label>
                                <div class="mt-3 md:mb-12">
                                    <label class="border py-3 px-5 cursor-pointer hover:bg-neutral-100" for="photo">Selecionar arquivo</label>
                                    <span class="block mt-6 mx-2 md:mt-0 md:inline" >{{ photoFilename }}</span>
                                    <input type="file" id="photo" name="photo" class="invisible" @change="changeFileInput" />
                                </div>
                                <div class="flex justify-center pb-6 pt-2">
                                    <img class="w-72" :src="imagePreview ? imagePreview  :  'http://localhost:8080' + initialImage" />
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