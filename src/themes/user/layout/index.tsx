import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { userRoutes } from '@/modules/user/routes/front';
import PageNotFound from '@/modules/no-route/page/frontend/PageNotFound';

export default function UserLayout() {
  return (
    <Switch>
      {userRoutes
        .filter((item: any) => !item.isLayout)
        .map((item: any) => (
          <Route
            key={item.path}
            path={item.path}
            component={item.component}
            exact={item.exact}
          />
        ))}
      <Route component={PageNotFound} />
    </Switch>
  );
}
