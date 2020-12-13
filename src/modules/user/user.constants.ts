import { VERIFIED_STATUS, USER_STATUS } from '@/modules/user/user.enum';
import { I18N } from '@/modules/lang/i18n.enum';
import {
  UserRequestDto,
  UpdateUserRequestDto,
  UserUpdateFormDto,
} from './user.dto';

export const VerifiedStatus = [
  {
    key: VERIFIED_STATUS.UNVERIFIED,
    label: I18N.STATUS_UNVERIFIED,
  },
  {
    key: VERIFIED_STATUS.PENDING,
    label: I18N.STATUS_PENDING,
  },
  {
    key: VERIFIED_STATUS.VERIFIED,
    label: I18N.STATUS_VERIFIED,
  },
];

export const EmailVerifiedStatus = [
  {
    key: true,
    label: I18N.STATUS_VERIFIED,
  },
  {
    key: false,
    label: I18N.STATUS_UNVERIFIED,
  },
];

export const getVerifiedStatus = (t: any, key: any) => {
  return t(VerifiedStatus.find((item) => item.key === key)?.label);
};

export const getEmailVerifiedStatus = (t: any, key: any) => {
  return t(EmailVerifiedStatus.find((item) => item.key === key)?.label);
};

export const getKeyVerifiedStatus = (label: string) => {
  return VerifiedStatus.find((item) => item.label === label)?.key;
};

export const UserStatus = [
  {
    key: USER_STATUS.ACTIVE,
    label: I18N.USER_STATUS_ACTIVE,
  },
  {
    key: USER_STATUS.INACTIVE,
    label: I18N.USER_STATUS_INACTIVE,
  },
];

export const getUserStatus = (t: any, key: any) => {
  return t(UserStatus.find((item) => item.key === key)?.label);
};

export const getKeyUserStatus = (label: string) => {
  return UserStatus.find((item) => item.label === label)?.key;
};

// export const AccountRole = [
//   {
//     key: ACCOUNT_ROLE.OWNER,
//     label: I18N.CUSTOMER_ROLE_OWNER,
//   },
//   {
//     key: ACCOUNT_ROLE.ADMIN,
//     label: I18N.CUSTOMER_ROLE_ADMIN,
//   },
//   {
//     key: ACCOUNT_ROLE.EXECUTIVE,
//     label: I18N.CUSTOMER_ROLE_EXECUTIVE,
//   },
// ];

// export const getAccountRole = (t: any, key: any) => {
//   return key
//     ? t(AccountRole.find((item) => item.key === key)?.label)
//     : t(I18N.CUSTOMER_ROLE_OWNER);
// };

// export const getKeyAccountRole = (label: string) => {
//   return AccountRole.find((item) => item.label === label)?.key;
// };

// export const AccountType = [
//   {
//     key: ACCOUNT_TYPE.COMPANY,
//     label: I18N.CUSTOMER_TYPE_COMPANY,
//   },
//   {
//     key: ACCOUNT_TYPE.INDIVIDUAL,
//     label: I18N.CUSTOMER_TYPE_INDIVIDUAL,
//   },
// ];

// export const getAccountType = (t: any, key: any) => {
//   return t(AccountType.find((item) => item.key === key)?.label);
// };

export const userRequestInit: UserRequestDto = {
  email: '',
  password: '',
  phoneNumber: '',
};

export const newUserInit: UpdateUserRequestDto = {
  // phone: '',
  // email: '',
  // firstName: '',
  // lastName: '',
  // password: '',
  // cardNo: '',
};

// Admin

export const userUpdateFormInit: UserUpdateFormDto = {
  phoneNumber: '',
  email: '',
  firstName: '',
  lastName: '',
  userStatus: USER_STATUS.INACTIVE,
  verifiedStatus: VERIFIED_STATUS.UNVERIFIED,
};

export const userDto = {
  accountRole: '',
  cardNo: '',
  createdDate: '',
  deletedAt: '',
  email: '',
  firstName: '',
  id: '',
  phoneNumber: '',
  verifiedStatus: 0,
};
