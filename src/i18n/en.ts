import type { fr } from './fr'

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> }

export const en: Widen<typeof fr> = {
  meta: {
    title: 'Infinite Lab - Custom Web Development',
    description:
      'Web development studio specialized in building tailor-made digital solutions. Expertise in React, Node.js and modern architectures.',
  },
  nav: {
    services: 'Expertise',
    projects: 'Work',
    me: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Start my project',
    company: 'Infinite Lab',
  },
  hero: {
    badge: '+10 projects already delivered successfully',
    title: 'Turn your ideas into digital success',
    description:
      'At Infinite Lab, we are committed to running every project with passion and precision. From design to hosting, we turn your vision into digital reality.',
    ctaPrimary: 'Get a tailored quote',
    ctaSecondary: 'Get in touch',
  },
  arguments: {
    badge: 'Why choose Infinite Lab?',
    title: 'A technical partner, not just a vendor',
    description:
      'Unlike an impersonal agency or a freelancer who is hard to follow up with, Infinite Lab offers you:',
    items: [
      'A single point of contact, attentive and available',
      'A tailor-made approach, adapted to your real challenges',
      'End-to-end support: design, dev, SEO, hosting',
      'Concrete results, delivered on time',
    ],
    cta: 'Discover our method',
  },
  services: {
    badge: 'Our expertise at the service of your project',
    title: 'A solid technical foundation, for a frictionless project',
    cta: 'Let’s talk about your project',
    cards: [
      {
        title: 'Frontend - Your tailor-made interface',
        description:
          'Showcase sites, blogs, dashboards or e-commerce: we design a smooth, responsive and elegant interface, adapted to every device.',
      },
      {
        title: 'Backend - High-performance technical foundations',
        description:
          'Databases, business logic, APIs… Everything is designed to guarantee fluidity, scalability and robustness. Your users won’t see what happens behind the scenes, but they’ll feel the difference.',
      },
      {
        title: 'SEO - Be visible from launch day',
        description:
          'We optimize your site for SEO and support you on your SEA campaigns. Your project deserves to be seen - and found.',
      },
      {
        title: 'Project management - From scoping to deployment',
        description:
          'We steer your project methodically, from initial scoping through to go-live, for a smooth and surprise-free result.',
      },
      {
        title: 'Tailor-made - Every solution is built for you',
        description:
          'No generic solutions. Every project is a precise answer to your need, your audience and your constraints.',
      },
      {
        title: 'Hosting - A service that lasts over time',
        description:
          'We handle servers, domains, emails and security. You have nothing to manage: your project is in good hands.',
      },
    ],
  },
  projectsSection: {
    badge: 'Completed projects',
    title: 'What we have already achieved for our clients',
    description: 'Concrete, tailor-made projects, with results to show for it:',
    cta: 'See all projects',
    projectLink: 'View the project',
  },
  projectsPage: {
    badge: 'Our work',
    title: 'All the projects we have delivered',
    description:
      'A complete selection of our collaborations, from MVP to production-grade platform.',
  },
  projects: {
    'onboard-me':
      'Design and from-scratch development of Onboard-me, an onboarding SaaS for motion designers that centralizes brief, script, storyboard, audio, video and planning, replacing the dozen tools usually scattered across a project',
    eqwin:
      'Development of the mobile app and backend of Eqwin, a fantasy horse racing platform with virtual stables indexed on real races, 28,000 registered users and €90,000 redistributed to the equestrian industry',
    'tatoo-formation':
      'Development of Tatoo Formation’s LMS, a Qualiopi-certified organization, managing learning paths, assessments and the delivery of custom certifications',
    mentorshow:
      'Development of the mobile app and web platform of Mentorshow, the French leader in online masterclasses, a long-term collaboration on a high-traffic product with renowned experts such as Boris Cyrulnik or Christophe André',
    reveal:
      'Development of Reveal, a monetization platform allowing creators to sell exclusive content to their community, DDD architecture on a Next.JS and NestJS stack, in collaboration with the Figue.io agency',
    'dashboard-keeper':
      'Development of the Keeper web dashboard and mobile app for Air Rental, managing bookings, statistics and users on the back-office side, with field tools for the Keepers in charge of the properties',
  },
  me: {
    role: 'CEO Infinite Lab',
    badge: 'About me',
    title: 'An involved, passionate developer by your side',
    bio: [
      'I’m Charles, a freelance Fullstack developer since 2021.',
      'I founded Infinite Lab with a simple conviction: every client deserves a reliable, human and transparent partner.',
      'My goal: to build efficient, beautiful, maintainable — and above all useful — solutions. Whether you are a startup, an SME or an individual, I’ll adapt to your needs with clarity and rigor.',
    ],
    cta: 'Contact me',
  },
  testimonials: {
    badge: 'Testimonials',
    title: 'What our clients say',
    description: 'Results, but above all successful human relationships',
    items: [
      {
        description: `We collaborated with Charles on onboard-me and the experience was very pleasant from start to finish. His technical expertise, the clarity of his process and his responsiveness make it possible to move forward with peace of mind, with relevant advice at every step. Simple and efficient, he removes a real mental load throughout the project.`,
        name: 'Vincent',
        company: 'Onboard-me',
        job: 'Motion Designer',
      },
      {
        description: `Excellent work from Charles.
On top of high-quality work, Charles has a fine understanding of projects and an easy communication style that makes for a collaboration that meets our expectations.
I recommend him without hesitation!`,
        name: 'Ludovic',
        company: 'Figue.io',
        job: 'Project Manager',
      },
      {
        description: `We had the pleasure of collaborating with Charles on a development project involving a varied technical stack. Proactive, available and efficient, he was able to adapt to the team’s needs and actively contribute to the project’s progress. His seriousness and his ability to integrate were appreciated.`,
        name: 'Benjamin',
        company: 'Mentorshow',
        job: 'COO',
      },
      {
        description: `Impeccable professionalism!
Attentive throughout our project.
Educational in explaining the options.
A real success in our collaboration.
Thank you!`,
        name: 'Jules',
        company: 'Air Rental',
        job: 'Director',
      },
      {
        description: `His technical mastery is impressive, and he also excels at managing hosting, providing high-quality support.
Professional and competent, he is highly recommended for any development project, offering a complete and reliable solution.`,
        name: 'Killian',
        company: 'Teasquare',
        job: 'Founder',
      },
    ],
  },
  stats: {
    badge: 'A few numbers',
    title: 'Concrete proof of our effectiveness',
    items: [
      { statText: '+10', text: 'Projects successfully developed' },
      { statText: '100%', text: 'Satisfied clients ready to recommend us' },
      { statText: '6 to 8', text: 'Average weeks of lead time for a project' },
    ],
  },
  faq: {
    badge: 'FAQ',
    title: 'Frequently asked questions',
    description: 'Still wondering if Infinite Lab is right for you?',
    items: [
      {
        title: 'What information do I need to provide to get a quote?',
        description:
          'A description of your project, your goals, your timeline and, if possible, an indicative budget. Don’t worry if everything isn’t clear: we’ll help you frame your needs.',
      },
      {
        title: 'How long does a project take?',
        description:
          'It depends on the complexity of the project. A simple showcase site can be delivered in a few weeks, while a more technical project will take several months.',
      },
      {
        title: 'Can I request changes during the project?',
        description:
          'Yes, we always plan for a certain amount of flexibility. Depending on progress, some changes can be integrated without impact, others will require an adjustment to the schedule or the quote.',
      },
      {
        title: 'Can I get a refund if I cancel the project?',
        description:
          'Cancellation is possible at any time. Depending on progress, a partial refund may be considered, corresponding to the stages not yet completed.',
      },
      {
        title: 'And after going live?',
        description:
          'We stay by your side. Maintenance, improvements, technical support or hosting: you can count on us to ensure the continuity and performance of your site over time.',
      },
    ],
  },
  contact: {
    badge: 'Get in touch',
    title: 'Let’s talk about your project',
    description:
      'Tell us about your needs — we’ll get back to you within 24h, no commitment.',
  },
  footer: {
    copyright: '© 2025 Infinite Lab. All rights reserved.',
    privacy: 'Privacy policy',
    legal: 'Legal notice',
  },
}
