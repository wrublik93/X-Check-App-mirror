import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import React, { useState } from 'react';

import 'antd/lib/button/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/form/style/index.css';
import 'antd/lib/modal/style/index.css';
import Forms from '@/components/Forms/Forms';
import {
  logInInputs,
  logInInfo,
  signUpInputs,
  signUpInfo,
  signUpRadios,
} from '@/constants/constants';
import logoRS from '@/static/images/logo-rs.svg';
import styles from '@/views/Registration/Registration.scss';

const Registration = (): JSX.Element => {
  const [showAuth, setShowAuth] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className={styles['registration']}>
      <div className={styles['registration-main']}>
        <object
          title="logo"
          type="image/svg+xml"
          width="200"
          height="200"
          data={logoRS as string}
        />
        <Button
          className={styles['registration-button']}
          type="primary"
          onClick={() => {
            setShowAuth(true);
          }}
        >
          Log In
        </Button>
        <Button
          className={styles['registration-button']}
          onClick={() => {
            setShowSignUp(true);
          }}
        >
          Sign Up
        </Button>
      </div>
      <Modal
        centered
        title="Log In"
        visible={showAuth}
        footer={null}
        onCancel={() => {
          setShowAuth(false);
        }}
      >
        <Forms formInputList={logInInputs} formInfo={logInInfo} />
      </Modal>
      <Modal
        centered
        title="Sign Up"
        visible={showSignUp}
        footer={null}
        onCancel={() => {
          setShowSignUp(false);
        }}
      >
        <Forms
          formInputList={signUpInputs}
          formInfo={signUpInfo}
          formRadioGroupList={signUpRadios}
        />
      </Modal>
    </div>
  );
};

export default Registration;
