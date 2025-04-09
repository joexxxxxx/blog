import { defineConfig, presetAttributify, presetUno } from 'unocss'
// import {presetUno} from 'unocss'
// import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    // presetDaisy(),
    // ...custom presets
  ],
})
