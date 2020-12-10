import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { getRouteTitle, getRoute } from '@/libs/utils/routes.util';
// import { retrieveFromStorage } from '@/libs/utils/storage.util';
import { CommonStoreContext } from '@/libs/stores/common.store';
import UserLayout from '../layout';
// import { AuthenticationStoreContext } from '@/modules/authentication.store';
import { userRoutes } from '@/modules/user/routes/front';

declare const document: any;

const UserRouter = () => {
  const location = useLocation();
  // const history = useHistory();
  // const authStore = React.useContext(AuthenticationStoreContext);
  const commonStore = React.useContext(CommonStoreContext);

  /*
   * Translation
   */
  const { t } = useTranslation();

  React.useEffect(() => {
    const title: string = getRouteTitle(location.pathname, userRoutes);
    document.title = t(title);

    const route: string = getRoute(location.pathname, userRoutes);
    commonStore.setActiveMenu(route);
  }, [location.pathname, t, commonStore]);

  // React.useEffect(() => {
  //   const existedToken = retrieveFromStorage('token');

  //   if (!existedToken && isGuarded(location.pathname, tadaTruckRoutes)) {
  //     history.push(CUSTOMER_ROUTERS.LOGIN);
  //   }
  //   if (
  //     (existedToken || existedToken !== null) &&
  //     (!authStore.loggedUser || authStore.loggedUser === null)
  //   ) {
  //     authStore.validateToken(existedToken, history);
  //     if (location.pathname === '/') {
  //       history.push(CUSTOMER_ROUTERS.SETUP);
  //       commonStore.setActiveMenu(CUSTOMER_ROUTERS.SETUP);
  //     }
  //   }
  // if (existedToken && !isExisting(location.pathname, tadaTruckRoutes)) {
  //   history.push(CUSTOMER_ROUTERS.SETUP);
  //   commonStore.setActiveMenu(CUSTOMER_ROUTERS.SETUP);
  // }
  // if (existedToken && authStore.loggedUser) {
  //   history.push(CUSTOMER_ROUTERS.SETUP);
  // }
  // }, [history, authStore, location.pathname, commonStore]);

  return (
    <>
      <Switch>
        <Route
          path="/"
          render={(props: any) => <UserLayout {...props} exact />}
        />
      </Switch>
    </>
  );
};

export default observer(UserRouter);
