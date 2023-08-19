<script setup>

    const runtimeConfig = useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;

   const route = useRoute();
   const values = route.query;
   const title = values.title;
   const link = values.link;
   const photo = values.photo;

   const router = useRouter();

   onMounted(() => {
    if(!title || !link || !photo)
        router.push('/errors/404')
   })
</script>

<template>
    <NuxtLayout name="main">
        <template #content>
            <div class="pt-24 px-4 pb-10">
                <h1 class="text-center pb-6">Visualizar produto</h1>
                <div class="flex justify-center">
                    <div class="md:w-4/5 lg:w-3/5">
                        <form action="">
                            <Input disabled :value="title" class="mb-2" size="md:max-w-2xl" name="title" label="Título" placeholder="Digite o título do produto" />
                            <Input disabled :value="link" class="mb-2" size="md:max-w-2xl" name="link" label="Link" placeholder="Digite o link de afiliado" />
                            <label class="label">
                                <span class="label-text text-neutral-600">Foto do produto</span>
                            </label>
                            <div class="flex justify-center pb-6 pt-2">
                                <img class="w-72" :src="`${API_URL}/static${photo}`" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>