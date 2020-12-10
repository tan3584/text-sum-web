import React from 'react';
import { observer } from 'mobx-react';
// import { useTranslation } from 'react-i18next';
// import { I18N } from '@/modules/lang/i18n.enum';
import { useHistory } from 'react-router-dom';
// import { CustomerStoreContext } from '@/modules/customer/customer.stote';
// import { LoginDto } from '@/modules/account/account.dto';
import OnePage from '@/modules/theme/components/OnePage';
import UserLoginForm from '@/modules/user/components/LoginForm/index';
import { LoginDto } from '@/modules/account.dto';
import { AuthenticationStoreContext } from '@/modules/authentication.store';
import { USER_ROUTERS } from '@/modules/router.enum';

const LoginCustomerPage = () => {
  const history = useHistory();
  const authenticationStore = React.useContext(AuthenticationStoreContext);
  // const customerStore = React.useContext(CustomerStoreContext);

  /*
   * Translation
   */
  // const { t } = useTranslation();
  // const { ONEPAGE_CUSTOMER_TITLE } = I18N;

  /*
   * Action of login button
   * @params: void
   * @return: void
   */
  const handleLogin = (values: any) => {
    const loginFormValue: LoginDto = {
      email: values.email,
      password: values.password,
    };
    authenticationStore.setLoginFormValue(loginFormValue);
    authenticationStore.login(history, USER_ROUTERS.SETUP);
  };

  /*
   * Action of forgot password link
   * @params: void
   * @return: void
   */
  const handleForgotPassword = () => {
    history.push(USER_ROUTERS.FORGOT_PASSWORD);
  };

  // const [userEmail, setUserEmail] = React.useState('');

  /*
   * Action of Sign up button
   * @params: void
   * @return: void
   */
  const handleSignUp = () => {
    history.push(USER_ROUTERS.CREATE);
  };

  // const [initialValues, setInitValues] = React.useState<any>({
  //   email: authenticationStore?.tmpUser?.email ?? '',
  //   password: '',
  // });

  // React.useEffect(() => {
  //   if (authenticationStore.tmpUser) {
  //     setUserEmail(authenticationStore.tmpUser.email);
  //     setInitValues({
  //       email: authenticationStore?.tmpUser?.email ?? '',
  //       password: '',
  //     });
  //     authenticationStore.clearTmpUser();
  //   }
  // }, [authenticationStore, authenticationStore.tmpUser]);

  return (
    <>
      <OnePage title={''}>
        <UserLoginForm
          handleLogin={handleLogin}
          handleForgotPassword={handleForgotPassword}
          handleSignUp={handleSignUp}
        />
      </OnePage>
    </>
  );
};

export default observer(LoginCustomerPage);
