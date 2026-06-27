// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'
import unicorn from 'eslint-plugin-unicorn'

export default withNuxt(
  // ─── TypeScript: strict-type-checked 相当の追加ルール ─────────────
  {
    files: ['**/*.vue', '**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    rules: {
      // any 型の使用を許可（段階的な型付けのため）
      '@typescript-eslint/no-explicit-any': 'off',

      // await なしで Promise を捨てることを禁止（エラーの握りつぶし防止）
      '@typescript-eslint/no-floating-promises': 'error',

      // @deprecated が付いた API・型の使用を禁止
      '@typescript-eslint/no-deprecated': 'error',

      // value! による非null断言演算子を禁止（型安全性の担保）
      '@typescript-eslint/no-non-null-assertion': 'error',

      // 常に true/false になる条件式を禁止（型情報から判定）
      '@typescript-eslint/no-unnecessary-condition': 'error',

      // String(str) や Number(num) など、すでに正しい型への変換を禁止
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',

      // `${str}` のように変数をそのまま入れるだけのテンプレートリテラルを禁止
      '@typescript-eslint/no-unnecessary-template-expression': 'error',

      // Set や Map など、スプレッドできないオブジェクトへの誤ったスプレッドを禁止
      '@typescript-eslint/no-misused-spread': 'error',

      // テンプレートリテラル内への any / null / undefined の混入を禁止（数値は許可）
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],

      // catch (e) の変数型を unknown に強制（any のままだと型安全でない）
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

      // try/catch 内では return await を強制（return だけだと catch に届かない場合がある）
      '@typescript-eslint/return-await': ['error', 'error-handling-correctness-only'],

      // 未使用変数を禁止（catch の変数は _ 始まりであれば除外）
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrorsIgnorePattern: '^_' }],
    },
  },

  // ─── Vue: 追加スタイルルール ──────────────────────────────────────
  {
    files: ['**/*.vue'],
    rules: {
      // void 要素（<img> など）の自己終了タグの書き方を統一
      'vue/html-self-closing': ['error', { html: { void: 'any' } }],

      // <script setup> 構文のみ許可（Options API / 通常の setup() は禁止）
      'vue/component-api-style': ['error', ['script-setup']],

      // <style scoped> のみ許可（グローバルスタイルの混入を防ぐ）
      'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],

      // テンプレート内でのコンポーネント参照は PascalCase に統一
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],

      // <script setup> 内のマクロ記述順を統一
      // defineOptions → defineProps → defineEmits → defineSlots、defineExpose は末尾
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
          defineExposeLast: true,
        },
      ],

      // コンポーネント名の設定には defineOptions() を使用（name プロパティの分散を防ぐ）
      'vue/prefer-define-options': 'error',

      // 中身のない <template> / <script> / <style> ブロックを禁止
      'vue/no-empty-component-block': 'error',

      // <template>, <script>, <style> の各ブロック間に空行を強制（視認性向上）
      'vue/padding-line-between-blocks': 'error',
    },
  },

  // ─── unicorn: recommended ベース + Nuxt/Vue 向けカスタマイズ ─────
  unicorn.configs['flat/recommended'],
  {
    rules: {
      // props / emit / el / e（event）など Vue 慣用の略語を許可
      'unicorn/prevent-abbreviations': 'off',

      // null を許可（Vue の v-model 初期値・フォームリセットなどで必要）
      'unicorn/no-null': 'off',

      // Array.reduce() を許可（適切に使えば問題ない）
      'unicorn/no-array-reduce': 'off',

      // Array.forEach() を許可（forEach の方が読みやすい場面もある）
      'unicorn/no-array-for-each': 'off',

      // ファイル名チェックを無効化（Nuxt は index.vue ネスト方式を採用）
      'unicorn/filename-case': 'off',

      // import スタイルの強制を無効化（Nuxt の auto-import と競合する）
      'unicorn/import-style': 'off',

      // top-level await の強制を無効化（Nuxt が useAsyncData 等で非同期を管理）
      'unicorn/prefer-top-level-await': 'off',

      // 否定条件を許可（否定の方が意図が明確な場面もある）
      'unicorn/no-negated-condition': 'off',

      // window の直接参照を許可（globalThis より明示的な場面がある）
      'unicorn/prefer-global-this': 'off',

      // 破壊的な Array.reverse() を許可（意図的に使う場合がある）
      'unicorn/no-array-reverse': 'off',
    },
  },

  // ─── Nuxt: プロジェクト固有のルール ──────────────────────────────
  {
    files: ['**/*.vue'],
    rules: {
      // <a> タグの代わりに <NuxtLink> を使用
      // 内部リンク: <NuxtLink to="/path">、外部リンク: <NuxtLink to="..." external>
      // vue/no-restricted-html-elements は vue プラグインのルールだが、目的は Nuxt 固有
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

  eslintConfigPrettier,
)
