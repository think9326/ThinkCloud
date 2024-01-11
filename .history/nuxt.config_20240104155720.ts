// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   srcDir: 'src/',
//   modules: [
//     // ...
//     '@pinia/nuxt',
//   ],

// })
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  srcDir: 'src/',
  //...
  build: {
    transpile: ['vuetify'],
  },
  css: [
    '/assets/styles/global.css', // 这里是你的全局样式文件路径
  ],
  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
