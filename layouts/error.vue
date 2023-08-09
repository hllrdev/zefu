<template>
    <div class="min-h-screen flex justify-center items-center">
        <div>
            <slot name="title"/>
            <div class="flex justify-center">
                <img class="h-80" src="~/assets/images/error.png" alt="">
            </div>
        </div>
    </div>
</template>