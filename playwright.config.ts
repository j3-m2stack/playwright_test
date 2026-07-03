import { defineConfig } from '@playwright/test';

export default defineConfig({
    reporter: [
        ['list'],
        ['html', { open: 'never' }]
    ],

    use: {
        baseURL: process.env.BASE_URL,
        headless: true
    }
});