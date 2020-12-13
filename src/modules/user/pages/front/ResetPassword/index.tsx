import React from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';
import { useHistory, useParams } from 'react-router-dom';
import { AccountStoreContext } from '@/modules/account/account.store';
import OnePage from '@/modules/theme/components/OnePage';
import { ResetPasswordDto } from '@/modules/account/account.dto';
import { USER_ROUTERS } from '@/modules/router.enum';
import { AuthenticationStoreContext } from '@/modules/authentication.store';
import UserResetForm from '@/modules/user/components/ResetForm';
const ResetPasswordCustomerPage = () => {
  const history = useHistory();
  const { token } = useParams() as any;
  const accountStore = React.useContext(AccountStoreContext);
  const authStore = React.useContext(AuthenticationStoreContext);

  /*
   * Translation
   */
  const { t } = useTranslation();
  // const {} = I18N;

  /*
   * Action of confirm button
   * @params: void
   * @return: void
   */
  const handleConfirm = async (values: any) => {
    const resetPasswordFormValue: ResetPasswordDto = {
      password: values.password,
      token,
    };
    await authStore.clearTmpUser();
    const result = await accountStore.resetPassword(resetPasswordFormValue);

    if (result) {
      history.push(USER_ROUTERS.LOGIN);
    }
  };

  const callbackValidate = React.useCallback(async () => {
    return await authStore.validateResetToken(token, history);
  }, [authStore, history, token]);

  React.useEffect(() => {
    callbackValidate();
  }, [callbackValidate]);

  return (
    <>
      <OnePage title={t('')}>
        <UserResetForm
          handleConfirm={handleConfirm}
          userEmail={authStore.tmpUser?.email}
        />
      </OnePage>
    </>
  );
};

export default observer(ResetPasswordCustomerPage);
