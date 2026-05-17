import { en } from './en'
import { fr } from './fr'

export const languages = ['fr', 'en'] as const
export type Lang = (typeof languages)[number]
export const defaultLang: Lang = 'fr'

const dictionaries = { fr, en } as const

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/')
  return (languages as readonly string[]).includes(seg) ? (seg as Lang) : defaultLang
}

export function useTranslations(lang: Lang) {
  return dictionaries[lang] ?? dictionaries[defaultLang]
}

/** Returns `pathname` rewritten for `lang` (default locale has no prefix). */
export function getLocalizedPath(pathname: string, lang: Lang): string {
  const segments = pathname.split('/').filter(Boolean)
  if ((languages as readonly string[]).includes(segments[0])) segments.shift()
  const rest = segments.join('/')
  if (lang === defaultLang) return '/' + rest
  return '/' + lang + (rest ? '/' + rest : '')
}
