// @ts-check

import { defineConfig, globalIgnores } from "eslint/config";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";
import globals from "globals";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  globalIgnores(["dist", ".astro", "node_modules"]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [eslintJs.configs.recommended, eslintTs.configs.recommended],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
]);
