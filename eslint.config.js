import eslintJs from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import { reactRefresh } from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [eslintJs.configs.recommended, eslintReact.configs["recommended"]],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  eslintConfigPrettier,
  reactRefresh.configs.vite(),
]);
