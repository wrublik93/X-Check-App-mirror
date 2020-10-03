import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Radio from 'antd/lib/radio';
import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

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
} from '@/services/services';
import { getAllCourses } from '@/store/actions/courses';
import { openLogInWindow } from '@/store/actions/modals';
import { getAllReviews } from '@/store/actions/reviews';
import { getAllRoles } from '@/store/actions/roles';
import { getAllSessions } from '@/store/actions/sessions';
import { getAllTasks } from '@/store/actions/tasks';
import 'antd/lib/button/style/index.css';
import 'antd/lib/form/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/radio/style/index.css';
import { getCurrentUser, getAllUsers } from '@/store/actions/users';
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

const Forms: FunctionComponent<FormArgs> = ({
  formInputList,
  formInfo,
  formRadioGroupList,
  formButtonSubmitName,
}) => {
  const dispatch = useDispatch();
  const onFinish = async (values: any) => {
    switch (formButtonSubmitName.name) {
      case 'logInSubmit': {
        const logIn = await logInUser(values);
        if (logIn) {
          const user = await getUser(values);
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
          dispatch(openLogInWindow());
          window.location.pathname = '/home';
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
      <Input placeholder={inputItem.placeholder} />
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
      </Form>
    </div>
  );
};

export default Forms;
