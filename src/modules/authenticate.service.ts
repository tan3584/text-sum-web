import http from '@/libs/services';
import { LoginDto } from './account.dto';

class AuthenticateService {
  private _getPrefix = () => {
    return 'api/user';
  };

  accountPrefix: string = this._getPrefix();

  public async login(model: LoginDto) {
    const result = await http.post(`${this.accountPrefix}/login`, model);
    return result.data?.result;
  }

  public async validateToken(token: string) {
    const result = await http.post(`${this.accountPrefix}/check-token`, {
      token,
    });
    return result.data?.result;
  }

  public async validateResetToken(token: string) {
    const result = await http.post(`${this.accountPrefix}/check-reset-token`, {
      token,
    });
    return result.data?.result;
  }

  // public async registerToken(token: string) {
  //   const result = await http.post(
  //     `${NOTIFICATION_API.PREFIX}/${NOTIFICATION_API.REGISTER}`,
  //     {
  //       token,
  //       platform: 'web',
  //     }
  //   );
  //   return result.data?.result;
  // }

  public async validateEmailToken(token: string) {
    const commonUserPrefix = 'api/user';
    const result = await http.get(`${commonUserPrefix}/verify-email/${token}`);
    return result.data?.result;
  }
}

export default new AuthenticateService();
