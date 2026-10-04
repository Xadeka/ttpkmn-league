/**
 * @see https://prettier.io/docs/configuration
 * @type {
 *  import("prettier").Config
 *  & import("prettier-plugin-astro").PluginOptions
 *  & import("prettier-plugin-tailwindcss").PluginOptions
 * }
 */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  objectWrap: "preserve",
  bracketSameLine: false,
  proseWrap: "preserve",
  arrowParens: "always",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  quoteProps: "as-needed",
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
  tailwindFunctions: ["cn"],
};

export default config;
