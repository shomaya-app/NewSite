<template>
  <!-- PCナビ -->
  <nav class="pc:flex hidden h-full items-center justify-center bg-gray-200">
    <ul class="flex h-full items-center justify-center">
      <li
        v-for="link in navigationLinks"
        :key="link.path"
        class="hover:text-primary hover:bg-gold-navigation flex min-w-[110px] items-center justify-center border-x border-x-white px-[21px] leading-[80px] font-medium hover:text-white"
        :class="getNavigationBackgroundColor(link.path)"
      >
        <NuxtLink :to="link.path" class="text-[1.4rem]">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <!-- 🔥 ハンバーガー右上固定 -->
  <button
    @click="toggleMenu"
    class="pc:hidden fixed top-[32px] right-[24px] z-[60]"
  >
    <PartsSvgIcons
      :icon="isOpen ? 'CloseMenu' : 'HamburgerMenu'"
      svgClass="w-[32px] h-[32px]"
    />
  </button>

  <!-- フルスクリーンメニュー -->
  <transition name="fade">
    <nav
      v-if="isOpen"
      class="pc:hidden fixed inset-0 z-[50] flex flex-col items-center justify-center bg-white"
    >
      <ul class="flex flex-col items-center space-y-8 text-2xl font-semibold">
        <li v-for="link in navigationLinks" :key="link.path">
          <NuxtLink :to="link.path" @click="closeMenu">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const route = useRoute()

const getNavigationBackgroundColor = (linkPath: string) => {
  if (route.path === linkPath) {
    return 'bg-gold-navigation text-white'
  }
}

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

// ✅ メニュー開いてる間はスクロール禁止
watch(isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const navigationLinks = [
  { name: 'HOME', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Mission&Vision', path: '/mission_vision' },
  { name: 'Strengths', path: '/strengths' },
  { name: 'Services', path: '/services' },
  { name: 'Focus Areas', path: '/focus_areas' },
  { name: 'News＆Insights', path: '/news_insights' },
  { name: 'Contact', path: '/contact' }
]
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
