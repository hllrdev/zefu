<template>
    <div class="p-4 md:min-h-screen">
        <LogoIcon />
        <div class="flex justify-center">
            <div class="md:w-9/12 lg:w-4/12">
                <div class="flex flex-col">
                    <div class="h-full md:flex items-center justify-center">
                        <slot name="content" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>