import { defineConfig } from "umi";

export default defineConfig({
  title: '体重表',
  routes: [
    { path: "/", component: "index" },
    { path: '/bmi', component: 'bmi' },
    { path: '/*', component: "error"},
  ],
  npmClient: 'pnpm',
});