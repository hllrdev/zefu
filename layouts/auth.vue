<template>
    <div class="p-4 md:h-screen">
        <NameLogo class="text-base-200 opacity-30" />
        <div class="flex justify-center">
            <div class="md:w-9/12 lg:w-4/12">
                <div class="flex flex-col">
                    <div class="h-full md:flex items-center">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>