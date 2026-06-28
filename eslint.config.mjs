// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import { sharedRules } from '@mayaharadev/eslint-config-nuxt'

export default withNuxt(
  .../** @type {any[]} */ (sharedRules),

  // ─── Nuxt: プロジェクト固有のルール ──────────────────────────────
  {
    files: ['**/*.vue'],
    rules: {
      // <a> タグの代わりに <NuxtLink> を使用
      // 内部リンク: <NuxtLink to="/path">、外部リンク: <NuxtLink to="..." external>
      'vue/no-restricted-html-elements': [
        'error',
        {
          element: 'a',
          message: '<a> タグは使用禁止です。内部リンクは <NuxtLink to="...">、外部リンクは <NuxtLink to="..." external> を使用してください。',
        },
      ],
    },
  },

  // ─── Nuxt: レイアウト固有の例外 ───────────────────────────────────
  {
    files: ['app/layouts/**/*.vue'],
    rules: {
      // Nuxt のレイアウトは Header・main・Footer など複数ルートが一般的（Vue 3 フラグメント）
      'vue/no-multiple-template-root': 'off',
    },
  },
)
