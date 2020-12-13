import { action, observable } from 'mobx';
import { createContext } from 'react';
import notificationService from './notification.service';
import { newNotificationFormInit } from '@/modules/notification/notification.constants';

export interface NotificationDto {
  title: string;
  body: string;
  titleEN?: string;
  bodyEN?: string;
  source: string;
}

export interface NotificationInstanceDto {
  id: number;
  createdDate: string;
  notification: NotificationDto;
  isRead: boolean;
}

export interface NotificationTableDto {
  id: number;
  createdDate: string;
  title: string;
  body: string;
  titleEN?: string;
  bodyEN?: string;
  source: string;
  sendToCustomer: boolean;
  sendToTruck: boolean;
}

export interface NewNotificationDto {
  title: string;
  body: string;
  sendToCustomer: boolean;
  sendToTruckOwner: boolean;
}

export interface NotificationListDto {
  skip?: number;
  take?: number;
  orderBy?: string;
  orderDirection?: 'ASC' | 'DESC';
}

export default class NotificationStore {
  @observable notificationForm: NewNotificationDto = newNotificationFormInit;
  @observable notificationsTableList: NotificationTableDto[] = [];
  @observable totalCount: number = 0;

  @observable
  unreadCount: number = 0;

  @observable
  notifications: NotificationInstanceDto[] = [];

  @observable
  currentTake: number = 5;

  @observable
  total: number = 0;

  @action
  async getNotiList() {
    const result = await notificationService.getList({
      skip: 0,
      take: this.currentTake,
    });
    this.notifications = result[0];
    this.total = result[1];
    this.unreadCount = result[2];
  }

  @action
  async setRead(id: number) {
    await notificationService.setRead(id);
    this.getNotiList();
  }

  @action
  async setNotificationForm(data: any) {
    this.notificationForm.title = data.title;
    this.notificationForm.body = data.body;
    this.notificationForm.sendToCustomer = data.sendToCustomer;
    this.notificationForm.sendToTruckOwner = data.sendToTruckOwner;
  }

  @action
  async resetMotificationForm() {
    this.notificationForm = newNotificationFormInit;
  }

  @action
  async addNotification() {
    const data = await notificationService.addNotification(
      this.notificationForm
    );
    return data;
  }

  // getNotifications()
  // Get notification for grid
  // Notice: this isn't a function for button notification on top bar

  @action
  async getNotifications(criteria: NotificationListDto) {
    const result = await notificationService.getNotifications(criteria);
    if (result) {
      this.notificationsTableList = result.data?.result[0];
      this.totalCount = result.data?.result[1];
    }
  }

  getNotiSchedule() {
    this.getNotiList();
    setInterval(() => this.getNotiList(), 60000);
  }
}

export const NotificationStoreContext = createContext(new NotificationStore());
