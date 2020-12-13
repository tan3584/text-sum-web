import React from 'react';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';
import { CreateUserDto } from '@/modules/account.dto';
import { AccountStoreContext } from '@/modules/account/account.store';
import { LanguageStoreContext } from '@/modules/lang/lang.store';
import OnePage from '@/modules/theme/components/OnePage';
import { THANKYOU_ACTION } from '@/modules/user/user.enum';
import { useHistory } from 'react-router-dom';
import UserRegisterForm from '@/modules/user/components/RegisterForm';
import { USER_ACTION_ROUTERS } from '@/modules/router.enum';

const CreateUserPage = () => {
  const accountStore = React.useContext(AccountStoreContext);
  const history = useHistory();
  const languageStore = React.useContext(LanguageStoreContext);

  /*
   * Translation
   */
  const { t } = useTranslation();
  const { ONEPAGE_CUSTOMER_TITLE } = I18N;

  /*
   * Setting required fields of register form
   * @params: void
   * @return: json
   */
  const requiredFields = {
    email: true,
    password: true,
    confirmPassword: true,
    phone: false,
  };

  /*
   * Action of Sign up button
   * @params: void
   * @return: void
   */
  const handleSignUp = async (values: any) => {
    const createUserData: CreateUserDto = {
      email: values.email.trim(),
      password: values.password,
      phoneNumber: values.phone,
    };

    accountStore.setCreateUserForm(createUserData);
    const result = await accountStore.register(languageStore.activeLanguage);
    if (result) {
      accountStore.resetCreateUserForm();
      history.push(USER_ACTION_ROUTERS.THANKYOU + THANKYOU_ACTION.REGISTER);
    }
  };

  return (
    <>
      <OnePage title={t('')}>
        <UserRegisterForm
          handleRegister={handleSignUp}
          required={requiredFields}
        />
      </OnePage>
    </>
  );
};

export default observer(CreateUserPage);
