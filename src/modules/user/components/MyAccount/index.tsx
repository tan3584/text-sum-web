import React from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';

import UserAccountForm from '@/modules/user/components/AccountForm';

import { toast } from 'react-toastify';
import bsCustomFileInput from 'bs-custom-file-input';
import { AuthenticationStoreContext } from '@/modules/authentication.store';

import { REFERENCE_TYPE } from '@/modules/account/referenceType.enum';
import { UserStoreContext } from '../../user.store';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  handleChangeType?: any;
  companyType: boolean;
}

const UserMyAccount = (props: ComponentProps) => {
  const authStore = React.useContext(AuthenticationStoreContext);
  const userStore = React.useContext(UserStoreContext);

  /*
   * Props of Component
   */
  const { className, children, handleChangeType, companyType } = props;

  /*
   * Translation
   */
  const { t } = useTranslation();
  const { MESSAGES_UPDATE_SUCCESS, MESSAGES_DELETE_SUCCESS } = I18N;

  const [avatar, setAvatar] = React.useState({
    file: null,
  });

  const [initData, setInitData] = React.useState<any>(null);

  const handleSubmit = async (values: any) => {
    if (!companyType) {
      values.companyId = null;
    }
    userStore.setAccountForm(values);
    const data = await userStore.updateAccount(authStore.loggedUser.id);
    if (data) {
      const user = await userStore.getAccountInfo();
      authStore.setLoggedUser(user ?? authStore.loggedUser);
      toast.dismiss();
      toast.success(t(MESSAGES_UPDATE_SUCCESS));
    }
  };

  /*
   * Action of Delete button
   *
   * @param number id
   * @return void
   */
  const handleDelete = async (type: REFERENCE_TYPE) => {
    if (type === REFERENCE_TYPE.USER_PROFILE_IMG) {
      const result = userStore.deleteAccountFile(
        authStore.loggedUser.id,
        REFERENCE_TYPE.USER_PROFILE_IMG
      );
      if (result) {
        authStore.loggedUser.avatarUrl = '';
        toast.dismiss();
        bsCustomFileInput.init();
        toast.success(t(MESSAGES_DELETE_SUCCESS));
      }
    }
  };

  const handleUploadAvatar = (event: any) => {
    setAvatar({ file: event.target.files[0] });
  };

  React.useEffect(() => {
    if (authStore.loggedUser) {
      authStore.loggedUser.cardNo = authStore.loggedUser.cardNo ?? '';
      authStore.loggedUser.phoneNumber = authStore.loggedUser.phoneNumber ?? '';
      authStore.loggedUser.email = authStore.loggedUser.email ?? '';
      authStore.loggedUser.firstName = authStore.loggedUser.firstName ?? '';
      setInitData(authStore.loggedUser);
    }
  }, [authStore.loggedUser]);

  return (
    <>
      {initData && (
        <UserAccountForm
          className={className}
          children={children}
          handleSubmitForm={handleSubmit}
          initialValues={initData}
          handleUploadAvatar={handleUploadAvatar}
          handleDeleteFiles={handleDelete}
          handleChangeType={handleChangeType}
          companyType={companyType}
        />
      )}
    </>
  );
};

export default observer(UserMyAccount);
