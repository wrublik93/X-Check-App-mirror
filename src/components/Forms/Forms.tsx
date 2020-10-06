import Alert from 'antd/lib/alert';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Radio from 'antd/lib/radio';
import Spin from 'antd/lib/spin';
import React, { FunctionComponent } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';

import styles from '@/components/Forms/Forms.scss';
import {
  logInUser,
  getUser,
  getCourses,
  getTasks,
  getRoles,
  getUsers,
  getSessions,
  getReviews,
  createUser,
  getRoleByName,
} from '@/services/services';
import {
  changeSuccessAlert,
  changeSuccessText,
  changeErrorAlert,
  changeErrorText,
} from '@/store/actions/alerts';
import { getAllCourses } from '@/store/actions/courses';
import { startSpin, openLogInWindow, openSignUpWindow } from '@/store/actions/modals';
import { getAllReviews } from '@/store/actions/reviews';
import { getAllRoles } from '@/store/actions/roles';
import { getAllSessions } from '@/store/actions/sessions';
import { getAllTasks } from '@/store/actions/tasks';
import 'antd/lib/button/style/index.css';
import 'antd/lib/form/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/radio/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { getCurrentUser, getAllUsers } from '@/store/actions/users';
import { RootState } from '@/store/store';
import { User, Role } from '@/types/entities';
import {
  FormInputProps,
  FormInfoProps,
  FormRadioGroupProps,
  FormButtonSubmit,
} from '@/types/props';
import { createHashKeysArray } from '@/utils/utils';

interface FormArgs {
  formInputList: FormInputProps[];
  formInfo: FormInfoProps;
  formRadioGroupList?: FormRadioGroupProps[];
  formButtonSubmitName: FormButtonSubmit;
}

interface ValuesSubmit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: string;
}

const Forms: FunctionComponent<FormArgs> = ({
  formInputList,
  formInfo,
  formRadioGroupList,
  formButtonSubmitName,
}) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookies] = useCookies(['userAppCheck']);
  const successAlert = useSelector((state: RootState) => state.alerts.successAlert);
  const successText = useSelector((state: RootState) => state.alerts.successText);
  const errorAlert = useSelector((state: RootState) => state.alerts.errorAlert);
  const errorText = useSelector((state: RootState) => state.alerts.errorText);
  const workSpin = useSelector((state: RootState) => state.modals.startSpin);
  const onFinish = async (values: ValuesSubmit) => {
    switch (formButtonSubmitName.name) {
      case 'logInSubmit': {
        dispatch(changeSuccessAlert(false));
        dispatch(changeErrorAlert(false));
        dispatch(startSpin(true));
        const logIn = await logInUser(values);
        if (logIn) {
          dispatch(changeSuccessAlert(true));
          dispatch(changeSuccessText('User found! Redirecting ...'));
          const user: User = await getUser(values);
          dispatch(getCurrentUser(user[0]));
          const users = await getUsers();
          dispatch(getAllUsers(users));
          const roles = await getRoles();
          dispatch(getAllRoles(roles));
          const courses = await getCourses();
          dispatch(getAllCourses(courses));
          const tasks = await getTasks();
          dispatch(getAllTasks(tasks));
          const sessions = await getSessions();
          dispatch(getAllSessions(sessions));
          const reviews = await getReviews();
          dispatch(getAllReviews(reviews));
          dispatch(startSpin(false));
          dispatch(changeSuccessAlert(false));
          dispatch(changeSuccessText(''));
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          setCookies('userAppCheck', user[0].email);
          dispatch(openLogInWindow(false));
          localStorage.setItem('logInCheck', 'yes');
        } else {
          dispatch(startSpin(false));
          dispatch(changeErrorText('User not found! Please try again!'));
          dispatch(changeErrorAlert(true));
        }
        break;
      }
      case 'signUpSubmit': {
        dispatch(startSpin(true));
        dispatch(changeSuccessAlert(false));
        dispatch(changeErrorAlert(false));
        const roleName: Role[] = ((await getRoleByName({ name: values.roles })) as unknown) as [];
        const roleArr = [];
        roleArr.push(roleName[0].id);
        const createUserValue = (await createUser({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          roleIds: roleArr,
          token: '',
        })) as User;
        if (!createUserValue) {
          dispatch(startSpin(false));
          dispatch(changeErrorText('User exists with such email. Please try again!'));
          dispatch(changeErrorAlert(true));
        } else {
          dispatch(changeSuccessAlert(true));
          dispatch(changeSuccessText('User created! Redirecting...'));
          setTimeout(() => {
            dispatch(startSpin(false));
            dispatch(changeSuccessAlert(false));
            dispatch(changeSuccessText(''));
            dispatch(openSignUpWindow(false));
          }, 3000);
        }
        break;
      }
      default:
        // eslint-disable-next-line no-console
        console.log('test');
    }
  };

  const keyInput = createHashKeysArray({ length: formInputList.length });
  const keyRadio = formRadioGroupList
    ? createHashKeysArray({ length: formRadioGroupList.length })
    : undefined;
  const listInputItems = formInputList.map((inputItem, index: number) => (
    <Form.Item
      key={keyInput[index]}
      label={inputItem.label}
      name={inputItem.name}
      rules={[
        {
          required: inputItem.rules.required,
          message: inputItem.rules.message,
          /* type: inputItem.rules.type, */
        },
      ]}
    >
      {!inputItem.passwordType ? (
        <Input type={inputItem.type} placeholder={inputItem.placeholder} />
      ) : (
        <Input.Password
          className={styles['form-input-password']}
          placeholder={inputItem.placeholder}
        />
      )}
    </Form.Item>
  ));
  const listRadioGroupItems = formRadioGroupList
    ? formRadioGroupList.map((radioGroupItem, index: number) => (
      <Form.Item
        key={keyRadio ? keyRadio[index] : undefined}
        label={radioGroupItem.label}
        name={radioGroupItem.name}
        rules={[
          {
            required: radioGroupItem.rules.required,
            message: radioGroupItem.rules.message,
          },
        ]}
      >
        <Radio.Group>
          {radioGroupItem.radioButtonInput.map(radioButtonItem => (
            <Radio.Button key={radioButtonItem.name} value={radioButtonItem.value}>
              {radioButtonItem.name}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>
    ))
    : undefined;
  return (
    <div>
      <Form className={styles['form-main']} name={formInfo.nameForm} onFinish={onFinish}>
        {listInputItems}
        {listRadioGroupItems}
        <Form.Item className={styles['form-main']}>
          <Button type="primary" htmlType="submit">
            {formInfo.nameButton}
          </Button>
        </Form.Item>
        {workSpin && <Spin className={styles['spin-forms']} />}
        {successAlert && <Alert message={successText} type="success" />}
        {errorAlert && <Alert message={errorText} type="error" />}
      </Form>
    </div>
  );
};

export default Forms;
