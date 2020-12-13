import React from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';
import { useHistory } from 'react-router-dom';
import { AccountStoreContext } from '@/modules/account/account.store';
import { LanguageStoreContext } from '@/modules/lang/lang.store';
import OnePage from '@/modules/theme/components/OnePage';
import { THANKYOU_ACTION } from '@/modules/user/user.enum';
import UserForgotForm from '@/modules/user/components/ForgotForm';
import { USER_ACTION_ROUTERS } from '@/modules/router.enum';
const ForgotCustomerPage = () => {
  const history = useHistory();
  const accountStore = React.useContext(AccountStoreContext);
  const languageStore = React.useContext(LanguageStoreContext);

  /*
   * Translation
   */
  const { t } = useTranslation();
  const { ACCOUNT_FORGOT_TITLE, CUSTOMER_FORGOT_MESSAGE } = I18N;

  /*
   * Action of forgot password button
   * @params: void
   * @return: void
   */
  const handleForgotPassword = async (values: any) => {
    const result = await accountStore.forgotPassword(
      values.email,
      languageStore.activeLanguage
    );
    if (result) {
      history.push(
        USER_ACTION_ROUTERS.THANKYOU + THANKYOU_ACTION.RESET_PASSWORD
      );
    }
  };

  return (
    <>
      <OnePage title={t('')}>
        <UserForgotForm
          handleForgotPassword={handleForgotPassword}
          handleBack={false}
          formTitle={t(ACCOUNT_FORGOT_TITLE)}
        >
          {CUSTOMER_FORGOT_MESSAGE && <p>{t(CUSTOMER_FORGOT_MESSAGE)}</p>}
        </UserForgotForm>
      </OnePage>
    </>
  );
};

export default observer(ForgotCustomerPage);
