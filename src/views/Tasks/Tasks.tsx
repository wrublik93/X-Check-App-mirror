import Alert from 'antd/lib/alert';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import Collapse from 'antd/lib/collapse';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Modal from 'antd/lib/modal';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
import Table from 'antd/lib/table';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createCriterion, getCriterions } from '@/services/services';
import { changeSuccessAlert, changeSuccessText, changeErrorAlert } from '@/store/actions/alerts';
import { openAddCriterionWindow, startAddCriterionSpin } from '@/store/actions/modals';
import { getAllCriterions } from '@/store/actions/tasks';
import { RootState } from '@/store/store';
import {
  Criterion,
  CriterionCategories,
  Role,
  Task,
  TaskCategories,
  TaskStatus,
  User,
} from '@/types/entities';
import styles from '@/views/Tasks/Tasks.scss';

const { Panel } = Collapse;

const { Option } = Select;

const { TextArea } = Input;

interface DataI {
  name: string;
  createdDate: string;
  updatedDate: string;
  author: string;
  taskCategoryId: string;
  taskStatusId: string;
  key: string;
  description: string;
  descriptionURL: string;
  /*   basicScope: ValuesCriterions; */
}

interface DataAllNamesTask {
  id: number;
  name: string;
}

interface ValuesCriterions {
  nameTask: string;
  minScore: string;
  maxScore: string;
  description: string;
  onlyForMentor: number;
  categoryCriterionId: number;
  title: string;
}

