<template>
  <div class="bg-zinc-700 p-4 flex flex-col justify-center gap-4 rounded-lg">
    <img
      @click="emits('onClickImage', props.image.path, props.image.alt)"
      class="rounded-lg hover:cursor-pointer"
      :src="props.image.path"
      :alt="props.image.alt"
    />
    <div class="flex items-center justify-center">
      <p class="font-semibold text-zinc-400">{{ props.image.caption }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['image'])
const emits = defineEmits(['onClickImage'])
</script>
