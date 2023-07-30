<script setup>
   const title = ref("Titulozinho do product");
   const link = ref("Linkzin do product");
</script>

<template>
    <div>
        <NuxtLayout name="main">
            <template #content>
                <div class="pt-24 px-4 pb-10">
                    <h1 class="text-center pb-6">Visualizar produto</h1>
                    <div class="flex justify-center">
                        <div class="md:w-4/5 lg:w-3/5">
                            <form action="">
                                <Input disabled :value="title" class="mb-2" name="title" label="Título" placeholder="Digite o título do produto" />
                                <Input disabled :value="link" class="mb-2" name="link" label="Link" placeholder="Digite o link de afiliado" />
                                <label class="label">
                                    <span class="label-text text-neutral-600">Foto do produto</span>
                                </label>
                                <div class="flex justify-center pb-6 pt-2">
                                    <img class="w-72" src="https://m.media-amazon.com/images/I/6169MGHxQuL._AC_SL1000_.jpg" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>