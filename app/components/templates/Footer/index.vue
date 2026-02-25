<template>
  <footer class="mt-20 bg-white">
    <!-- 上部情報 -->
    <div class="py-12 text-center">
      <div class="mx-auto max-w-5xl px-4">
        <!-- ロゴ -->
        <NuxtLink to="/" class="text-xl tracking-wide">
          Association Japan Bangladesh<br class="pc:hidden block" />Consulting &
          Trading
        </NuxtLink>
      </div>
    </div>

    <!-- フッターナビ -->
    <div class="bg-gray-200">
      <ul
        class="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 py-8 text-sm"
      >
        <li v-for="link in footerLinks" :key="link.path">
          <NuxtLink :to="link.path" class="hover:underline">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- コピーライト -->
    <div
      class="bg-gold-navigation border-t py-6 text-center text-xs text-white"
    >
      <small>
        Copyright © {{ year }}
        Association Japan Bangladesh Consulting & Trading All Rights Reserved.
      </small>
    </div>

    <!-- ページトップ -->
    <button
      @click="scrollToTop"
      class="fixed right-6 bottom-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:opacity-80"
    >
      ↑
    </button>
  </footer>
</template>

<script setup lang="ts">
import { NAV_LINKS } from '~/constants/index'

const year = new Date().getFullYear()

const footerLinks = NAV_LINKS

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
