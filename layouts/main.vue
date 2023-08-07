<template>
    <ClientOnly>
        <Navbar />
        <slot name="content"/>
        <Footer />
    </ClientOnly>
</template>