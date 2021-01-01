import React from 'react';
import { I18N } from '@/modules/lang/i18n.enum';
import { USER_ROUTERS } from '@/modules/router.enum';

export const userRoutes = [
  {
    path: USER_ROUTERS.LOGIN,
    name: 'user.login',
    title: I18N.ACCOUNT_LOGIN_TITLE,
    exact: true,
    permission: '',
    component: React.lazy(() => import('@/modules/user/pages/front/Login')),
    isLayout: false,
    isGuarded: false,
  },
  {
    path: USER_ROUTERS.FORGOT_PASSWORD,
    name: 'user.forgotpassword',
    title: I18N.ACCOUNT_FORGOT_TITLE,
    exact: true,
    permission: '',
    component: React.lazy(
      () => import('@/modules/user/pages/front/ForgotPassword')
    ),
    isLayout: false,
    isGuarded: false,
  },
  {
    path: USER_ROUTERS.RESET_PASSWORD_TOKEN,
    name: 'user.resetpassword',
    title: I18N.ACCOUNT_RESETPASSWORD_TITLE,
    exact: true,
    permission: '',
    component: React.lazy(
      () => import('@/modules/user/pages/front/ResetPassword')
    ),
    isLayout: false,
    isGuarded: false,
  },
  {
    path: USER_ROUTERS.SET_PASSWORD_TOKEN,
    name: 'user.setpassword',
    title: I18N.ACCOUNT_RESETPASSWORD_TITLE,
    exact: true,
    permission: '',
    component: React.lazy(
      () => import('@/modules/user/pages/front/ResetPassword')
    ),
    isLayout: false,
    isGuarded: false,
  },
  {
    path: USER_ROUTERS.CREATE,
    name: 'user.create',
    title: I18N.ACCOUNT_CREATE_TITLE,
    exact: true,
    permission: '',
    component: React.lazy(() => import('@/modules/user/pages/front/Create')),
    isLayout: false,
    isGuarded: false,
  },
  {
    path: USER_ROUTERS.SETUP,
    name: 'user.setup',
    title: I18N.CUSTOMER_ACCOUNT_SETUP,
    exact: true,
    permission: '',
    component: React.lazy(() => import('@/modules/user/pages/front/Setup')),
    isLayout: false,
    isGuarded: true,
  },
  {
    path: USER_ROUTERS.THANKYOU,
    name: 'user.thankyou',
    title: I18N.ACCOUNT_THANKYOU,
    exact: true,
    permission: '',
    component: React.lazy(() => import('@/modules/user/pages/front/ThankYou')),
    isLayout: false,
    isGuarded: false,
  },
  {
    path: USER_ROUTERS.VERIFY_EMAIL,
    name: 'user.verified-email',
    title: I18N.ACCOUNT_VERIFIED_PAGETITLE,
    exact: true,
    component: React.lazy(
      () => import('@/modules/user/pages/front/VerifiedEmail')
    ),
    isLayout: false,
    isGuarded: false,
  },
  {
    path: USER_ROUTERS.CREATE_ARTICLE,
    name: 'user.verified-email',
    title: 'New article',
    exact: true,
    component: React.lazy(() => import('@/modules/article/pages/create/index')),
    isLayout: false,
    isGuarded: true,
  },
  {
    path: USER_ROUTERS.NEW_ARTILE_LIST,
    name: 'newarticle',
    title: 'Articles',
    exact: true,
    component: React.lazy(
      () => import('@/modules/article/pages/newlist/index')
    ),
    isLayout: false,
    isGuarded: false,
  },
  {
    path: USER_ROUTERS.SEARCH_PAGE,
    name: 'search',
    title: 'Filtered Articles',
    exact: true,
    component: React.lazy(() => import('@/modules/article/pages/search/index')),
    isLayout: false,
    isGuarded: false,
  },
];
