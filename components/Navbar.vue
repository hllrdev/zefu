<template>
    <div>
        <nav class="h-14 bg-black px-6 flex justify-between items-center">
            <label for="my-drawer" class="md:hidden">
                <Icon name="material-symbols:menu" color="white" size="2rem" />
            </label>
            <ul class="md:flex hidden uppercase md:gap-4 md:text-white md:text-xs font-semibold">
                <MenuItems />
            </ul>
            <a class="text-white text-3xl font-title" href="">ZEFFIH</a>
            <button class="md:flex btn btn-sm px-6 text-xs hidden">Login</button>
        </nav>
        <div class="drawer">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <MenuItems />
                </ul>
            </div>
        </div>
    </div>
</template>