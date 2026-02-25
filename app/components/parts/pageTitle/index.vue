<template>
  <Transition name="fade" appear>
    <div
      class="flex w-full flex-col items-center justify-center gap-[20px] px-[20px]"
      :class="getHeightClass()"
    >
      <h1 class="pc:text-[60px] text-[30px]">{{ title }}</h1>
      <p v-if="subtitle" class="pc:text-[20px] text-[1.6rem]">
        {{ subtitle }}
      </p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
type Props = {
  title: string
  subtitle?: string
  heightClass?: string
}

const props = defineProps<Props>()

const getHeightClass = () => {
  return props.heightClass ? props.heightClass : 'pc:h-[450px] h-[250px]'
}
</script>

<style>
.fade-enter-active {
  transition: opacity 1.5s ease 0.2s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
