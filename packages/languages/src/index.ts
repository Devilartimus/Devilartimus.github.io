import { LanguageRaw, LanguageI18N } from 'better-write-types'
export * as enUS from './en-US'
export * as ruRU from './ru-RU'

export const VueI18nLocales = [
  {
    name: 'Русский',
    code: 'ru',
    iso: 'ru-RU',
  },
  {
    name: 'English',
    code: 'en',
    iso: 'en-US',
  },
]

export const VueI18nAllISO = ['en-US', 'ru-RU']

export const VueI18nSEO = [
  {
    property: 'og:locale',
    content: 'ru_RU',
    key: 'ru',
  },
  {
    property: 'og:locale:alternate',
    content: 'en_US',
    key: 'en',
  },
]

export const LanguagesRaw: LanguageRaw[] = ['Русский', 'English']

export const localeToRaw = (lang: LanguageRaw) => {
  return (
    {
      'Русский': 'ru',
      English: 'en',
    }[lang] || 'en'
  )
}

export const onSwitchLanguage = (lang: LanguageRaw): Promise<LanguageI18N> => {
  return new Promise((res) => {
    const set =
      {
        'Русский': 'ru',
        English: 'en',
      }[lang] || 'en'

    localStorage.setItem('lang', set)

    const iso =
      {
        en: 'en-US',
        br: 'ru-RU',
      }[set] || 'en-US'

    ;(document.querySelector('html') as HTMLElement).lang = iso

    res(set as LanguageI18N)
  })
}
