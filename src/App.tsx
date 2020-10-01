import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';

import routeNamesMap from '@/constants/constants';
import { getUsers } from '@/services/services';
import { incrementCourses } from '@/store/actions/courses';
import { incrementReviews } from '@/store/actions/reviews';
import { incrementRoles } from '@/store/actions/roles';
import { incrementSessions } from '@/store/actions/sessions';
import { incrementTasks } from '@/store/actions/tasks';
import { incrementUsers } from '@/store/actions/users';
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
  const countUser = useSelector((state: RootState) => state.users.count);
  const countTask = useSelector((state: RootState) => state.tasks.count);
  const dispatch = useDispatch();

  useEffect(
    () => history.listen(location => {
      handleChange(location.pathname);
    }),
    [history]
  );

  const test = async () => {
    const tests = await getUsers();
    // eslint-disable-next-line no-console
    console.log(tests);
  };

  return (
    <div>
      <button type="button" onClick={test}>
        Test
      </button>
      <button type="button" onClick={() => dispatch(incrementUsers())}>
        User +
      </button>
      User:
      {' '}
      {countUser}
      <button type="button" onClick={() => dispatch(incrementTasks())}>
        Task +
      </button>
      Task:
      {' '}
      {countTask}
      <button type="button" onClick={() => dispatch(incrementCourses())}>
        Course +
      </button>
      <button type="button" onClick={() => dispatch(incrementReviews())}>
        Review +
      </button>
      <button type="button" onClick={() => dispatch(incrementSessions())}>
        Session +
      </button>
      <button type="button" onClick={() => dispatch(incrementRoles())}>
        Role +
      </button>
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
