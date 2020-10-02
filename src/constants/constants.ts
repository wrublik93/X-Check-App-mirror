import { HeaderDataProps } from '@/types/props';

export const routeNamesMap = {
  '/': 'Registration',
  '/home': 'Home',
  '/tasks': 'Tasks',
  '/reviewRequests': 'Review Requests',
  '/reviews': 'Reviews',
  '/aboutUs': 'About Us',
  '/404': '404: Page not found',
};

export const headerLinks: HeaderDataProps[] = [
  { name: 'Home', link: '/home' },
  { name: 'Tasks', link: '/tasks' },
  { name: 'Review Requests', link: '/reviewRequests' },
  { name: 'Reviews', link: '/reviews' },
  { name: 'About Us', link: '/aboutUs' },
];
