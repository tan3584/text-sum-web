import http from '@/libs/services';
import { UpdateUserRequestDto } from '@/modules/user/user.dto';

class UserService {
  prefix: string = 'api/user';
  // adminPrefix: string = CUSTOMER_API.ADMIN_PREFIX;

  // TODO: sort order all functions of this file
  // ----------------------------
  // Account
  // ----------------------------

  public async getAccountInfo() {
    const result = await http.get(`${this.prefix}/info`);
    return result.data?.result;
  }

  public async updateAccount(model: UpdateUserRequestDto, id: number) {
    const result = await http.put(`${this.prefix}/${id}`, model);
    return result.data?.result;
  }

  public async uploadCardFront(data: any, id: number) {
    const form = new FormData();
    form.append('image', data);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const result = await http.post(
      `${this.prefix}/${id}/upload-card-front`,
      form,
      config
    );
    return result.data?.result;
  }

  public async uploadCardBack(data: any, id: number) {
    const form = new FormData();
    form.append('image', data);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const result = await http.post(
      `${this.prefix}/${id}/upload-card-back`,
      form,
      config
    );
    return result.data?.result;
  }

  public async uploadAvatar(data: any, id: number) {
    const form = new FormData();
    form.append('image', data);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const result = await http.post(
      `${this.prefix}/${id}/upload-profile-img`,
      form,
      config
    );
    return result.data?.result;
  }

  public async deleteFiles(id: number, type: number) {
    const result = await http.delete(`${this.prefix}/files/${id}/${type}`);
    return result.data?.result;
  }

  // ----------------------------
  // Admin
  // ----------------------------

  //
  // User
  //
  // public async addUserByAdmin(model: AdminUserRequestDto) {
  //   const result = await http.post(`${this.adminPrefix}`, model);
  //   return result.data?.result;
  // }

  // public async deleteUserByAdmin(id: number) {
  //   const result = await http.delete(`${this.adminPrefix}/${id}`);
  //   return result.data?.result;
  // }

  // public async verifyUserByAdmin(id: number) {
  //   const result = await http.put(
  //     `${this.adminPrefix}/${id}/email-verification`
  //   );
  //   return result.data?.result;
  // }

  // public async getUserByAdmin(criteria: UserListDto) {
  //   const result = await http.get(
  //     `${this.adminPrefix}${prepareGetQuery({ ...criteria })}`
  //   );
  //   return result.data?.result;
  // }

  // public async getDeletedUserByAdmin(criteria: UserListDto) {
  //   const result = await http.get(
  //     `${this.adminPrefix}/deleted${prepareGetQuery({ ...criteria })}`
  //   );
  //   return result.data?.result;
  // }

  // public async createUserByAdmin(model: UserRequestDto) {
  //   const result = await http.post(`${this.adminPrefix}`, model);
  //   return result.data?.result;
  // }

  // public async getUserByIdByAdmin(id: number) {
  //   const result = await http.get(`${this.adminPrefix}/${id}`);
  //   return result.data?.result;
  // }

  // public async updateUserByAdmin(model: UserUpdateFormDto, id: number) {
  //   const result = await http.put(`${this.adminPrefix}/${id}`, model);
  //   return result.data?.result;
  // }

  // public async restoreUserByIdByAdmin(id: number) {
  //   const result = await http.post(`${this.adminPrefix}/${id}/restore`);
  //   return result.data?.result;
  // }
}

export default new UserService();
