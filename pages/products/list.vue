<script setup>

    import { useAuthStore  } from '~/store/authStore';

    const products = ref([]);

    const authStore = useAuthStore();

    const {data, pending} = await useFetch('http://localhost:8080/api/products',
    {
        headers: {
            'Authorization': `Bearer ${authStore.auth.token}`,
        }
    });

    products.value = data.value;


</script>

<template>
    <div>
        <NuxtLayout name="main">
            <template #content>
                <div class="pt-24 px-4 pb-10">
                    <h1 class="text-center pb-6">Gerenciamento de produtos</h1>
                    <div class="flex justify-center">
                        <div class="md:w-4/5 lg:w-3/5">
                            <div class="flex justify-end md:pr-6 pb-6">
                                <NuxtLink class="btn hover:text-primary" to="/products/add">
                                    <div class="flex items-center gap-2">
                                        Cadastrar
                                        <Icon class="w-6 h-auto" name="gridicons:add" color="white"></Icon>
                                    </div>   
                                </NuxtLink>
                            </div>
                            <div class="overflow-x-auto">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="!pending">
                                        <tr v-for="product in products" :key="product.id">
                                            <td>
                                                <div class="flex items-center">
                                                    <div class="avatar">
                                                        <div class="mask mask-squircle w-12 h-12">
                                                            <img :src="'http://localhost:8080/api/static' + product.photo" alt="Photo product" />
                                                        </div>
                                                    </div>
                                                    <span>{{ product.title }}</span>
                                                </div>
                                                
                                            </td>
                                            <td>
                                                <div class="flex flex-col md:flex-row justify-center items-center">
                                                    <NuxtLink :to="{
                                                        path: '/products/view',
                                                        query: {
                                                            title: product.title,
                                                            link: product.link,
                                                            photo: product.photo
                                                        }
                                                    }">
                                                        <Icon class="cursor-pointer w-6 h-auto" name="mdi:show" />
                                                    </NuxtLink> 

                                                    <NuxtLink :to="{
                                                        path: '/products/edit',
                                                        query: {
                                                            id: product.id,
                                                            title: product.title,
                                                            link: product.link,
                                                            photo: product.photo
                                                        }
                                                    }">
                                                        <Icon class="cursor-pointer w-6 h-auto" name="material-symbols:edit" />
                                                    </NuxtLink> 

                                                    <Icon class="cursor-pointer w-6 h-auto" name="material-symbols:delete" onclick="delete_dialog.showModal()"/> 

                                                    



                                                    
                                     
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <dialog id="delete_dialog" class="modal modal-bottom sm:modal-middle">
                                <form method="dialog" class="modal-box bg-primary">
                                    <h3 class="font-bold text-lg">Excluir produto</h3>
                                    <p class="py-4">Deseja excluir esse produto?</p>
                                    <div class="modal-action">
                                    <!-- if there is a button in form, it will close the modal -->
                                    <button class="btn hover:bg-neutral-800">Cancelar</button>
                                    <button class="btn hover:bg-red-600 hover:border-red-600">Confirmar</button>
                                    </div>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>

<style scoped>
    td {
        padding: 0.5rem;
    }

    td * {
        margin: 0.25rem;
    }
    
    tr th {
        color: #000;
    }
</style>