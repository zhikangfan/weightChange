import { defineConfig } from "umi";

export default defineConfig({
  title: '体重表',
  routes: [
    { path: "/", component: "index" },
    { path: '/*', component: "error"},
  ],
  npmClient: 'pnpm',
});