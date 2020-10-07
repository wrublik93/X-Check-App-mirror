import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';

import Header from '@/components/Header';
import TasksTable from '@/components/Table';
import { routeNamesMap, headerLinks } from '@/constants/constants';
import AboutUs from '@/views/AboutUs';
import Home from '@/views/Home';
import Main from '@/views/Main';
import NotFoundPage from '@/views/NotFoundPage';
import Registration from '@/views/Registration';
import ReviewRequests from '@/views/ReviewRequests';
import Reviews from '@/views/Reviews';

const handleChange = (routeName: string) => {
  if (routeName) {
    document.title = routeNamesMap[routeName] as string;
  }
};

const App = (): JSX.Element => {
  const history = useHistory();
  const [cookies] = useCookies(['userAppCheck']);

  useEffect(
    () => history.listen(location => {
      handleChange(location.pathname);
    }),
    [history]
  );

  return (
    <div>
      {cookies.userAppCheck && <Header headerLinksList={headerLinks} />}
      <Main>
        <Switch>
          <Route exact path="/" component={Registration}>
            {cookies.userAppCheck && <Redirect to="/home" />}
          </Route>
          {cookies.userAppCheck && <Route path="/home" component={Home} />}
          {cookies.userAppCheck && <Route path="/tasks" component={TasksTable} />}
          {cookies.userAppCheck && <Route path="/reviews" component={Reviews} />}
          {cookies.userAppCheck && <Route path="/reviewRequests" component={ReviewRequests} />}
          {cookies.userAppCheck && <Route path="/aboutUs" component={AboutUs} />}
          {cookies.userAppCheck && <Route path="/404" component={NotFoundPage} />}
          <Route path="*">
            {cookies.userAppCheck ? <Redirect to="/404" /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Main>
    </div>
  );
};

export default App;
