<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Card Title",
  },
});
</script>

<template>
  <div
    class="relative flex justify-between py-2 space-x-2 pl-12 w-full before:content-[''] before:h-full before:w-1 before:left-8 before:top-0 before:border-r before:border-l before:border-red-400 before:absolute border-b border-blue-400"
  >
    <h2 class="font-medium text-lg">{{ title }}</h2>
    <div>
      <slot name="extra" />
    </div>
  </div>
</template>
