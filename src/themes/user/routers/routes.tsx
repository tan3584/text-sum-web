import { userRoutes } from '@/modules/user/routes/front';
import React from 'react';

export const userDefaultRoutes = [
  {
    path: '/',
    name: 'home',
    title: 'Home page',
    exact: true,
    permission: '',
    component: React.lazy(() => import('@/themes/user/page/Home')),
    isLayout: false,
    isGuarded: true,
  },
  ...userRoutes,
];
