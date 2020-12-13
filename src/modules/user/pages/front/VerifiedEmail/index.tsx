import React from 'react';
import { observer } from 'mobx-react';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';
import { AuthenticationStoreContext } from '@/modules/authentication.store';
import OnePage from '@/modules/theme/components/OnePage';
import { USER_ROUTERS } from '@/modules/router.enum';
import UserThankYouContent from '@/modules/user/components/ThankYouContent';

const VerifiedEmailPage = () => {
  const authStore = React.useContext(AuthenticationStoreContext);
  const history = useHistory();

  /*
   * Getting parameter from the route
   */
  const { token } = useParams() as any;

  /*
   * Translation
   */
  const { t } = useTranslation();
  const {
    ACCOUNT_VERIFIED_TITLE,
    ACCOUNT_VERIFIED_MESSAGE,
    ACCOUNT_VERIFIED_MOREINFO,
    BUTTONS_LOGIN,
  } = I18N;

  React.useEffect(() => {
    authStore.validateEmailToken(token);
    const timeout = setTimeout(() => {
      history.push(USER_ROUTERS.LOGIN);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [authStore, history, token]);

  return (
    <>
      <OnePage className="thank-you-page" title={t('')}>
        <UserThankYouContent
          title={t(ACCOUNT_VERIFIED_TITLE)}
          subTitle={t(ACCOUNT_VERIFIED_MESSAGE)}
          iconSuccess={''}
          btnText={t(BUTTONS_LOGIN)}
          handleBtn={() => history.push(USER_ROUTERS.LOGIN)}
        >
          {t(ACCOUNT_VERIFIED_MOREINFO)}
        </UserThankYouContent>
      </OnePage>
    </>
  );
};

export default observer(VerifiedEmailPage);
