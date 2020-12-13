import React from 'react';
import { observer } from 'mobx-react';
// import { toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';
import { AuthenticationStoreContext } from '@/modules/authentication.store';
import { UserStoreContext } from '@/modules/user/user.store';
import WrapperTheme from '@/modules/theme/components/Wrapper';
import UserMyAccount from '@/modules/user/components/MyAccount';

const SetupUserPage = () => {
  const authStore = React.useContext(AuthenticationStoreContext);
  const userStore = React.useContext(UserStoreContext);

  /*
   * Translation
   */
  const { t } = useTranslation();
  const { MENU_ACCOUNT_SETUP } = I18N;

  // -----------------------------
  // Account Section
  // -----------------------------
  const [companyType, setCompanyType] = React.useState(false);

  const handleChangeType = async (value: boolean) => {
    setCompanyType(value);
  };

  // const uploadFiles = async () => {};

  // const handleSubmit = async (values: any) => {};

  // const handleUploadIcon = (event: any) => {
  //   const file = event.target.files[0];
  //   setCompanyIco({ file: file });
  // };

  // React.useEffect(() => {

  //   if (authStore.loggedUser?.accountRole !== 0) {
  //     userStore.getCompany();
  //   }
  // // }, [userStore, authStore.loggedUser]);

  // React.useEffect(() => {
  //   setCompanyType(
  //     typeof authStore.loggedUser?.companyId === 'number' ? true : false
  //   );
  //   if (typeof authStore.loggedUser?.companyId === 'number') {
  //     setCompanyActionMode(ACTION_MODE.EDIT);
  //   }
  // }, [userStore.company, authStore.loggedUser]);

  React.useEffect(() => {}, [authStore.loggedUser]);

  return (
    <>
      <WrapperTheme pageTitle={t(MENU_ACCOUNT_SETUP)}>
        {authStore.loggedUser && (
          <>
            <UserMyAccount
              handleChangeType={handleChangeType}
              companyType={companyType}
            />
          </>
        )}
      </WrapperTheme>
    </>
  );
};

export default observer(SetupUserPage);
