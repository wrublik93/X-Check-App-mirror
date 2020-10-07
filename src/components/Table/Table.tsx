import {
  Table, Button, Popconfirm, Space,
} from 'antd';
import React from 'react';

import 'antd/lib/table/style/css';

const columns = [
  {
    title: 'Course',
    dataIndex: 'CourseName',
  },
  {
    title: 'Task',
    dataIndex: 'nameTask',
  },
  {
    title: 'Author',
    dataIndex: 'name',
  },
  {
    title: 'Action',
    dataIndex: '_id',
    key: '_id',
    render: () => (
      <Space>
        <Button>Edit</Button>
        <Popconfirm title="Sure to delete?">
          <Button>Delete</Button>
        </Popconfirm>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    CourseName: 'React',
    nameTask: 'X-Check-App',
    name: 'John Brown',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

const TasksTable = (): JSX.Element => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
);

export default TasksTable;
