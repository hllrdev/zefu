<template>
    <div :class="props.alert" class="alert absolute top-16 left-0 right-0 mx-auto w-11/12 md:w-2/5">
        <Icon :name="props.icon" size="1.5rem" />
        <span>{{ props.message }}</span>
    </div>
</template>

<script setup>

    const props = defineProps({
        message: { type: String, required: true},
        alert: { type: String, required: true },
        icon: { type: String, required: true }
    })

</script>