import Result from 'antd/lib/result';
import React from 'react';

import styles from '@/views/Reviews/Reviews.scss';

const Reviews = (): JSX.Element => (
  <div className={styles['review-requests']}>
    <h1>Reviews</h1>
    <Result
      status="404"
      title="We didn't make this page because our team split up. We are very sorry :("
    />
    ,
  </div>
);

export default Reviews;
