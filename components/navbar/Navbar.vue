<template>
    <div>
        <nav class="h-14 bg-neutral-focus px-6 grid grid-cols-3 md:flex justify-between items-center">
            <label for="navbar-drawer" class="md:hidden">
                <Icon name="material-symbols:menu" color="white" size="2rem" />
            </label>
            <NavbarMenuItems class="md:flex hidden gap-4" />
            <NameLogo />
            <Button content="Entrar" class="hidden md:flex" />
        </nav>
        <div class="drawer">
            <input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-side z-50">
                <label for="navbar-drawer" class="drawer-overlay"></label>
                <NavbarMenuItems class="menu p-4 w-80 h-full bg-neutral-900" />
            </div>
        </div>
    </div>
</template>