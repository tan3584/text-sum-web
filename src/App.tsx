import React from 'react';
import { observer } from 'mobx-react';
import { FirebaseStoreContext } from './libs/stores/firebase.store';
import { messaging } from './libs/utils/firebase.util';
import { saveToStorage } from './libs/utils/storage.util';
import { LOCAL_STORAGE_KEY } from './libs/constants/local-storage-key.constants';
import UserTheme from './themes/user/layout/theme';
import UserRouter from './themes/user/routers';

function App() {
  // const languageStore = React.useContext(LanguageStoreContext);
  const firebaseStore = React.useContext(FirebaseStoreContext);
  // const notiStore = React.useContext(NotificationStoreContext);

  // const authStore = React.useContext(AuthenticationStoreContext);

  // if ('serviceWorker' in navigator) {
  //   // Supported!
  //   navigator.serviceWorker.addEventListener('message', (message) => {
  //     notiStore.getNotiList();
  //   });
  // }

  React.useEffect(() => {
    if (messaging) {
      messaging
        .getToken()
        .then((token) => {
          saveToStorage(LOCAL_STORAGE_KEY.DEVICE_TOKEN, token);
        })
        .catch(() => {
          console.error('Permission notification - Granted');
        });
    }
  }, [firebaseStore]);

  // React.useEffect(() => {
  //   const deviceId = retrieveFromStorage(LOCAL_STORAGE_KEY.DEVICE_TOKEN);
  //   if (authStore.loggedUser && deviceId) {
  //     authStore.registerToken(deviceId);
  //   }
  // }, [authStore.loggedUser, authStore]);

  // React.useEffect(() => {
  //   const lang =
  //     retrieveFromStorage('lang') ?? process.env.REACT_APP_DEFAULT_LANG;
  //   if (lang) {
  //     languageStore.setActiveLanguage(lang);
  //   }
  // }, [languageStore]);

  return (
    <>
      <UserTheme />
      <UserRouter />
    </>
  );
}

export default observer(App);
