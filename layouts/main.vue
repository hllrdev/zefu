<template>
    <ClientOnly>
        <LayoutNavbar />
        <slot name="content"/>
        <LayoutFooter />
    </ClientOnly>
</template>