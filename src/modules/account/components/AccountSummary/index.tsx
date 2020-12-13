import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';

import { normalizeName } from '@/libs/utils/normalize.ulti';
import tadaLogo from '@/modules/theme/assets/images/tada-logo.svg';
import { AuthenticationStoreContext } from '@/modules/authentication.store';
import { USER_ROUTERS } from '@/modules/router.enum';
import { UserStoreContext } from '@/modules/user/user.store';

/*
 * Props of Component
 */
interface ComponentProps {
  className?: string;
}

const AccountSummary = (props: ComponentProps) => {
  const authStore = React.useContext(AuthenticationStoreContext);
  const userStore = React.useContext(UserStoreContext);

  const history = useHistory();

  /*
   * Props of Component
   */
  const { className } = props;

  /*
   * Translation
   */
  const { t } = useTranslation();
  const { TOPMENU_WELCOME } = I18N;

  return (
    <>
      <div className={`item box-info ${className ? className : ''}`}>
        <span
          onClick={() => {
            history.push(USER_ROUTERS.SETUP);
          }}
        >
          <>
            {normalizeName(
              authStore.loggedUser?.firstName ?? '',
              authStore.loggedUser?.lastName ?? '',
              t(TOPMENU_WELCOME)
            )}
          </>
        </span>
        <div
          className="info-avatar"
          onClick={() => {
            history.push(USER_ROUTERS.SETUP);
          }}
        >
          <img
            src={
              authStore.loggedUser?.avatarUrl
                ? authStore.loggedUser?.avatarUrl
                : tadaLogo
            }
            alt="Logo"
          />
        </div>
      </div>
    </>
  );
};

export default observer(AccountSummary);
