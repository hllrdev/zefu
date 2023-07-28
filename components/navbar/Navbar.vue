<template>
    <div class="fixed w-full z-50">
        <nav class="h-14 bg-neutral-focus px-6 md:px-14 grid grid-cols-3 md:flex justify-between items-center">
            <label for="navbar-drawer" class="md:hidden">
                <Icon name="material-symbols:menu" color="white" size="2rem" />
            </label>
            <NavbarMenuItems class="md:flex hidden gap-4" />
            <NameLogo class="text-white text-center"/>
            <div class="hidden md:flex ">
                <div v-if="authStore.authenticated">
                    <p class="text-white">Olá, <span class="text-sm text-primary font-semibold">{{ name }}</span></p>
                </div>
                <div v-else>
                    <NuxtLink to="/auth/signin">
                        <button class="btn btn-sm btn-secondary text-xs px-10">Entrar</button>
                    </NuxtLink>
                </div>
               
            </div>
        </nav>
        <div class="drawer">
            <input id="navbar-drawer" type="checkbox" class="drawer-toggle"/>
            <div class="drawer-side z-50">
                <label for="navbar-drawer" class="drawer-overlay"></label>
                <NavbarMenuItems :authenticated="authStore.authenticated" :name="name" class="menu p-4 w-80 h-full bg-base-200" />
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

    import { useAuthStore } from "~/store/authStore";
    const authStore = useAuthStore();

    const name = computed(() => {
        if(authStore.authenticated)
            return authStore.user.name.split(" ")[0];
        return null;
    })

</script>