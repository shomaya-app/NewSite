<template>
  <PartsSlider :slides="slides" />
</template>

<script setup lang="ts">
import slider_image1 from '~/assets/img/top/slider/slide1.png'
import slider_image2 from '~/assets/img/top/slider/slide2.png'
import slider_image3 from '~/assets/img/top/slider/slide3.png'
import slider_image4 from '~/assets/img/top/slider/slide4.png'

const slides = [
  {
    image: slider_image1,
    title: 'Solving Social Issues Together',
    description: '共に社会課題を解決する'
  },
  {
    image: slider_image2,
    title: 'Advancing Quality of Life through Medical Innovation',
    description: '医療イノベーションで生活の質を向上させる'
  },
  {
    image: slider_image3,
    title:
      "Skills and Values-based Education through Japan's Technological Expertise",
    description: 'Future starts here.'
  },
  {
    image: slider_image4,
    title: 'Enduring Bonds, Sustainable Growth',
    description: '揺るぎない絆、持続可能な成長を'
  }
]
</script>
