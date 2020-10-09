import Result from 'antd/lib/result';
import React from 'react';

import styles from '@/views/NotFoundPage/NotFoundPage.scss';

const NotFoundPage = (): JSX.Element => (
  <div className={styles['review-requests']}>
    <h1>404</h1>
    <Result status="404" title="Not found page!" />
    ,
  </div>
);

export default NotFoundPage;
