import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';

import routeNamesMap from '@/constants/constants';
import { incrementTask } from '@/store/actions/task';
import { incrementUser } from '@/store/actions/user';
import AboutUs from '@/views/AboutUs';
import Home from '@/views/Home';
import Main from '@/views/Main';
import NotFoundPage from '@/views/NotFoundPage';
import Registration from '@/views/Registration';
import ReviewRequests from '@/views/ReviewRequests';
import Reviews from '@/views/Reviews';
import Tasks from '@/views/Tasks';

import { RootState } from './store/store';

const handleChange = (routeName: string) => {
  if (routeName) {
    document.title = routeNamesMap[routeName] as string;
  }
};

const App = (): JSX.Element => {
  const history = useHistory();
  const countUser = useSelector((state: RootState) => state.user.count);
  const countTask = useSelector((state: RootState) => state.task.count);
  const dispatch = useDispatch();

  useEffect(
    () => history.listen(location => {
      handleChange(location.pathname);
    }),
    [history]
  );

  return (
    <div>
      <button type="button" onClick={() => dispatch(incrementUser())}>User +</button>
      User:
      {' '}
      {countUser}
      <button type="button" onClick={() => dispatch(incrementTask())}>Task +</button>
      Task:
      {' '}
      {countTask}
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
