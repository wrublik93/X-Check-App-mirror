import Button from 'antd/lib/button';
import PageHeader from 'antd/lib/page-header';
import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import 'antd/lib/button/style/index.css';
import 'antd/lib/page-header/style/index.css';
import styles from '@/components/Header/Header.scss';
import { HeaderDataProps } from '@/types/props';
import { createHashKeysArray } from '@/utils/utils';

const data: HeaderDataProps[] = [
  { name: 'Home', link: '/home' },
  { name: 'Tasks', link: '/tasks' },
  { name: 'Review Requests', link: '/reviewRequests' },
  { name: 'Reviews', link: '/reviews' },
  { name: 'About Us', link: '/aboutUs' },
];

const Header: FunctionComponent = () => {
  const hashKeysArray = createHashKeysArray({ length: data.length });

  const listItems = data.map((dataItem, index: number) => (
    <Button key={hashKeysArray[index]}>
      <NavLink to={dataItem.link} className={styles['nav-link-header']}>
        {dataItem.name}
      </NavLink>
    </Button>
  ));

  return (
    <header className={styles['site-page-header-ghost-wrapper']}>
      <PageHeader ghost={false} extra={listItems} title="X-Check App" />
    </header>
  );
};

export default Header;
