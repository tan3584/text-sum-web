import { I18N } from '@/modules/lang/i18n.enum';

export enum THANKYOU_ACTION {
  REGISTER = 'register',
  RESET_PASSWORD = 'resetpassword',
}

export enum ACCOUNT_TYPE {
  COMPANY = I18N.CUSTOMER_TYPE_COMPANY,
  INDIVIDUAL = I18N.CUSTOMER_TYPE_INDIVIDUAL,
}

export enum VERIFIED_STATUS {
  UNVERIFIED,
  PENDING,
  VERIFIED,
}

export enum USER_STATUS {
  ACTIVE, // active
  INACTIVE, // suspended by admin
}
