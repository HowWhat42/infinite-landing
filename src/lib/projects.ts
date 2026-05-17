import type { ImageMetadata } from 'astro'
import Airrental from '../assets/air-rental.png'
import Mentorshow from '../assets/mentorshow-lp.png'
import Reveal from '../assets/reveal.png'
import Tatoo from '../assets/tatoo-formation.png'
import OnboardMe from '../assets/onboard-me-app.png'
import Eqwin from '../assets/eqwin-app.png'
import type { Lang } from '../i18n'
import { useTranslations } from '../i18n'

export type ProjectVariant = 'screenshot' | 'logo'

export type ProjectId =
  | 'onboard-me'
  | 'eqwin'
  | 'tatoo-formation'
  | 'mentorshow'
  | 'reveal'
  | 'dashboard-keeper'

export type ProjectData = {
  id: ProjectId
  title: string
  stack: string[]
  image: ImageMetadata
  link: string
  variant?: ProjectVariant
  featured?: boolean
}

export const projects: ProjectData[] = [
  {
    id: 'onboard-me',
    title: 'Onboard-me',
    stack: ['Tanstack', 'React', 'AdonisJS', 'TailwindCSS'],
    image: OnboardMe,
    link: 'https://onboard-me.io/',
    featured: true,
  },
  {
    id: 'eqwin',
    title: 'Eqwin',
    stack: ['React Native', 'Expo', 'AdonisJS', 'Unistyles'],
    image: Eqwin,
    link: 'https://www.eqwin.app/fr',
    featured: true,
  },
  {
    id: 'tatoo-formation',
    title: 'Tatoo Formation',
    stack: ['React', 'Tanstack', 'AdonisJS', 'TailwindCSS', 'Linear'],
    image: Tatoo,
    link: 'https://tatoo-formation.xyz/',
    variant: 'logo',
  },
  {
    id: 'mentorshow',
    title: 'Mentorshow',
    stack: ['React Native', 'Next.JS', 'AdonisJS', 'Linear'],
    image: Mentorshow,
    link: 'https://mentorshow.com/',
    featured: true,
  },
  {
    id: 'reveal',
    title: 'Reveal',
    stack: ['Next.JS', 'NestJS', 'TailwindCSS', 'Linear'],
    image: Reveal,
    link: 'https://reveal.me/',
    featured: true,
  },
  {
    id: 'dashboard-keeper',
    title: 'Dashboard Keeper',
    stack: ['React Native', 'React', 'InertiaJS', 'AdonisJS', 'TailwindCSS', 'Linear'],
    image: Airrental,
    link: 'https://air-rental.fr/',
    variant: 'logo',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProjectDescription(id: ProjectId, lang: Lang): string {
  return useTranslations(lang).projects[id]
}
