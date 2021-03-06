module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "rules": {
    "comma-dangle": ["warn", "always-multiline"],
    //"indent": ["warn", 4],
    "linebreak-style": "off",
    "quotes": "off",
    "semi": ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-console": "off",
  },
};
