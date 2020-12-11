import http from '@/libs/services';
import { removeConfirmationFields } from '@/libs/utils/apis.util';
import {
  CreateUserDto,
  ResetPasswordDto,
  UpdateAccountDto,
  SetPasswordDto,
} from '@/modules/account/account.dto';

class AccountService {
  private _getPrefix = () => {
    return 'api/user';
  };

  accountPrefix: string = this._getPrefix();

  public async forgotPassword(email: string, lang: string) {
    const result = await http.get(
      `${this.accountPrefix}/forgot-password/${lang}?email=${email}`
    );
    return result.data?.result;
  }

  public async changePassword(id: number, model: ResetPasswordDto) {
    const result = await http.post(
      `${this.accountPrefix}/${id}/change-password`,
      model
    );
    return result.data?.result;
  }

  public async resetPassword(model: ResetPasswordDto) {
    const result = await http.post(
      `${this.accountPrefix}/reset-password`,
      model
    );
    return result.data?.result;
  }

  public async setPassword(model: SetPasswordDto) {
    const result = await http.post(`${this.accountPrefix}/set-password`, model);
    return result.data?.result;
  }

  public async register(model: CreateUserDto, lang: string) {
    const excludedModel = removeConfirmationFields(model);
    const result = await http.post(
      `${this.accountPrefix}/${lang}`,
      excludedModel
    );
    return result.data?.result;
  }

  public async updateAccount(id: number, model: UpdateAccountDto) {
    const excludedModel = removeConfirmationFields(model);
    const result = await http.put(`${this.accountPrefix}/${id}`, excludedModel);
    return result.data?.result;
  }

  public async changeLanguage(id: number, token: string, language: string) {
    const result = await http.put(`api/user/lang/${language}`, {
      token,
    });
    return result.data?.result;
  }
}

export default new AccountService();
