<template>
  <PartsPageTitle
    title="Mission & Vision"
    subtitle="Our mission and vision as a consulting and trading company in Bangladesh"
  />

  <div class="mx-auto max-w-[768px] px-[20px]">
    <!-- Mission & Vision -->
    <div v-for="(item, index) in missionVision" :key="index" class="mb-[40px]">
      <h2 class="pc:text-[3rem] text-[1.6rem] font-bold">{{ item.title }}</h2>
      <p
        v-for="description in item.descriptions"
        class="pc:text-[1.8rem] mt-[10px] text-[1.4rem]"
      >
        {{ description.text }}
      </p>
    </div>

    <!-- Message from the Chairman -->
    <div class="mb-[40px]">
      <h2 class="pc:text-[3rem] text-[1.6rem] font-bold">Message</h2>
      <p
        class="pc:text-[1.8rem] mt-[10px] text-[1.4rem]"
        v-html="message.text"
      ></p>
      <p class="pc:text-[1.6rem] mt-[20px] text-[1.2rem] font-bold">
        {{ message.company }}<br />
        Chairman: {{ message.chairman }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
type DisplayData = {
  title: string
  descriptions: { text: string }[]
}

const missionVision: DisplayData[] = [
  {
    title: 'Mission',
    descriptions: [
      {
        text: 'Solving social issues with wisdom and business, alongside the new Bangladesh.'
      }
    ]
  },
  {
    title: 'Vision',
    descriptions: [
      {
        text: "To utilize Japan's technological capabilities and public funds as optimal seed money, connecting them with the outstanding young talents of Bangladesh."
      },
      {
        text: 'To become the strongest partner in "co-creating" new employment and a sustainable industrial structure during the nation\'s transitional period of graduating from LDC (Least Developed Country) status.'
      },
      {
        text: 'To conduct the No.1 cutting-edge preventive medical business in Islamic countries.'
      }
    ]
  }
]

const message = {
  text: 'Since my homeland, Bangladesh, became independent in 1971, Japan has provided us with the most economic and humanitarian aid, more than anywhere else and for the longest time. <br /> This year, 2026, marks a decisive turning point in the history of the People\'s Republic of Bangladesh, with major paradigm shifts advancing in politics, economy, and diplomacy. The large-scale anti-government protests led by Generation Z, known as the "Monsoon Revolution" that occurred from July to August 2024, led to the collapse of the Sheikh Hasina administration (Awami League), which had continued its authoritarian rule for 15 years. Subsequently, national reconstruction was carried out for about 18 months under an interim government led by Nobel Peace Prize laureate Muhammad Yunus, and a historic general election was held on February 12, 2026. <br /> The Bangladesh Nationalist Party (BNP), led by Tarique Rahman, who returned from exile in London for about 17 years, won 209 out of the 300 seats, achieving a landslide victory well over a simple majority, and his inauguration as the new Prime Minister has been confirmed. This election has also been referred to as the "world\'s first Generation Z-inspired election," becoming an important touchstone for the restoration of democracy and the formulation of a new national vision in Bangladesh. This is because the values and capacity for action of Generation Z, who emphasize transparency and fairness and strongly reject corruption, inequality, and structures of privilege, became the driving force that moved the old regime that lasted for more than 15 years and changed the very rules of the nation. <br /> Amidst this dramatic period of transformation, we have established the "General Incorporated Association Japan Bangladesh Consulting & Trading," aiming to contribute to solving social issues in Bangladesh by collaborating with the new government and utilizing Japan\'s Official Development Assistance (ODA) and the subsidy systems of the Ministry of Economy, Trade and Industry. At the same time, with Myanmar no longer a democratic nation due to the military coup, Bangladesh is said to be the last paradise (the last remaining growth frontier). We aim to realize projects that are valuable for both the public and private sectors by providing practical support, including market research, business formation, local collaboration, and regulatory compliance, to Japanese and private companies seeking new entry into the market.',
  company: 'Association Japan Bangladesh Consulting & Trading',
  chairman: 'Kimura Alam'
}
</script>
