import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["list"],
    ["html", { open: "never" }],
  ],

  outputDir: "test-results",

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,

    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});