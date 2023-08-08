import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', ' px-3 py-1 rounded  bg-violet-500 text-white cursor-pointer hover:bg-fuchsia-500  '],
    ['icon-btn', 'text-lg inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 !outline-none'],
    ['input', ' h-10 w-full text-white  bg-violet-9 dark:bg-trueGray-800 border-b-2 border-purple dark:text-purple placeholder-transparent focus:outline-none focus:border-purple-6'],
    ['label', 'absolute  left-0 -top-3.5 text-white dark:text-purple text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:dark:text-purple peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-6 peer-focus:text-sm'],
    ['form-card', 'bg-violet-9 dark:bg-trueGray-800 px-2 rounded-3xl max-w-sm mt-4 shadow-md shadow-purple-500/50'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,

    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