const Tasks = (): JSX.Element => {
  const currentUser: User = useSelector((state: RootState) => state.users.userCurrent as User);
  const currentRole: Role = useSelector(
    (state: RootState) => state.roles.roles[currentUser.roleIds[0]] as Role
  );
  const currentRoleName = currentRole.name;
  const successAlert = useSelector((state: RootState) => state.alerts.successAlert);
  const successText = useSelector((state: RootState) => state.alerts.successText);
  const criterionSpin = useSelector((state: RootState) => state.modals.addCriterionSpin);
  const addCriterion = useSelector((state: RootState) => state.modals.openAddCriterion);
  const dispatch = useDispatch();
  const addCriterionClick = async (values: ValuesCriterions) => {
    dispatch(changeSuccessAlert(false));
    dispatch(changeErrorAlert(false));
    dispatch(startAddCriterionSpin(true));
    await createCriterion({
      nameTask: values.nameTask,
      minScore: Number(values.minScore),
      maxScore: Number(values.maxScore),
      description: values.description,
      onlyForMentor: Boolean(values.onlyForMentor),
      categoryCriterionId: values.categoryCriterionId,
      title: values.title,
    });
    const criterions = await getCriterions();
    dispatch(getAllCriterions(criterions));
    dispatch(changeSuccessAlert(true));
    dispatch(changeSuccessText('Criterion created! Redirecting...'));
    setTimeout(() => {
      dispatch(startAddCriterionSpin(false));
      dispatch(changeSuccessAlert(false));
      dispatch(changeSuccessText(''));
      dispatch(openAddCriterionWindow(false));
    }, 3000);
  };
  const allTasks: Task[] = useSelector((state: RootState) => state.tasks.tasks);
  // eslint-disable-next-line max-len
  const allTaskCategories: TaskCategories[] = useSelector(
    (state: RootState) => state.tasks.tasksCategories
  );
  const allCriterionCategories: CriterionCategories[] = useSelector(
    (state: RootState) => state.tasks.criterionCategories
  );
  const storeCriterions: Criterion[] = useSelector((state: RootState) => state.tasks.criterions);
  const allTaskStatuses: TaskStatus[] = useSelector((state: RootState) => state.tasks.taskStatuses);
  const allUsers: User[] = useSelector((state: RootState) => state.users.users);
  const criterionCategoriesForm: DataAllNamesTask[] = [];
  allCriterionCategories.forEach(item => {
    const b: DataAllNamesTask = {
      id: item.id,
      name: item.name,
    };
    criterionCategoriesForm.push(b);
  });
  const a: DataI[] = [];
  allTasks.forEach(item => {
    const b: DataI = {
      key: `${item.id}-task`,
      name: item.name,
      createdDate: item.createdDate.substring(0, 10),
      updatedDate: item.updatedDate.substring(0, 10),
      author: `${allUsers[item.authorId].firstName} ${allUsers[item.authorId].lastName}`,
      taskCategoryId: `${allTaskCategories[item.taskCategoryId].name}`,
      taskStatusId: `${allTaskStatuses[item.taskStatusId].name}`,
      description: item.description,
      descriptionURL: item.descriptionURL,
    };
    a.push(b);
  });
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Category',
      dataIndex: 'taskCategoryId',
    },
    {
      title: 'Status',
      dataIndex: 'taskStatusId',
    },
  ];
  return (
    <div className={styles['tasks-main']}>
      <h1 className={styles['button-add-criterion']}>Tasks</h1>
      {(currentRoleName === 'admin' || currentRoleName === 'trainer' || currentRoleName === 'mentor') && (
        <div className={styles['button-add-criterion']}>
          <Button
            onClick={() => {
              dispatch(openAddCriterionWindow(true));
            }}
          >
            Add Criterion
          </Button>
        </div>
      )}
      <Table
        scroll={{ x: 400 }}
        columns={columns}
        expandable={{
          expandedRowRender: record => (
            <div>
              <h3>Description:</h3>
              <p>{record.description}</p>
              <h3>Description Link:</h3>
              <a href={`${record.descriptionURL}`}>{record.descriptionURL}</a>
              <div>
                <Collapse>
                  <Panel header="Basic scope" key="1">
                    {storeCriterions.map(item => {
                      if (item.nameTask === record.name && item.categoryCriterionId === 0) {
                        return (
                          <Card title={item.title} bordered={false} style={{ margin: 10 }}>
                            <p>
                              <b>Min score:</b>
                              {' '}
                              {item.minScore}
                            </p>
                            <p>
                              <b>Max score:</b>
                              {' '}
                              {item.maxScore}
                            </p>
                            <p>
                              <b>Description:</b>
                              {' '}
                              {item.description}
                            </p>
                            <p>
                              <b>Only for mentor:</b>
                              {' '}
                              {String(item.onlyForMentor)}
                            </p>
                            {((currentRoleName === 'admin' || currentRoleName === 'trainer' || currentRoleName === 'mentor')) && <Button danger>Delete</Button>}
                          </Card>
                        );
                      }
                      return false;
                    })}
                  </Panel>
                  <Panel header="Advanced Scope" key="2">
                    {storeCriterions.map(item => {
                      if (item.nameTask === record.name && item.categoryCriterionId === 1) {
                        return (
                          <Card title={item.title} bordered={false} style={{ margin: 10 }}>
                            <p>
                              <b>Min score:</b>
                              {' '}
                              {item.minScore}
                            </p>
                            <p>
                              <b>Max score:</b>
                              {' '}
                              {item.maxScore}
                            </p>
                            <p>
                              <b>Description:</b>
                              {' '}
                              {item.description}
                            </p>
                            <p>
                              <b>Only for mentor:</b>
                              {' '}
                              {String(item.onlyForMentor)}
                            </p>
                            {((currentRoleName === 'admin' || currentRoleName === 'trainer' || currentRoleName === 'mentor')) && <Button danger>Delete</Button>}
                          </Card>
                        );
                      }
                      return false;
                    })}
                  </Panel>
                  <Panel header="Extra Scope" key="3">
                    {storeCriterions.map(item => {
                      if (item.nameTask === record.name && item.categoryCriterionId === 2) {
                        return (
                          <Card title={item.title} bordered={false} style={{ margin: 10 }}>
                            <p>
                              <b>Min score:</b>
                              {' '}
                              {item.minScore}
                            </p>
                            <p>
                              <b>Max score:</b>
                              {' '}
                              {item.maxScore}
                            </p>
                            <p>
                              <b>Description:</b>
                              {' '}
                              {item.description}
                            </p>
                            <p>
                              <b>Only for mentor:</b>
                              {' '}
                              {String(item.onlyForMentor)}
                            </p>
                            {((currentRoleName === 'admin' || currentRoleName === 'trainer' || currentRoleName === 'mentor')) && <Button danger>Delete</Button>}
                          </Card>
                        );
                      }
                      return false;
                    })}
                  </Panel>
                  <Panel header="Fines" key="4">
                    {storeCriterions.map(item => {
                      if (item.nameTask === record.name && item.categoryCriterionId === 3) {
                        return (
                          <Card title={item.title} bordered={false} style={{ margin: 10, padding: 0 }}>
                            <p>
                              <b>Min score:</b>
                              {' '}
                              {item.minScore}
                            </p>
                            <p>
                              <b>Max score:</b>
                              {' '}
                              {item.maxScore}
                            </p>
                            <p>
                              <b>Description:</b>
                              {' '}
                              {item.description}
                            </p>
                            <p>
                              <b>Only for mentor:</b>
                              {' '}
                              {String(item.onlyForMentor)}
                            </p>
                            {((currentRoleName === 'admin' || currentRoleName === 'trainer' || currentRoleName === 'mentor')) && <Button danger>Delete</Button>}
                          </Card>
                        );
                      }
                      return false;
                    })}
                  </Panel>
                </Collapse>
              </div>
            </div>
          ),
          rowExpandable: record => record.description !== 'Not Expandable',
        }}
        dataSource={a}
      />
      <Modal
        visible={addCriterion}
        onCancel={() => {
          dispatch(openAddCriterionWindow(false));
          dispatch(changeSuccessAlert(false));
          dispatch(changeErrorAlert(false));
        }}
        title="Add criterion"
        footer={null}
      >
        <div>
          <Form name="addCriterion" layout="vertical" onFinish={addCriterionClick}>
            <Form.Item
              label="Name task"
              name="nameTask"
              rules={[{ required: true, message: 'Please select name task!' }]}
            >
              <Select placeholder="Select name task...">
                {a.map(item => (
                  <Option value={item.name}>{item.name}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Criterion Category"
              name="categoryCriterionId"
              rules={[{ required: true, message: 'Please select criterion category!' }]}
            >
              <Select placeholder="Select criterion category...">
                {criterionCategoriesForm.map(item => (
                  <Option value={item.id}>{item.name}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Min score"
              name="minScore"
              rules={[{ required: true, message: 'Please input min score!' }]}
            >
              <InputNumber defaultValue={0} />
            </Form.Item>
            <Form.Item
              label="Max score"
              name="maxScore"
              rules={[{ required: true, message: 'Please input max score!' }]}
            >
              <InputNumber defaultValue={0} />
            </Form.Item>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please input title criterion!' }]}
            >
              <Input placeholder="Input title criterion..." />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input description criterion!' }]}
            >
              <TextArea placeholder="Input description criterion..." />
            </Form.Item>
            <Form.Item
              label="Only for mentor"
              name="onlyForMentor"
              rules={[{ required: true, message: 'Please select only for mentor!' }]}
            >
              <Select placeholder="Select only for mentor...">
                <Option value={0}>No</Option>
                <Option value={1}>Yes</Option>
              </Select>
            </Form.Item>
            <Form.Item className={styles['form-add-course']}>
              <Button type="primary" htmlType="submit">
                Add criterion
              </Button>
            </Form.Item>
          </Form>
          <div className={styles['form-add-course']}>{criterionSpin && <Spin />}</div>
          <div className={styles['form-add-course']}>
            {successAlert && <Alert message={successText} type="success" />}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Tasks;
