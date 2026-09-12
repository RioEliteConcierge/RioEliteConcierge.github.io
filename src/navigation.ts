import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Pacchetti',
      href: getPermalink('/pacchetti'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [],
};

export const footerData = {
  // Colonne principali del footer
  links: [
    {
      title: 'Navigazione',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Pacchetti', href: getPermalink('/pacchetti') },
        { text: 'About', href: getPermalink('/about') },
      ],
    },
    {
      title: 'Legale',
      links: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
    },
  ],

  secondaryLinks: [],

  // Link social
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://instagram.com/rioeliteconcierge/',
    },
  ],

  // riga in basso (copyright, P.IVA, ecc.)
  footNote: `
    © ${new Date().getFullYear()} Rio Elite Concierge · Tutti i diritti riservati.<br>
    Made with ❤️ by Davi.Trap
  `,
};
