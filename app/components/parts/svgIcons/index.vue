<template>
  <svg
    v-if="props.icon === 'HamburgerMenu'"
    class="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    :class="props.svgClass"
  >
    <path
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
  <svg
    v-else-if="props.icon === 'CloseMenu'"
    class="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    :class="props.svgClass"
  >
    <path
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</template>

<script setup lang="ts">
export type SvgIconType = 'HamburgerMenu' | 'CloseMenu'

type Props = {
  icon: SvgIconType
  svgClass?: string
}

const props = defineProps<Props>()
</script>
