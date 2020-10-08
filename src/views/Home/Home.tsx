import Alert from 'antd/lib/alert';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import DatePicker from 'antd/lib/date-picker';
import Form from 'antd/lib/form/';
import Input from 'antd/lib/input';
import Modal from 'antd/lib/modal';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
import Table from 'antd/lib/table';
import Tag from 'antd/lib/tag';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createCourse, getCourses, getUsers } from '@/services/services';
import logoRS from '@/static/images/logo-rs.svg';
import {
  changeSuccessAlert,
  changeErrorAlert,
  changeSuccessText,
  changeErrorText,
} from '@/store/actions/alerts';
import { getAllCourses } from '@/store/actions/courses';
import {
  openAddCourseWindow,
  startSpin,
  openViewCoursesTable,
  startViewCoursesSpin,
  openViewUsersTable,
  startViewUsersSpin,
} from '@/store/actions/modals';
import { getAllUsers } from '@/store/actions/users';
import { RootState } from '@/store/store';
import { Role, User } from '@/types/entities';
import styles from '@/views/Home/Home.scss';

const { Column, ColumnGroup } = Table;

const { Option } = Select;

const { TextArea } = Input;

const { Meta } = Card;

const Home = (): JSX.Element => {
  const currentUser: User = useSelector((state: RootState) => state.users.userCurrent as User);
  // eslint-disable-next-line max-len
  const currentRole: Role = useSelector(
    (state: RootState) => state.roles.roles[currentUser.id] as Role
  );
  const addCourse = useSelector((state: RootState) => state.modals.openAddCourse);
  const dispatch = useDispatch();
  const successAlert = useSelector((state: RootState) => state.alerts.successAlert);
  const successText = useSelector((state: RootState) => state.alerts.successText);
  const errorAlert = useSelector((state: RootState) => state.alerts.errorAlert);
  const errorText = useSelector((state: RootState) => state.alerts.errorText);
  const workSpin = useSelector((state: RootState) => state.modals.startSpin);
  const coursesSpin = useSelector((state: RootState) => state.modals.viewCoursesSpin);
  const usersSpin = useSelector((state: RootState) => state.modals.viewUsersSpin);
  const viewCoursesTable = useSelector((state: RootState) => state.modals.openCoursesTable);
  const viewUsersTable = useSelector((state: RootState) => state.modals.openUsersTable);
  const rolesUser: Role[] = useSelector((state: RootState) => state.roles.roles);
  const handleClickAddCourse = () => {
    dispatch(openAddCourseWindow(true));
  };
  const handleClickViewCourse = async () => {
    dispatch(openViewCoursesTable(true));
    dispatch(startViewCoursesSpin(true));
    const addCoursesStore = await getCourses();
    dispatch(getAllCourses(addCoursesStore));
    dispatch(startViewCoursesSpin(false));
  };
  const handleClickViewUsers = async () => {
    dispatch(openViewUsersTable(true));
    dispatch(startViewUsersSpin(true));
    const addUsersStore = await getUsers();
    dispatch(getAllUsers(addUsersStore));
    dispatch(startViewUsersSpin(false));
  };
  const handleClickSkipCourses = () => {
    dispatch(openViewCoursesTable(false));
  };
  const handleClickSkipUsers = () => {
    dispatch(openViewUsersTable(false));
  };
  const colorRoles = (a: string) => {
    switch (a) {
      case 'admin':
        return 'purple';
        break;
      case 'trainer':
        return 'green';
        break;
      case 'mentor':
        return 'red';
        break;
      case 'lime':
        return '';
        break;
      case 'student':
        return 'cyan';
        break;
      default:
        return 'white';
        break;
    }
  };
  const dateFormat = 'YYYY-MM-DD';
  const coursesData = useSelector((state: RootState) => state.courses.courses);
  const usersData = useSelector((state: RootState) => state.users.users);
  interface SubmitAddCourseArgs {
    name: string;
    fullName: string;
    description: string;
    startDate: Date;
    endDate: Date;
    completed: boolean;
  }

  const submitAddCourse = async (values: SubmitAddCourseArgs) => {
    dispatch(changeSuccessAlert(false));
    dispatch(changeErrorAlert(false));
    dispatch(startSpin(true));
    const startDateNew = new Date(values.startDate).toISOString();
    const endDateNew = new Date(values.endDate).toISOString();
    const newCourse = await createCourse({
      name: values.name,
      fullName: values.fullName,
      description: values.description,
      startDate: startDateNew.substring(0, 10),
      endDate: endDateNew.substring(0, 10),
      completed: Boolean(values.completed),
    });
    if (newCourse) {
      dispatch(changeSuccessAlert(true));
      dispatch(changeSuccessText('Course created! Redirecting...'));
      setTimeout(() => {
        dispatch(startSpin(false));
        dispatch(changeSuccessAlert(false));
        dispatch(changeSuccessText(''));
        dispatch(openAddCourseWindow(false));
      }, 3000);
    } else {
      dispatch(startSpin(false));
      dispatch(changeErrorText('Course exists. Please try again!'));
      dispatch(changeErrorAlert(true));
    }
  };
  return (
    <div className={styles['home-main']}>
      <div>
        <Card
          className={styles['card-main']}
          cover={<img alt="example" src={logoRS as string} style={{ padding: 20 }} />}
        >
          <Meta
            title={`${currentUser.firstName} ${currentUser.lastName}`}
            description={currentUser.email}
          />
          <p>
            <strong>Role:</strong>
            {' '}
            {currentRole.name}
          </p>
          <div className={styles['home-card-buttons-container']}>
            <Button className={styles['home-card-button']} onClick={handleClickAddCourse}>
              Add course
            </Button>
            <Button className={styles['home-card-button']}>Add task</Button>
          </div>
          <div className={styles['home-card-buttons-container']}>
            <Button className={styles['home-card-button']} onClick={handleClickViewCourse}>
              View courses
            </Button>
            <Button className={styles['home-card-button']} onClick={handleClickViewUsers}>
              View users
            </Button>
          </div>
        </Card>
        <Modal
          visible={addCourse}
          onCancel={() => {
            dispatch(openAddCourseWindow(false));
            dispatch(changeSuccessAlert(false));
            dispatch(changeErrorAlert(false));
          }}
          title="Add course"
          footer={null}
        >
          <div>
            <Form name="addCourse" layout="vertical" onFinish={submitAddCourse}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input name course!' }]}
              >
                <Input placeholder="Input name course..." />
              </Form.Item>
              <Form.Item
                label="Full name"
                name="fullName"
                rules={[{ required: true, message: 'Please input full name course!' }]}
              >
                <Input placeholder="Input full name course..." />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input description course!' }]}
              >
                <TextArea placeholder="Input description course..." />
              </Form.Item>
              <Form.Item
                label="Start Date"
                name="startDate"
                rules={[{ required: true, message: 'Please select start date!' }]}
              >
                <DatePicker className={styles['date-picker']} format={dateFormat} />
              </Form.Item>
              <Form.Item
                label="End Date"
                name="endDate"
                rules={[{ required: true, message: 'Please select end date!' }]}
              >
                <DatePicker className={styles['date-picker']} format={dateFormat} />
              </Form.Item>
              <Form.Item
                label="Course completed"
                name="completed"
                rules={[{ required: true, message: 'Please select completed course!' }]}
              >
                <Select>
                  <Option value={0}>No</Option>
                  <Option value={1}>Yes</Option>
                </Select>
              </Form.Item>
              <Form.Item className={styles['form-add-course']}>
                <Button type="primary" htmlType="submit">
                  Add course
                </Button>
              </Form.Item>
            </Form>
            <div className={styles['form-add-course']}>{workSpin && <Spin />}</div>
            <div className={styles['form-add-course']}>
              {successAlert && <Alert message={successText} type="success" />}
            </div>
            <div className={styles['form-add-course']}>
              {errorAlert && <Alert message={errorText} type="error" />}
            </div>
          </div>
        </Modal>
        <Modal
          visible={addCourse}
          onCancel={() => {
            dispatch(openAddCourseWindow(false));
            dispatch(changeSuccessAlert(false));
            dispatch(changeErrorAlert(false));
          }}
          title="Add course"
          footer={null}
        >
          <div>
            <Form name="addCourse" layout="vertical" onFinish={submitAddCourse}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input name course!' }]}
              >
                <Input placeholder="Input name course..." />
              </Form.Item>
              <Form.Item
                label="Full name"
                name="fullName"
                rules={[{ required: true, message: 'Please input full name course!' }]}
              >
                <Input placeholder="Input full name course..." />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input description course!' }]}
              >
                <TextArea placeholder="Input description course..." />
              </Form.Item>
              <Form.Item
                label="Start Date"
                name="startDate"
                rules={[{ required: true, message: 'Please select start date!' }]}
              >
                <DatePicker className={styles['date-picker']} format={dateFormat} />
              </Form.Item>
              <Form.Item
                label="End Date"
                name="endDate"
                rules={[{ required: true, message: 'Please select end date!' }]}
              >
                <DatePicker className={styles['date-picker']} format={dateFormat} />
              </Form.Item>
              <Form.Item
                label="Course completed"
                name="completed"
                rules={[{ required: true, message: 'Please select completed course!' }]}
              >
                <Select>
                  <Option value={0}>No</Option>
                  <Option value={1}>Yes</Option>
                </Select>
              </Form.Item>
              <Form.Item className={styles['form-add-course']}>
                <Button type="primary" htmlType="submit">
                  Add course
                </Button>
              </Form.Item>
            </Form>
            <div className={styles['form-add-course']}>{workSpin && <Spin />}</div>
            <div className={styles['form-add-course']}>
              {successAlert && <Alert message={successText} type="success" />}
            </div>
            <div className={styles['form-add-course']}>
              {errorAlert && <Alert message={errorText} type="error" />}
            </div>
          </div>
        </Modal>
      </div>
      {viewCoursesTable && (
        <div className={styles['table-container']}>
          {coursesSpin && <Spin />}
          {!coursesSpin && (
            <div>
              <h2>Courses</h2>
              <Button onClick={handleClickSkipCourses}>Skip Courses</Button>
            </div>
          )}
          {!coursesSpin && (
            <div>
              <Table dataSource={coursesData} className={styles['table-container']}>
                <ColumnGroup title="Name">
                  <Column title="Short" dataIndex="name" key="name" />
                  <Column title="Full" dataIndex="fullName" key="fullName" />
                </ColumnGroup>
                <Column title="Description" dataIndex="description" key="description" />
                <Column title="Start Date" dataIndex="startDate" key="startDate" />
                <Column title="End Date" dataIndex="endDate" key="endDate" />
                <Column
                  title="Completed"
                  dataIndex="completed"
                  key="completed"
                  render={completed => (
                    <div>
                      {completed ? (
                        <Tag color="red" key="completed">
                          Yes
                        </Tag>
                      ) : (
                        <Tag color="green" key="completed">
                          No
                        </Tag>
                      )}
                    </div>
                  )}
                />
              </Table>
            </div>
          )}
        </div>
      )}
      {viewUsersTable && (
        <div className={styles['table-container']}>
          {usersSpin && <Spin />}
          {!usersSpin && (
            <div>
              <h2>Users</h2>
              <Button onClick={handleClickSkipUsers}>Skip Users</Button>
            </div>
          )}
          {!usersSpin && (
            <div>
              <Table dataSource={usersData} className={styles['table-container']}>
                <ColumnGroup title="Name">
                  <Column title="First Name" dataIndex="firstName" key="firstName" />
                  <Column title="Last Name" dataIndex="lastName" key="lastName" />
                </ColumnGroup>
                <Column title="Email" dataIndex="email" key="email" />
                <Column
                  title="Role"
                  dataIndex="roleIds"
                  key="roleIds"
                  render={(roleIds: number[]) => (
                    <div>
                      <div>
                        {/* {roleIds[0] === 0 ? <Tag color="red" key="roleIds">Admin</Tag> ? <Tag color="green" key="completed">No</Tag>} */}
                        <Tag key="roleIds" color={colorRoles(rolesUser[roleIds[0]].name)}>
                          {rolesUser[roleIds[0]].name}
                        </Tag>
                      </div>
                    </div>
                  )}
                />
              </Table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
