<template>
  <PartsPageTitle
    title="Our Strengths"
    subtitle="About our strengths as a consulting and trading company in Bangladesh"
  />
  <div class="mx-auto max-w-[768px] px-[20px]">
    <ol class="counter-reset space-y-4">
      <li
        v-for="(strength, index) in strengthsEnglish"
        :key="index"
        class="counter-increment counter-before before:font-Roboto before:pc:top-[0.8rem] relative mb-[30px] pl-10 before:absolute before:top-[0.4rem] before:left-0 before:flex before:h-[20px] before:w-[20px] before:items-center before:justify-center before:rounded-full before:border before:text-sm"
      >
        <h2 class="pc:text-[20px] text-[1.6rem] font-bold">
          {{ strength.title }}
        </h2>
        <p v-if="strength.description" class="mt-[10px]">
          {{ strength.description }}
        </p>
        <ul
          v-if="strength.subList"
          class="mt-[10px] ml-[20px] list-disc text-[1.4rem]"
        >
          <li v-for="(item, subIndex) in strength.subList" :key="subIndex">
            {{ item.text }}
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
type Strength = {
  title: string
  description?: string
  subList?: { text: string }[]
}

const strengths: Strength[] = [
  {
    title: '資金調達・公的資金（ODA/助成金）活用スキームの構築 ',
    description:
      '民間企業が進出をためらう最大の壁は「初期投資のリスティング」です。',
    subList: [
      {
        text: '日本の経済産業省、JICA、各省庁の補助金・助成金の申請支援。'
      },
      {
        text: 'バングラデシュでのビジネスと公的資金を掛け合わせたシードマネー獲得のコンサルティング。'
      }
    ]
  },
  {
    title: 'ガバメント・リレーションズ（政府・行政機関との連携支援）',
    description:
      '新政権幹部とのパイプがあることは、他社にはない圧倒的な強みです。',
    subList: [
      {
        text: 'バングラデシュ政府、関連省庁との面談・折衝のセッティングおよびサポート。'
      },
      {
        text: '現地の法規制、許認可取得における政府機関との円滑なコミュニケーション支援。'
      }
    ]
  },
  {
    title: '社会課題解決型（BOP/SDGs）ビジネスの特化型支援',
    description:
      '日本で、環境や、公衆衛生、予防・先端医療ビジネスの事業を起業、コンサルティングをしてきましたので直近のバングラデシュの課題解決に寄与できます。',
    subList: [
      {
        text: '環境・サーキュラーエコノミー事業支援： （例）医療系廃棄物、廃棄物処理の新法へ'
      },
      {
        text: '縫製業に伴う廃棄物（ジュート）関連ビジネス（リサイクル）の立ち上げ支援。'
      },
      {
        text: '公衆衛生・ヘルスケア事業支援： （例）デング熱、糖尿病対策やインフラ改善に関するビジネス化支援。'
      }
    ]
  },
  {
    title: '現地財閥・有力企業とのジョイントベンチャー（JV）組成',
    description:
      '途上国進出ではローカルパートナーの力が必須です。単なる「パートナー探索」ではなく、「バングラデシュの有力財閥やトップ企業とのJV組成・交渉支援」が可能です。'
  }
]

const strengthsEnglish: Strength[] = [
  {
    title:
      'Structuring Schemes for Funding and Utilization of Public Funds (ODA/Subsidies)',
    subList: [
      {
        text: 'The biggest barrier that makes private companies hesitate to expand overseas is the "listing of initial investments." '
      },
      {
        text: 'Application support for subsidies and grants from the Japanese Ministry of Economy, Trade and Industry (METI), JICA, and various ministries. '
      },
      {
        text: 'Consulting for acquiring seed money by combining business in Bangladesh with public funds. '
      }
    ]
  },
  {
    title:
      'Government Relations (Support for Collaboration with Government and Administrative Agencies) ',
    subList: [
      {
        text: 'Having a pipeline to the executives of the new administration is an overwhelming strength that other companies do not have. '
      },
      {
        text: 'Setting up and supporting meetings and negotiations with the Bangladesh government and related ministries. '
      },
      {
        text: 'Support for smooth communication with government agencies regarding local laws, regulations, and obtaining permits and licenses. '
      }
    ]
  },
  {
    title:
      'Specialized Support for Social Problem-Solving (BOP/SDGs) Businesses ',
    subList: [
      {
        text: 'Having started businesses and provided consulting in Japan in the fields of environment, public health, and preventive/advanced medical businesses, we can contribute to solving the immediate challenges of Bangladesh. '
      },
      {
        text: 'Environment and Circular Economy Business Support: (e.g.) Medical waste, addressing new laws on waste management. '
      },
      {
        text: 'Support for launching waste (jute) related businesses (recycling) associated with the garment industry. '
      },
      {
        text: 'Public Health and Healthcare Business Support: (e.g.) Support for commercializing countermeasures against dengue fever and diabetes, as well as infrastructure improvement. '
      }
    ]
  },
  {
    title:
      'Formation of Joint Ventures (JV) with Local Conglomerates and Leading Companies ',
    subList: [
      {
        text: 'The strength of a local partner is essential when expanding into developing countries. '
      },
      {
        text: 'Instead of mere "partner searching," we are capable of providing "support for JV formation and negotiation with leading conglomerates and top companies in Bangladesh." '
      }
    ]
  }
]
</script>
