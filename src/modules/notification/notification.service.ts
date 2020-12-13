import http from '@/libs/services';
import { prepareGetQuery } from '@/libs/utils/routes.util';
import {
  NewNotificationDto,
  NotificationListDto,
} from '@/modules/notification/notification.store';

class NotificationService {
  prefix = 'api/notification';
  public async getList(filter: Record<string, any>) {
    const result = await http.get(
      `${this.prefix}${prepareGetQuery({ ...filter })}`
    );
    return result?.data?.result;
  }

  public async getNotifications(criteria: NotificationListDto) {
    return await http.get(
      `${this.prefix}/all${prepareGetQuery({ ...criteria })}`
    );
  }

  public async setRead(id: number) {
    const result = await http.put(`${this.prefix}/read/${id}`);
    return result.data.result;
  }

  public async addNotification(model: NewNotificationDto) {
    const result = await http.post(`${this.prefix}`, model);
    return result.data?.result;
  }
}

export default new NotificationService();
