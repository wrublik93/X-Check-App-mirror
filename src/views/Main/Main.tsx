import React from 'react';

const Main = (props: { children: JSX.Element }) => {
  const { children } = props;
  return <main className="main">{children}</main>;
};

export default Main;
