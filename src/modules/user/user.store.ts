import React from 'react';
import { observable, action } from 'mobx';
import { USER_STATUS, VERIFIED_STATUS } from './user.enum';
import {
  UserRequestDto,
  UpdateUserRequestDto,
  UserUpdateFormDto,
} from './user.dto';
import {
  userRequestInit,
  newUserInit,
  userUpdateFormInit,
} from './user.constants';
import userService from './user.service';

export default class UserStore {
  @observable userRequestDto: UserRequestDto = userRequestInit;

  // Account Setup
  @observable accountForm: UpdateUserRequestDto = newUserInit;
  @observable currentUserDetail: any = null;

  // Admin - Listing
  @observable users: any[] = [];
  @observable totalCount: number = 0;

  @observable deletedUsers: any[] = [];
  @observable totalDeletedCount: number = 0;

  // Admin - Edit Account
  // @observable accountForm: UpdateUserRequestDto = newUserInit;
  @observable userAdmin: any = null;
  @observable
  userUpdateForm: UserUpdateFormDto = userUpdateFormInit;

  // Admin - Create User
  // @observable
  // adminUserForm: AdminUserRequestDto = adminUserFormInit;
  @action
  async setUserRequestDto(data: UserRequestDto) {
    this.userRequestDto = data;
  }

  @action
  async setUserUpdateForm(data: any) {
    // this.userUpdateForm = data;
    this.userUpdateForm.phoneNumber = data.phoneNumber ?? '';
    this.userUpdateForm.email = data.email ?? '';
    this.userUpdateForm.firstName = data.firstName ?? '';
    this.userUpdateForm.lastName = data.lastName ?? '';
    this.userUpdateForm.userStatus = +data.userStatus ?? USER_STATUS.ACTIVE;
    this.userUpdateForm.verifiedStatus =
      +data.verifiedStatus ?? VERIFIED_STATUS.UNVERIFIED;
  }

  // ----------------------------
  // Account Setup
  // ----------------------------
  @action
  async setAccountForm(data: any) {
    this.accountForm.phoneNumber = data.phoneNumber;
    this.accountForm.firstName = data.firstName;
  }

  @action
  async getAccountInfo() {
    const data = await userService.getAccountInfo();
    this.currentUserDetail = data;
    return data;
  }

  @action
  async updateAccount(id: number) {
    const data = await userService.updateAccount(this.accountForm, id);
    return data;
  }

  @action
  async uploadAvatar(formData: any, id: number) {
    const data = await userService.uploadAvatar(formData, id);
    return data;
  }

  @action
  async deleteAccountFile(id: number, type: number) {
    const data = await userService.deleteFiles(id, type);
    return data;
  }

  // ----------------------------
  // Admin
  // ----------------------------

  //
  // User
  //
  // @action
  // async setAdminUserForm(data: any) {
  //   this.adminUserForm.firstName = data.firstName ?? '';
  //   this.adminUserForm.lastName = data.lastName ?? '';
  //   this.adminUserForm.email = data.email ?? '';
  //   this.adminUserForm.phoneNumber = data.phoneNumber;
  //   this.adminUserForm.accountRole = +data.accountRole;
  // }

  // @action
  // async resetAdminUserForm() {
  //   this.adminUserForm = adminUserFormInit;
  // }

  // public async addUserByAdmin() {
  //   const data = await userService.addUserByAdmin(this.adminUserForm);
  //   return data;
  // }

  // @action
  // async deleteUserByIdByAdmin(id: number) {
  //   const data = await userService.deleteUserByAdmin(id);
  //   return data;
  // }

  // @action
  // async verifyUserByAdmin(id: number) {
  //   const data = await userService.verifyUserByAdmin(id);
  //   return data;
  // }

  // @action
  // async getUserByAdmin(filter: UserListDto) {
  //   const data = await userService.getUserByAdmin(filter);
  //   const [users, count] = data;
  //   this.users = users;
  //   this.totalCount = count;
  //   return data;
  // }

  // @action
  // async getDeletedUserByAdmin(filter: UserListDto) {
  //   const data = await userService.getDeletedUserByAdmin(filter);
  //   const [users, count] = data;
  //   this.deletedUsers = users;
  //   this.totalDeletedCount = count[0].total;
  //   return data;
  // }

  // @action
  // async createUserByAdmin() {
  //   const data = await userService.createUserByAdmin(this.userRequestDto);
  //   return data;
  // }

  // @action
  // async getUserByIdByAdmin(id: number) {
  //   const data = await userService.getUserByIdByAdmin(id);
  //   this.userAdmin = null;
  //   this.userAdmin = data;
  //   return data;
  // }

  // @action
  // async updateUserByAdmin(id: number) {
  //   const data = await userService.updateUserByAdmin(this.userUpdateForm, id);
  //   return data;
  // }

  // @action
  // async restoreUserByIdByAdmin(id: number) {
  //   const data = await userService.restoreUserByIdByAdmin(id);
  //   return data;
  // }

  // @action
  // async uploadAvatarByAdmin(formData: any, id: number) {
  //   const data = await userService.uploadAvatarByAdmin(formData, id);
  //   return data;
  // }

  // @action
  // async deleteAccountFileByAdmin(id: number, type: number) {
  //   const data = await userService.deleteFilesByAdmin(id, type);
  //   return data;
  // }
}

export const UserStoreContext = React.createContext(new UserStore());
