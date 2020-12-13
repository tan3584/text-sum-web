import React from 'react';
import { observer } from 'mobx-react';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';
import IconThankTadaTruck from '@/libs/assets/images/icon-thank-tadatruck.png';
import { USER_ROUTERS } from '@/modules/router.enum';
import UserThankYouContent from '@/modules/user/components/ThankYouContent';
import OnePage from '@/modules/theme/components/OnePage';

const ThankYouCustomerPage = () => {
  const history = useHistory();

  /*
   * Getting parameter from the route
   */
  const params: any = useParams();
  const { action } = params;

  /*
   * Translation
   */
  const { t } = useTranslation();
  const {
    ONEPAGE_CUSTOMER_TITLE,
    ACCOUNT_THANKYOU,
    ACCOUNT_THANKYOU_CREATED,
    ACCOUNT_THANKYOU_CREATEDNOTE,
    ACCOUNT_THANKYOU_RESETPW,
    ACCOUNT_THANKYOU_RESETPWNOTE,
    BUTTONS_LOGIN,
  } = I18N;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      history.push(USER_ROUTERS.LOGIN);
    }, 10000);
    return () => clearTimeout(timeout);
  }, [history]);

  return (
    <>
      <OnePage className="thank-you-page" title={t('')}>
        {action === 'register' && (
          <UserThankYouContent
            title={t(ACCOUNT_THANKYOU)}
            subTitle={t(ACCOUNT_THANKYOU_CREATED)}
            iconSuccess={IconThankTadaTruck}
            btnText={t(BUTTONS_LOGIN)}
            handleBtn={() => history.push(USER_ROUTERS.LOGIN)}
          >
            {t(ACCOUNT_THANKYOU_CREATEDNOTE)}
          </UserThankYouContent>
        )}
        {action === 'resetpassword' && (
          <UserThankYouContent
            title={t(ACCOUNT_THANKYOU)}
            subTitle={t(ACCOUNT_THANKYOU_RESETPW)}
            iconSuccess={IconThankTadaTruck}
            btnText={t(BUTTONS_LOGIN)}
            handleBtn={() => history.push(USER_ROUTERS.LOGIN)}
          >
            {t(ACCOUNT_THANKYOU_RESETPWNOTE)}
          </UserThankYouContent>
        )}
      </OnePage>
    </>
  );
};

export default observer(ThankYouCustomerPage);
