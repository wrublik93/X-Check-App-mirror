import classNames from 'classnames';
import React from 'react';
import img from '../../../assets/images/ornament.jpg';
import './main.scss';

const Main = () => {
  const mainClass = classNames('main','wrap');
  return (
    <main className={mainClass}>
      <h2>Freedom</h2>
      <img src={img} alt="img" />
    </main>
  );
};

export default Main;
