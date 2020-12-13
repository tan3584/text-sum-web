import { MenuDto } from '@/modules/theme/theme.dto';
import { I18N } from '../lang/i18n.enum';
import { USER_ROUTERS } from '../router.enum';

export const menuUser: MenuDto[] = [
  {
    url: USER_ROUTERS.SETUP,
    label: I18N.MENU_ACCOUNT_SETUP,
    icon: 'ico ico-accounts',
  },
];
