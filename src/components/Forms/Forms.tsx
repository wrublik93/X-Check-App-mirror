import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Radio from 'antd/lib/radio';
import React, { FunctionComponent } from 'react';

import 'antd/lib/button/style/index.css';
import 'antd/lib/form/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/radio/style/index.css';
import { FormInputProps, FormInfoProps, FormRadioGroupProps } from '@/types/props';
import { createHashKeysArray } from '@/utils/utils';

interface FormArgs {
  formInputList: FormInputProps[];
  formInfo: FormInfoProps;
  formRadioGroupList?: FormRadioGroupProps[];
}

const Forms: FunctionComponent<FormArgs> = ({ formInputList, formInfo, formRadioGroupList }) => {
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
      <Form name={formInfo.nameForm}>
        {listInputItems}
        {listRadioGroupItems}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {formInfo.nameButton}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Forms;
