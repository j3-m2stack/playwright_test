import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  reporter: [
    ["list"],
    ["html", {
      outputFolder: "playwright-report",
      open: "never",
    }],
  ],

  outputDir: "test-results",

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,

    // Keep video for every test
    video: "on",

    // Keep trace for every test
    trace: "on",

    // Take screenshot only when a test fails
    screenshot: "only-on-failure",
  },
});