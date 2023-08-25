<script setup>
    import { useAppStore } from '~/store/appStore';

    const runtimeConfig = useRuntimeConfig();
    const API_URL = runtimeConfig.public.API_URL;

    const appStore = useAppStore();
    const products = ref([]);
    const deleteProductId = ref(''); 

    

    onMounted(async () => {    
        console.log('aqui')
        await $fetch(`${API_URL}/products`,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((response) => {
            products.value = response;
        });
    })

    const showDialogDeleteProduct = (id) => {
        deleteProductId.value = id;
        const deleteDialog = document.getElementById('delete_dialog');
        deleteDialog.showModal();
    }
    const submitDeleteProduct = async () => {

        await $fetch(`${API_URL}/products/${deleteProductId.value}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
        ).then(() => {
            products.value = products.value.filter(product => product.id != deleteProductId.value);
            deleteProductId.value = '';
            appStore.setAlert(true, 'success', "Produto excluído com sucesso.");

        }).catch(() => {
            appStore.setAlert(true, 'error', "Houve um erro na tentativa de exclusão.")
        })
    }
</script>

<template>
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
                                <tbody>
                                    <tr v-for="product in products" :key="product.id">
                                        <NuxtLink :to="{
                                            path: '/products/view',
                                            query: {
                                                title: product.title,
                                                link: product.link,
                                                photo: product.photo
                                            }}">
                                            <td>
                                                <div class="flex items-center">
                                                    <div class="avatar">
                                                        <div class="mask mask-squircle w-12 h-12">
                                                            <img :src="`${API_URL}/static${product.photo}`" alt="Photo product" />
                                                        </div>
                                                    </div>
                                                    <span>{{ product.title }}</span>
                                                </div>
                                            </td>
                                        </NuxtLink>
                                        <td>
                                            <div class="flex flex-col md:flex-row justify-center items-center">
                                                <NuxtLink :to="{
                                                    path: '/products/edit',
                                                    query: {
                                                        id: product.id,
                                                        title: product.title,
                                                        link: product.link,
                                                        photo: product.photo
                                                    }
                                                }">
                                                    <Icon class="cursor-pointer w-6 h-auto hover:text-primary" name="material-symbols:edit" />
                                                </NuxtLink> 
                                                <div @click="showDialogDeleteProduct(product.id)">
                                                    <Icon class="cursor-pointer w-6 h-auto hover:text-primary" name="material-symbols:delete"/> 
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <dialog id="delete_dialog" class="modal modal-bottom sm:modal-middle">
                            <form method="dialog" class="modal-box bg-neutral-100">
                                <h3 class="font-bold text-lg">Excluir produto</h3>
                                <p class="py-4">Deseja excluir esse produto?</p>
                                <div class="modal-action">
                                <!-- if there is a button in form, it will close the modal -->
                                <button class="btn hover:bg-neutral-900" @click="deleteProductId = ''">Cancelar</button>
                                <button class="btn hover:bg-red-600 hover:border-red-600" @click="submitDeleteProduct">Confirmar</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </template>
    </NuxtLayout>
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