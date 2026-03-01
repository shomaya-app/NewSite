<template>
  <PartsSlider :slides="slides" />

  <!-- Mission & Vision -->
  <section class="fade-section">
    <PartsPageTitle
      title="Mission & Vision"
      description="Our mission and vision as a consulting and trading company in Bangladesh"
      heightClass="pc:h-[300px] h-[200px]"
    />
    <div class="mx-auto flex max-w-[768px] flex-col gap-[60px] px-[20px]">
      <div>
        <h2 class="pc:text-[3rem] text-center text-[1.6rem] font-bold">
          Mission
        </h2>
        <p class="pc:text-[1.8rem] mt-[10px] text-center text-[1.4rem]">
          Solving social issues with wisdom and business, alongside the new
          Bangladesh.
        </p>
      </div>
      <div>
        <h2 class="pc:text-[3rem] text-center text-[1.6rem] font-bold">
          Vision
        </h2>
        <p class="pc:text-[1.8rem] mt-[10px] text-center text-[1.4rem]">
          To utilize Japan's technological capabilities and public funds as
          optimal seed money, connecting them with the outstanding young talents
          of Bangladesh.
        </p>
      </div>
    </div>
    <NuxtLink
      href="/mission_vision"
      class="bg-deep-green mx-auto mt-[40px] block w-max rounded-[30px] px-[30px] py-[10px] text-center text-[1.4rem] font-bold text-white transition-colors hover:bg-[#005239]/80"
    >
      View More Mission & Vision
    </NuxtLink>
  </section>

  <!-- Strengths -->
  <section class="fade-section">
    <PartsPageTitle
      title="Strengths"
      description="Our strengths as a consulting and trading company in Bangladesh"
      heightClass="pc:h-[300px] h-[200px]"
    />
    <div class="mx-auto flex max-w-[768px] flex-col gap-[30px] px-[20px]">
      <div>
        <h2 class="pc:text-[3rem] text-center text-[1.6rem] font-bold">
          Strengths
        </h2>
        <p class="pc:text-[1.8rem] mt-[10px] text-center text-[1.4rem]">
          About our strengths as a consulting and trading company in Bangladesh
        </p>
      </div>
      <ul class="mx-auto max-w-[600px] list-disc text-[1.4rem]">
        <li
          v-for="(strength, index) in strengthsEnglish"
          :key="index"
          class="list-disc"
        >
          <p class="pc:text-[1.8rem] mt-[10px] text-[1.4rem]">
            {{ strength.title }}
          </p>
        </li>
      </ul>
    </div>
    <NuxtLink
      href="/strengths"
      class="bg-deep-green mx-auto mt-[40px] block w-max rounded-[30px] px-[30px] py-[10px] text-center text-[1.4rem] font-bold text-white transition-colors hover:bg-[#005239]/80"
    >
      View More Strengths
    </NuxtLink>
  </section>

  <!-- Services -->
  <section class="fade-section">
    <PartsPageTitle
      title="Services"
      description="Our services as a consulting and trading company in Bangladesh"
      heightClass="pc:h-[300px] h-[200px]"
    />
    <div class="mx-auto flex max-w-[768px] flex-col gap-[30px] px-[20px]">
      <div>
        <h2 class="pc:text-[3rem] text-center text-[1.6rem] font-bold">
          Services
        </h2>
        <p class="pc:text-[1.8rem] mt-[10px] text-center text-[1.4rem]">
          Our services as a consulting and trading company in Bangladesh
        </p>
      </div>
      <ul class="mx-auto max-w-[600px] list-disc text-[1.4rem]">
        <li v-for="(service, index) in services" :key="index" class="list-disc">
          <p class="pc:text-[1.8rem] mt-[10px] text-[1.4rem]">
            {{ service.title }}
          </p>
        </li>
      </ul>
    </div>
    <NuxtLink
      href="/services"
      class="bg-deep-green mx-auto mt-[40px] block w-max rounded-[30px] px-[30px] py-[10px] text-center text-[1.4rem] font-bold text-white transition-colors hover:bg-[#005239]/80"
    >
      View More Services
    </NuxtLink>
  </section>

  <!-- Focus Areas -->
  <section class="fade-section">
    <PartsPageTitle
      title="Focus Areas"
      description="Our focus areas as a consulting and trading company in Bangladesh"
      heightClass="pc:h-[300px] h-[200px]"
    />
    <div class="mx-auto flex max-w-[768px] flex-col gap-[30px] px-[20px]">
      <div>
        <h2 class="pc:text-[3rem] text-center text-[1.6rem] font-bold">
          Focus Areas
        </h2>
        <p class="pc:text-[1.8rem] mt-[10px] text-center text-[1.4rem]">
          Our focus areas as a consulting and trading company in Bangladesh
        </p>
      </div>
      <ul class="mx-auto max-w-[600px] list-disc text-[1.4rem]">
        <li
          v-for="(focusArea, index) in focusAreas"
          :key="index"
          class="list-disc"
        >
          <p class="pc:text-[1.8rem] mt-[10px] text-[1.4rem]">
            {{ focusArea.title }}
          </p>
        </li>
      </ul>
    </div>
    <NuxtLink
      href="/focus_areas"
      class="bg-deep-green mx-auto mt-[40px] block w-max rounded-[30px] px-[30px] py-[10px] text-center text-[1.4rem] font-bold text-white transition-colors hover:bg-[#005239]/80"
    >
      View More Focus Areas
    </NuxtLink>
  </section>
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

const strengthsEnglish = [
  {
    title:
      'Structuring Schemes for Funding and Utilization of Public Funds (ODA/Subsidies)'
  },
  {
    title:
      'Government Relations (Support for Collaboration with Government and Administrative Agencies)'
  },
  {
    title:
      'Specialized Support for Social Problem-Solving (BOP/SDGs) Businesses'
  },
  {
    title:
      'Formation of Joint Ventures (JV) with Local Conglomerates and Leading Companies'
  }
]

const services = [
  { title: 'Market Research (Field Research and Hypothesis Building)' },
  {
    title:
      'Business and Growth Strategy (Overseas Expansion Strategy Construction and Execution Support)'
  },
  { title: 'New Business (New Business Support)' }
]

const focusAreas = [
  { title: 'Medical, Public Health, and Healthcare Sector' },
  { title: 'Environment and Circular Economy Sector' },
  { title: 'Human Resource Development and Education Sector' }
]

onMounted(() => {
  const sections = document.querySelectorAll('.fade-section')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-show')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  sections.forEach((section) => {
    section.classList.add('fade-init')
    observer.observe(section)
  })
})
</script>

<style>
.fade-init {
  opacity: 0;
  transform: translateY(60px);
  transition:
    opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.fade-show {
  opacity: 1;
  transform: translateY(0); /* 元の位置へ */
}
</style>
