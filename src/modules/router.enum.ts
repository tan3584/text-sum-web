export enum USER_ROUTERS {
  LOGIN = '/account/login',
  FORGOT_PASSWORD = '/account/forgotpassword',
  RESET_PASSWORD_TOKEN = '/account/reset-password/:token',
  VERIFY_EMAIL = '/account/verify-email/:token',
  SET_PASSWORD_TOKEN = '/account/set-password/:token',
  CREATE = '/account/register',
  SETUP = '/account/setup',
  THANKYOU = '/account/thankyou/:action',
  ADMIN_MANAGE = '/admin/user',
  ADMIN_CREATE = '/admin/user/register',
  ADMIN_EDIT = '/admin/user/:userId',
  ADMIN_MANAGE_DELETED = '/admin/user/deleted',
  CREATE_ARTICLE = '/new-article',
}

export enum USER_ACTION_ROUTERS {
  THANKYOU = '/account/thankyou/',
}

export enum API {
  USER = 'api/user',
  TOPIC = 'api/topic',
}
