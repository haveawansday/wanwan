import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/wanwan/", // 需要 / 開頭和結尾
  title: "wanwan",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Test',
        items: [
          { text: 'test1', link: '/test1' },
          { text: 'test2', link: '/test2' }
        ]
      }
    ]
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
