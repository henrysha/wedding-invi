/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  importOrder: [
    '^@/components/(.*)$',
    '^@/server/(.*)$',
    '^@/utils/(.*)$',
    '^@/types/(.*)$',
    '^@/(.*)$',
    '^../',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
