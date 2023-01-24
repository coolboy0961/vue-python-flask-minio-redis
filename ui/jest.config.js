module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["**/tests/**/*.[jt]s?(x)"],
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue",
    "ts",
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "@vue/vue2-jest",
    // `ts-jest` で `*.ts` ファイルを処理します。
    "^.+\\.tsx?$": "ts-jest",
  },
};
