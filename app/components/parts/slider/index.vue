<template>
  <div class="w-full">
    <Swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 8000 }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="h-[70vh]"
    >
      <SwiperSlide v-for="(slide, index) in props.slides" :key="index">
        <div
          class="flex h-full w-full items-center justify-center bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="bg-black/40 p-6 text-center text-white">
            <h2 class="pc:text-[2.2rem] text-[1.8rem] font-bold">
              {{ slide.title }}
            </h2>
            <p class="pc:text-[1.8rem] mt-4 text-lg text-[1.4rem]">
              {{ slide.description }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type Slide = {
  image: string
  title: string
  description: string
}

type Props = {
  slides: Slide[]
}

const props = defineProps<Props>()
</script>

<style scoped>
/* アクティブドット */
.swiper-pagination-bullet-active {
  background-color: #005239; /* ゴールド */
}

.swiper-button-next,
.swiper-button-prev {
  color: #005239; /* ゴールド */
}

@media (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 26px;
    height: 26px;
  }
}

.swiper-button-next::after,
.swiper-button-prev::after {
  color: #005239; /* ゴールド */
}
</style>
