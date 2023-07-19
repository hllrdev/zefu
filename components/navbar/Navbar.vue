<template>
    <div class="fixed w-full z-50">
        <nav class="h-14 bg-neutral-focus px-6 md:px-14 grid grid-cols-3 md:flex justify-between items-center">
            <label for="navbar-drawer" class="md:hidden">
                <Icon name="material-symbols:menu" color="white" size="2rem" />
            </label>
            <NavbarMenuItems @close-drawer="chamei()" class="md:flex hidden gap-4" />
            <RouterLink to="/"><NameLogo/></RouterLink>
            <Button content="Entrar" class="hidden md:flex" />
        </nav>
        <div class="drawer">
            <input id="navbar-drawer" type="checkbox" class="drawer-toggle" :checked="checkzn" />
            <div class="drawer-side z-50">
                <label for="navbar-drawer" class="drawer-overlay"></label>
                <NavbarMenuItems class="menu p-4 w-80 h-full bg-neutral-900" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const checkzn = ref(false);

    function chamei(){
        alert('aqui')
    }

</script>