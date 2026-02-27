<template>
  <PartsPageTitle
    title="Contact"
    subtitle="Contact us for inquiries and consultations regarding our consulting and trading services in Bangladesh"
  />

  <div class="mx-auto max-w-xl px-4 py-16">
    <h2 class="font-Roboto mb-[20px] text-[40px] font-bold">Contact Us</h2>

    <form
      @submit.prevent="handleSubmitContact"
      class="flex flex-col gap-[20px]"
    >
      <div class="flex flex-col gap-[12px]">
        <p class="text-[20px]">Your Name</p>
        <input
          v-model="name"
          type="text"
          placeholder="Name"
          class="w-full rounded border p-3"
          required
        />
      </div>

      <div class="flex flex-col gap-[12px]">
        <p class="text-[20px]">Your Email</p>
        <input
          v-model="email"
          type="email"
          placeholder="Email Address"
          class="w-full rounded border p-3"
          required
        />
      </div>

      <div class="flex flex-col gap-[12px]">
        <p class="text-[20px]">Your Message</p>
        <textarea
          v-model="message"
          placeholder="Message"
          rows="6"
          class="w-full rounded border p-3"
          required
        />
      </div>

      <!-- honeypot（非表示） -->
      <input type="text" class="hidden" tabindex="-1" autocomplete="off" />

      <button
        type="submit"
        :disabled="loading"
        class="rounded bg-black px-6 py-3 text-white"
      >
        {{ loading ? '送信中...' : '送信する' }}
      </button>

      <p v-if="success" class="text-green-600">送信が完了しました。</p>

      <p v-if="error" class="text-red-600">
        {{ error }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useContactViews } from '@/composables/views/useContactViews'

const { name, email, message, loading, success, error, handleSubmitContact } =
  useContactViews()
</script>
