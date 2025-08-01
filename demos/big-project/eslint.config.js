// @ts-check

import tseslint from "typescript-eslint";
import safeql from "@ts-safeql/eslint-plugin/config";

export default tseslint.config({
  files: ["src/**/*.ts", "_fake_src/**/*.ts"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  extends: [safeql.configs.useConfigFile],
});
