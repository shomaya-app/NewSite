<template>
  <div
    class="pc:flex-start flex-end pc:justify-between flex w-full items-center justify-end"
  >
    <!-- PCナビ -->
    <nav class="pc:flex hidden w-full bg-gray-200">
      <ul class="flex w-full items-center justify-center">
        <li
          v-for="link in navigationLinks"
          :key="link.path"
          class="hover:text-primary hover:bg-gold-navigation flex min-w-[110px] items-center justify-center border-x border-x-white px-[21px] leading-[60px] font-medium hover:text-white"
          :class="getNavigationBackgroundColor(link.path)"
        >
          <NuxtLink
            :to="link.path"
            class="inline-block items-center text-[1.4rem]"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- ハンバーガーメニュー -->
    <div class="pr-[20px]">
      <button
        @click="toggleMenu"
        class="pc:hidden flex-end flex text-gray-700 focus:outline-none"
      >
        <span v-if="!isOpen">
          <!-- ハンバーガーアイコン -->
          <PartsSvgIcons icon="HamburgerMenu" svgClass="w-[32px] h-[32px]" />
        </span>
        <span v-else>
          <!-- 閉じるアイコン -->
          <PartsSvgIcons icon="CloseMenu" svgClass="w-[32px] h-[32px]" />
        </span>
      </button>
    </div>
  </div>

  <!-- モバイルメニュー -->
  <transition name="slide-down">
    <nav
      v-show="isOpen"
      class="pc:hidden h-full w-full border border-gray-200 bg-white shadow-lg"
    >
      <ul class="flex flex-col">
        <li
          v-for="link in navigationLinks"
          :key="link.path"
          class="border-b border-gray-200"
        >
          <NuxtLink
            :to="link.path"
            class="block text-lg font-medium"
            @click="toggleMenu"
            >{{ link.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()

const getNavigationBackgroundColor = (linkPath: string) => {
  if (route.path === linkPath) {
    return 'bg-gold-navigation text-white'
  }
}

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

const navigationLinks = [
  { name: 'HOME', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Mission&Vision', path: '/mission_vision' },
  { name: 'Strengths', path: '/strengths' },
  { name: 'Services', path: '/services' },
  { name: 'Focus Areas', path: '/focus_areas' },
  {
    name: 'News＆Insights',
    path: '/news_insights'
  },
  { name: 'Contact', path: '/contact' }
]
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.slide-down-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
