<template>
    <div class="form-control pb-2">
        <label class="label">
            <span class="label-text text-neutral-600">{{ props.label }}</span>
        </label>
        <input :name="props.name" :type="props.type" :placeholder="props.placeholder" 
            class="input w-full md:max-w-xs placeholder:text-sm border border-neutral-300 text-neutral-500 focus:outline-none focus:border-secondary" />
    </div>
</template>

<script setup>

    const props = defineProps({
        name: {
            type:String,
            required:true
        },
        type: {
            type: String,
            default: "text"
        },
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true
        }
    })

</script>