module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/extensions": "off",
    "import/no-unresolved": "off",
    quotes: ["error", "double"],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
  },
};
