import { ServiceItem, PortfolioItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'odnawianie-pomnikow',
    iconName: 'Sparkles',
    title: 'Odnawianie pomników',
    description: 'Przywracamy dawny blask nagrobkom i monumentom dzięki specjalistycznym metodom renowacji.'
  },
  {
    id: 'czyszczenie',
    iconName: 'Trash2',
    title: 'Czyszczenie',
    description: 'Profesjonalne czyszczenie kamienia — granit, marmur, lastryko naturalne. Usuwamy mech i wieloletnie osady.'
  },
  {
    id: 'podnoszenie',
    iconName: 'ArrowUp',
    title: 'Podnoszenie i poziomowanie',
    description: 'Prostowanie i stabilizowanie przewróconych, zapadniętych lub osiadłych pomników wraz z nowym zbrojeniem.'
  },
  {
    id: 'liternictwo',
    iconName: 'Type',
    title: 'Liternictwo nagrobkowe',
    description: 'Precyzyjne grawerowanie, odnawianie, złocenie i kucie liter, cyfr oraz wzorów bezpośrednio w kamieniu.'
  },
  {
    id: 'lawki',
    iconName: 'Armchair',
    title: 'Ławki przycmentarne',
    description: 'Wykonanie, montaż i konserwacja solidnych ławek drewnianych lub kompozytowych na solidnej osnowie.'
  },
  {
    id: 'kostka-brukowa',
    iconName: 'Grid3X3',
    title: 'Kostka brukowa i wylewki',
    description: 'Układanie ozdobnej kostki brukowej, pasów opaskowych oraz wykonywanie zbrojonych wylewek betonowych wokół nagrobka.'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'pomnik-z-granitu-klasyczny',
    title: 'Pomnik z granitu',
    description: 'Wykonanie nowego pomnika z najwyższej próby granitu — trwały szlachetny materiał, staranne, głębokie wykończenie krawędzi.',
    badge: 'GRANIT',
    images: ['https://i.ibb.co/NnKLk7N3/689007884-122111210402949434-5048573928856134264-n.jpg']
  },
  {
    id: 'demontaz-lastryko-wymiana',
    title: 'Demontaż lastryko i wymiana',
    description: 'Kompleksowa realizacja obejmująca demontaż starego, zniszczonego nagrobka z lastryko, wylanie fundamentu i precyzyjny montaż nowego grobowca granitowego wraz z elegancką opaską z trwałej kostki brukowej.',
    badge: 'RENOWACJA',
    images: [
      'https://i.ibb.co/8LHB4JzX/672671812-122108336654949434-7119187462715656027-n.jpg',
      'https://i.ibb.co/LXh0pKYN/673792160-122108336600949434-5649099455662190426-n.jpg'
    ]
  },
  {
    id: 'pomnik-z-granitu-okladzina',
    title: 'Pomnik z granitu z okładziną',
    description: 'Nowy pomnik granitowy z estetyczną okładziną z kostki brukowej — całościowe, harmonijne wykończenie miejsca spoczynku.',
    badge: 'GRANIT + KOSTKA',
    images: ['https://i.ibb.co/20ZCPNQF/670474094-122107054928949434-6956933812932279426-n.jpg']
  }
];

export const CONTACT_INFO = {
  address: 'Zawiercie, Polska',
  phone1: '604 113 296',
  phone1Raw: '604113296',
  phone2: '604 113 425',
  phone2Raw: '604113425',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61578483022795'
};
