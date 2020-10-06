import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import React from 'react';
import 'antd/lib/button/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/form/style/index.css';
import 'antd/lib/modal/style/index.css';
import { useDispatch, useSelector } from 'react-redux';

import Forms from '@/components/Forms/Forms';
import {
  logInInputs,
  logInInfo,
  signUpInputs,
  signUpInfo,
  signUpRadios,
  logInSubmit,
  signUpSubmit,
} from '@/constants/constants';
import { getRoles } from '@/services/services';
import logoRS from '@/static/images/logo-rs.svg';
import { openLogInWindow, openSignUpWindow } from '@/store/actions/modals';
import { getAllRoles } from '@/store/actions/roles';
import { RootState } from '@/store/store';
import styles from '@/views/Registration/Registration.scss';

const Registration = (): JSX.Element => {
  const openLogIn = useSelector((state: RootState) => state.modals.openLogIn);
  const openSignUp = useSelector((state: RootState) => state.modals.openSignUp);
  const dispatch = useDispatch();
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
            dispatch(openLogInWindow(true));
          }}
        >
          Log In
        </Button>
        <Button
          className={styles['registration-button']}
          onClick={async () => {
            dispatch(openSignUpWindow(true));
            const roles = await getRoles();
            dispatch(getAllRoles(roles));
          }}
        >
          Sign Up
        </Button>
      </div>
      <Modal
        centered
        title="Log In"
        visible={openLogIn}
        footer={null}
        onCancel={() => {
          dispatch(openLogInWindow(false));
        }}
      >
        <Forms
          formInputList={logInInputs}
          formInfo={logInInfo}
          formButtonSubmitName={logInSubmit}
        />
      </Modal>
      <Modal
        centered
        title="Sign Up"
        visible={openSignUp}
        footer={null}
        onCancel={() => {
          dispatch(openSignUpWindow(false));
        }}
      >
        <Forms
          formInputList={signUpInputs}
          formInfo={signUpInfo}
          formRadioGroupList={signUpRadios}
          formButtonSubmitName={signUpSubmit}
        />
      </Modal>
    </div>
  );
};

export default Registration;
