// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // Disable "vue/script-setup-uses-vars"
      "vue/script-setup-uses-vars": "off",
    },
  },
);
