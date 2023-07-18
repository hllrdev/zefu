<template>
    <button class="btn btn-sm btn-primary text-xs px-10">{{props.content}}</button>
</template>

<script setup lang="ts">

    const props = defineProps({
        content: {
            type: String,
            required: true
        }
    })

</script>