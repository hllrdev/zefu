<template>
    <div>
        <NuxtLayout name="initial">
            <div class="pt-24 px-4 pb-10">
                <h1 class="text-center pb-6">Gerenciamento de produtos</h1>
                <div class="flex justify-center">
                    <div class="md:w-4/5 lg:w-3/5">
                        <div class="flex justify-end md:pr-6 pb-6">
                            <NuxtLink to="/products/add"><button class="btn btn-primary">Cadastrar<Icon name="gridicons:add" size="1.5rem" color="white"></Icon></button></NuxtLink>
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
                                    <tr>
                                        <td>
                                            <div class="flex items-center">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src="https://m.media-amazon.com/images/I/6169MGHxQuL._AC_SL1000_.jpg" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <span>Panelas com cabo intercambiável, Tramontina</span>
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div class="flex flex-col md:flex-row justify-center items-center">
                                                <Icon class="cursor-pointer" name="mdi:show" size="1.5rem"/>
                                                <Icon class="cursor-pointer" name="material-symbols:edit" size="1.5rem"/>
                                                <Icon class="cursor-pointer" name="material-symbols:delete" size="1.5rem" onclick="delete_dialog.showModal()"/> 
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
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">

    const aqui = () => {
        alert('opa')
    }

</script>

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