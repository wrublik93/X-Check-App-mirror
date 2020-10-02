import React, { useEffect } from 'react';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';

import Header from '@/components/Header';
import { routeNamesMap, headerLinks } from '@/constants/constants';
import AboutUs from '@/views/AboutUs';
import Home from '@/views/Home';
import Main from '@/views/Main';
import NotFoundPage from '@/views/NotFoundPage';
import Registration from '@/views/Registration';
import ReviewRequests from '@/views/ReviewRequests';
import Reviews from '@/views/Reviews';
import Tasks from '@/views/Tasks';

const handleChange = (routeName: string) => {
  if (routeName) {
    document.title = routeNamesMap[routeName] as string;
  }
};

const App = (): JSX.Element => {
  const history = useHistory();
  useEffect(
    () => history.listen(location => {
      handleChange(location.pathname);
    }),
    [history]
  );

  return (
    <div>
      <Header headerLinksList={headerLinks} />
      <Main>
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route path="/home" component={Home} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/reviewRequests" component={ReviewRequests} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/404" component={NotFoundPage} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Main>
    </div>
  );
};

export default App;
