import React from 'react';
import { observable, action } from 'mobx';
import { removeFromStorage, saveToStorage } from '@/libs/utils/storage.util';
import { LoginDto } from './account.dto';
import authenticateService from './authenticate.service';

export default class AuthenticationStore {
  @observable loggedUser: any = null;
  @observable tmpUser: any = null;
  @observable loginFormValue: LoginDto = {
    email: '',
    password: '',
  };

  @action
  async setLoginFormValue(data: LoginDto) {
    this.loginFormValue = data;
  }

  @action
  async setLoggedUser(data: any) {
    this.loggedUser = data;
  }

  @action
  async clearTmpUser() {
    this.tmpUser = null;
  }

  @action
  async login(history: any, url: string) {
    const data = await authenticateService.login(this.loginFormValue);
    if (data) {
      this._setCurrentInfo(data);
      this._redirectAfterLogin(history, url);
    }
  }

  @action
  async validateToken(token: string, history: any) {
    const data = await authenticateService.validateToken(token);
    if (data) {
      this._saveUser(data);
    }
  }

  @action
  async validateResetToken(token: string, history: any) {
    const data = await authenticateService.validateResetToken(token);
    if (data) {
      this.tmpUser = data;
    }
  }

  @action
  async logout(history: any, url: string) {
    removeFromStorage('token');
    this.loggedUser = null;
    history.push(url);
  }

  private _setCurrentInfo(data: any) {
    this.loggedUser = data;
    saveToStorage('token', data.token);
  }

  private _saveUser(data: any) {
    this.loggedUser = data;
  }

  private _redirectAfterLogin(history: any, url: string) {
    return history.push(url);
  }

  // @action
  // async registerToken(token: string) {
  //   const result = await authenticateService.registerToken(token);
  //   return result;
  // }

  @action
  async validateEmailToken(token: string) {
    const result = await authenticateService.validateEmailToken(token);
    if (result) {
      this.tmpUser = result;
    }
    return result;
  }
}

export const AuthenticationStoreContext = React.createContext(
  new AuthenticationStore()
);
