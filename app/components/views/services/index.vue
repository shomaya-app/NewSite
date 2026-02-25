<template>
  <PartsPageTitle
    title="Our Services"
    subtitle="Our services as a consulting and trading company in Bangladesh"
  />

  <div class="mx-auto max-w-[768px] px-[20px]">
    <ul>
      <li
        v-for="(service, index) in services"
        :key="index"
        class="list-style-none mb-[40px] list-none pl-[20px]"
      >
        <h2 class="pc:text-[3rem] text-[1.6rem] font-bold">
          {{ service.title }}
        </h2>
        <p class="pc:text-[1.8rem] mt-[10px] text-[1.4rem]">
          {{ service.description }}
        </p>
        <ul class="list-disc pl-[20px]">
          <li
            v-for="content in service.contents"
            :key="content.text"
            class="pc:text-[1.6rem] mt-[10px] text-[1.4rem]"
          >
            {{ content.text }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type Service = {
  title: string
  description: string
  contents: { text: string }[]
}

const services: Service[] = [
  {
    title: 'Market Research (Field Research and Hypothesis Building)',
    description:
      'This is the phase to grasp the "real local situation" before expanding and to assess business potential. ',
    contents: [
      {
        text: 'Macro and Micro Environmental Analysis: Research ranging from politics, economy, and legal regulations to specific industry trends.'
      },
      {
        text: 'Market Size and Potential Research: The size of the target market and future growth forecasts.'
      },
      {
        text: 'Competitor Research and Benchmarking: Trend analysis of local companies and foreign-affiliated competitor players.'
      },
      {
        text: 'Consumer and User Research: Research on local consumer needs, purchasing power, and lifestyle habits.'
      },
      {
        text: 'Hypothesis Building for Business Opportunities: Formulating hypotheses on "where business opportunities lie" based on the research results.'
      }
    ]
  },
  {
    title:
      'Business and Growth Strategy (Overseas Expansion Strategy Construction and Execution Support)',
    description:
      'Strategy formulation and execution on how to deploy existing businesses and products to suit the local market.',
    contents: [
      {
        text: 'Formulation of Market Entry (Go-to-Market) Strategy: Selection of the target segment, pricing, and positioning design.'
      },
      {
        text: 'Sales Channel and Agency Development Strategy: Building local physical stores and online sales networks, and finding optimal agencies.'
      },
      {
        text: 'Supply Chain Construction: Support for building local manufacturing, procurement, and logistics networks (such as factory expansion).'
      },
      {
        text: 'Local Partner Search and M&A Strategy: Selection of local companies (JV partners) essential for expansion, or formulation of acquisition strategies.'
      },
      {
        text: 'Execution (Full Package) Support: Hands-on support from company establishment, base opening, and human resource recruitment to the start of the business.'
      }
    ]
  },
  {
    title: 'New Business (New Business Support)',
    description:
      'This is the phase of creating a "completely new business" from scratch, originating from local issues and the latest technology, rather than as an extension of an existing business.',
    contents: [
      {
        text: 'Support for Fundraising and Utilization of Public Funds (ODA and Subsidies)'
      },
      {
        text: 'Support for Collaboration with Government and Administrative Agencies: Smooth communication and meeting support with high-ranking government officials and related ministries necessary for business promotion and obtaining permits and licenses.'
      },
      {
        text: 'Formation of JV (Joint Ventures) with Leading Conglomerates and Top Companies: Going beyond mere partner searching to build strong alliances with highly reliable top companies that drive local business.'
      },
      {
        text: 'Creation and Planning of Business Ideas: Planning business models that solve local social issues (IoT/AI, primary industries, infrastructure, etc.).'
      },
      {
        text: 'Feasibility Study (Commercialization Research): Verification of whether the new business is technically and economically feasible.'
      },
      {
        text: 'Support for Implementation of PoC (Proof of Concept): Support for demonstration experiments using small-scale test marketing or prototypes.'
      },
      {
        text: 'Formulation of Business Plans and Roadmaps: Creation of business plans aimed at monetization.'
      },
      {
        text: 'Hands-on Launch Support: Instead of desktop proposals, we proceed together on-site from the actual launch to initial operations. We provide hands-on support from the actual business launch until it gets on track.'
      }
    ]
  }
]
</script>
