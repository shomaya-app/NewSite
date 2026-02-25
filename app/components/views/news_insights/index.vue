<template>
  <PartsPageTitle
    title="News & Insights"
    subtitle="Our news and insights as a consulting and trading company in Bangladesh"
  />

  <div class="mx-auto flex max-w-[768px] flex-col gap-[40px] px-[20px]">
    <h2 class="pc:text-[3rem] text-[1.6rem] font-bold">News & Insights</h2>
    <p class="pc:text-[1.8rem] mt-[10px] text-[1.4rem]">
      We visited a Japanese-language automobile mechanic training school and an
      automotive maintenance workshop, where we received requests and feedback
      directed toward the Japanese side.
    </p>

    <div
      class="pc:flex-row pc:flex-wrap flex flex-col items-center justify-center gap-[20px]"
    >
      <img
        v-for="(image, index) in newsImages"
        :key="index"
        :src="image"
        alt="News & Insights Image"
        class="w-full max-w-[300px] rounded-[10px]"
      />
      <p class="pc:text-[1.8rem] mt-[10px] text-[1.4rem]">
        At a nursing school attached to a hospital, we spoke about the shortage
        of certified care workers in Japan.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import newImage1 from '@/assets/img/news_insights/news_image1.png'
import newImage2 from '@/assets/img/news_insights/news_image2.png'
import newImage3 from '@/assets/img/news_insights/news_image3.png'
import newImage4 from '@/assets/img/news_insights/news_image4.png'

const newsImages = [newImage1, newImage2, newImage3, newImage4]
</script>
