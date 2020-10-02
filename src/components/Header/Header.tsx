import Button from 'antd/lib/button';
import PageHeader from 'antd/lib/page-header';
import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import 'antd/lib/button/style/index.css';
import 'antd/lib/page-header/style/index.css';
import styles from '@/components/Header/Header.scss';
import { HeaderDataProps } from '@/types/props';
import { createHashKeysArray } from '@/utils/utils';

interface HeaderArgs {
  headerLinksList: HeaderDataProps[];
}

const Header: FunctionComponent<HeaderArgs> = ({ headerLinksList }) => {
  const hashKeysArray = createHashKeysArray({ length: headerLinksList.length });

  const listItems = headerLinksList.map((dataItem, index: number) => (
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
