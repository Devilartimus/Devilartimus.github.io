import { createI18n } from 'vue-i18n'
import { ptBR, enUS, VueI18nLocales } from 'better-write-languages'

export default createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  locales: VueI18nLocales,
  messages: {
    ry: ruRu.default,
    en: enUS.default,
  },
})
