import { VERIFIED_STATUS, USER_STATUS } from '@/modules/user/user.enum';

export interface UserTableDto {
  id: number;
  cardNo: string;
  createdDate: Date;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  status: USER_STATUS;
  updatedDate: Date;
  verifiedStatus: VERIFIED_STATUS;
  emailVerified?: boolean;
}

export interface UserListDto {
  skip?: number;
  take?: number;
  orderBy?: string;
  orderDirection?: 'ASC' | 'DESC';
  searchBy?: string;
  searchKeyword?: string;
}

export interface UserActionsDto {
  label: string;
  status: string;
  action: any;
}

export interface UserRequestDto {
  email?: string;
  password?: string;
  phoneNumber?: string;
}

export interface UserDto {
  firstName?: string;
  id?: number;
  email: string;
  phoneNumber: string;
  cardNo?: string;
  accountRole?: any;
  cardFront?: any;
  cardBack?: any;
}

export interface UpdateUserRequestDto {
  phoneNumber?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}
// ------------------------
// Admin
// ------------------------

export interface UserUpdateFormDto {
  phoneNumber?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  userStatus?: USER_STATUS;
  verifiedStatus?: VERIFIED_STATUS;
}

//
// User
//
export interface AdminUserRequestDto {
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}
