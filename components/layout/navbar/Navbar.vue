<script setup>
    import { useAuthStore } from '~/store/authStore';
    const authStore = useAuthStore();

    const nameFormatted = computed(() => {
        const user = {...authStore.auth.user};
        if(user.name)
            return user.name.split(" ")[0];
        return null;
    })

</script>

<template>
    <div class="fixed w-full z-50">
        <nav class="h-14 bg-neutral-focus px-6 md:px-14 grid grid-cols-3 md:flex justify-between items-center">
            <label for="navbar-drawer" class="md:hidden">
                <Icon class="w-7 h-auto" name="material-symbols:menu" color="white" />
            </label>
            <LayoutNavbarMenuItems class="md:flex hidden gap-4 md:w-1/5" />
            <LogoName class="text-white text-center md:w-1/5"/>
            <div class="hidden md:flex md:w-1/5 justify-end">
                <div v-show="authStore.auth.authenticated">
                    <p class="text-white">Olá, <span class="text-sm text-primary font-semibold">{{ nameFormatted }}</span></p>
                </div>
                <div v-show="!authStore.auth.authenticated">
                    <NuxtLink to="/auth/signin">
                        <button class="btn btn-secondary btn-sm text-xs px-10 text-neutral-50">Entrar</button>
                    </NuxtLink>
                </div>
            </div>
        </nav>
        <div class="drawer">
            <input id="navbar-drawer" type="checkbox" class="drawer-toggle"/>
            <div class="drawer-side z-50">
                <label for="navbar-drawer" class="drawer-overlay"></label>
                <LayoutNavbarMenuItems :authenticated="authStore.auth.authenticated" :name="nameFormatted" class="menu p-4 w-80 h-full bg-base-200" />
            </div>
        </div>
    </div>
</template>