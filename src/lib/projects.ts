import type { ImageMetadata } from 'astro'
import Airrental from '../assets/air-rental.png'
import Mentorshow from '../assets/mentorshow-lp.png'
import Reveal from '../assets/reveal.png'
import Tatoo from '../assets/tatoo-formation.png'
import OnboardMe from '../assets/onboard-me-app.png'
import Eqwin from '../assets/eqwin-app.png'

export type ProjectVariant = 'screenshot' | 'logo'

export type ProjectData = {
  title: string
  description: string
  stack: string[]
  image: ImageMetadata
  link: string
  variant?: ProjectVariant
  featured?: boolean
}

export const projects: ProjectData[] = [
  {
    title: 'Onboard-me',
    description: 'Plateforme de onboarding pour les entreprises',
    stack: ['Tanstack', 'React', 'AdonisJS', 'TailwindCSS'],
    image: OnboardMe,
    link: 'https://onboard-me.com/',
    featured: true,
  },
  {
    title: 'Eqwin',
    description: 'Application de paris hippiques',
    stack: ['React Native', 'Expo', 'AdonisJS', 'Unistyles'],
    image: Eqwin,
    link: 'https://www.eqwin.app/fr',
    featured: true,
  },
  {
    title: 'Tatoo Formation',
    description: 'Plateforme de formation certifiante Qualiopi',
    stack: ['React', 'Tanstack', 'AdonisJS', 'TailwindCSS', 'Linear'],
    image: Tatoo,
    link: 'https://tatoo-formation.xyz/',
    variant: 'logo',
  },
  {
    title: 'Mentorshow',
    description: 'Plateforme de masterclass en ligne animées par des experts pour apprendre à son rythme, leader du secteur en France',
    stack: ['React Native', 'Next.JS', 'AdonisJS', 'Linear'],
    image: Mentorshow,
    link: 'https://mentorshow.com/',
    featured: true,
  },
  {
    title: 'Reveal',
    description:
      'Plateforme de monétisation permettant aux créateurs de vendre du contenu exclusif à leur communauté, architecture DDD, collaboration avec Figue.io',
    stack: ['Next.JS', 'NestJS', 'TailwindCSS', 'Linear'],
    image: Reveal,
    link: 'https://reveal.me/',
    featured: true,
  },
  {
    title: 'Dashboard Keeper',
    description: 'Gestion des réservations, statistiques, utilisateurs pour Air Rental, app mobile de gestion pour Keepers',
    stack: ['React Native', 'React', 'InertiaJS', 'AdonisJS', 'TailwindCSS', 'Linear'],
    image: Airrental,
    link: 'https://air-rental.fr/',
    variant: 'logo',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
