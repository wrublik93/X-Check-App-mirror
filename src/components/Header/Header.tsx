import Button from 'antd/lib/button';
import PageHeader from 'antd/lib/page-header';
import React, { FunctionComponent } from 'react';
import { useCookies } from 'react-cookie';
import { NavLink, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['userAppCheck']);

  const typeButton = (link: string) => {
    if (link === location.pathname) {
      return 'primary';
    }
    return 'default';
  };

  function handleClick() {
    localStorage.removeItem('x-check-app-redux');
    removeCookie('userAppCheck');
    localStorage.setItem('logInCheck', 'no');
  }

  const listItems = headerLinksList.map((dataItem, index: number) => (
    <Button key={hashKeysArray[index]} type={typeButton(dataItem.link)}>
      <NavLink to={dataItem.link} className={styles['nav-link-header']}>
        {dataItem.name}
      </NavLink>
    </Button>
  ));
  const buttonLogout = (
    <Button key="logout-button" onClick={handleClick} danger type="primary">
      Logout
    </Button>
  );

  return (
    <header className={styles['site-page-header-ghost-wrapper']}>
      <PageHeader ghost={false} extra={listItems.concat(buttonLogout)} title="X-Check App" />
    </header>
  );
};

export default Header;
