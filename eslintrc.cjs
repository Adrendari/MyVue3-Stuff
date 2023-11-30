module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "import"],
  root: true,
  rules: {
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      { allowTernary: true },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/space-infix-ops": "error",
    "array-bracket-spacing": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", { after: true, before: false }],
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "index",
          "sibling",
          "object",
          "type",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "internal",
            pattern: "@/**",
          },
        ],
      },
    ],
    indent: ["error", 2],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["../"],
            message:
              "Relative parent (../) import paths are not allowed. Use absolute (@/) or sibling (./) path instead.",
          },
        ],
      },
    ],
    "no-trailing-spaces": ["error"],
    "object-curly-spacing": ["error", "always"],
    semi: [2, "always"],
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "vue/attributes-order": [
      "error",
      {
        alphabetical: false,
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "EVENTS",
          "OTHER_ATTR",
          "CONTENT",
        ],
      },
    ],
    "vue/html-indent": "error",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 2,
        },
      },
    ],
    "vue/multi-word-component-names": "off",
    "vue/no-lone-template": "error",
    "vue/require-default-prop": "error",
    "vue/require-prop-types": "error",
    "vue/sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: false,
        ignoreChildrenOf: ["model"],
        ignoreGrandchildrenOf: [
          "computed",
          "directives",
          "inject",
          "props",
          "watch",
        ],
        natural: true,
      },
    ],
  },
};
