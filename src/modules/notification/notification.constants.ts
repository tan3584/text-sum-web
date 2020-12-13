import { NewNotificationDto } from '@/modules/notification/notification.store';

export const newNotificationFormInit: NewNotificationDto = {
  title: '',
  body: '',
  sendToCustomer: false,
  sendToTruckOwner: false,
};

export const notificationType = [
  {
    key: '',
    label: '',
  },
];

export const getNotificationType = (t: any, key: any) => {
  return t(notificationType.find((item) => item.key === key)?.label);
};
