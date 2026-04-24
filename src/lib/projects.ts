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
    description:
      "Conception et développement from scratch d'Onboard-me, SaaS d'onboarding pour motion designers qui centralise brief, script, storyboard, audio, vidéo et planning, remplaçant la dizaine d'outils habituellement éparpillés sur un projet",
    stack: ['Tanstack', 'React', 'AdonisJS', 'TailwindCSS'],
    image: OnboardMe,
    link: 'https://onboard-me.io/',
    featured: true,
  },
  {
    title: 'Eqwin',
    description:
      "Développement de l'app mobile et du backend d'Eqwin, plateforme de fantasy horse racing avec écuries virtuelles indexées sur les courses réelles, 28 000 utilisateurs inscrits et 90 000€ reversés à la filière hippique",
    stack: ['React Native', 'Expo', 'AdonisJS', 'Unistyles'],
    image: Eqwin,
    link: 'https://www.eqwin.app/fr',
    featured: true,
  },
  {
    title: 'Tatoo Formation',
    description:
      "Développement du LMS de Tatoo Formation, organisme certifié Qualiopi, gestion des parcours, évaluations et délivrance des certifications sur mesure",
    stack: ['React', 'Tanstack', 'AdonisJS', 'TailwindCSS', 'Linear'],
    image: Tatoo,
    link: 'https://tatoo-formation.xyz/',
    variant: 'logo',
  },
  {
    title: 'Mentorshow',
    description:
      "Développement de l'app mobile et de la plateforme web de Mentorshow, leader français de la masterclass en ligne, collaboration au long cours sur un produit à fort trafic avec des experts reconnus comme Boris Cyrulnik ou Christophe André",
    stack: ['React Native', 'Next.JS', 'AdonisJS', 'Linear'],
    image: Mentorshow,
    link: 'https://mentorshow.com/',
    featured: true,
  },
  {
    title: 'Reveal',
    description:
      "Développement de Reveal, plateforme de monétisation permettant aux créateurs de vendre du contenu exclusif à leur communauté, architecture DDD sur stack Next.JS et NestJS, collaboration avec l'agence Figue.io",
    stack: ['Next.JS', 'NestJS', 'TailwindCSS', 'Linear'],
    image: Reveal,
    link: 'https://reveal.me/',
    featured: true,
  },
  {
    title: 'Dashboard Keeper',
    description:
      "Développement du dashboard web et de l'app mobile Keeper pour Air Rental, gestion des réservations, statistiques et utilisateurs côté back-office, outils terrain pour les Keepers en charge des logements",
    stack: ['React Native', 'React', 'InertiaJS', 'AdonisJS', 'TailwindCSS', 'Linear'],
    image: Airrental,
    link: 'https://air-rental.fr/',
    variant: 'logo',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
