import React from 'react'
import {
  Form,
  Input,
  Button,
  Select as AntSelect,
  Checkbox as AntCheckBox
} from 'antd'
export { Form } from 'antd'

const Option = AntSelect.Option

export function Text ({ label, name, required, ...props }) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required
          //   message: `لطفا ${label} را وارد کنید.!`
        }
      ]}
    >
      <Input />
    </Form.Item>
  )
}

export function Select ({ label, name, required, options }) {
  return (
    <Form.Item name={name} label={label} rules={[{ required }]}>
      <AntSelect>
        {options.map(({ label, value }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </AntSelect>
    </Form.Item>
  )
}

export function Checkbox ({ name, label }) {
  return (
    <Form.Item name={name} valuePropName='checked'>
      <AntCheckBox>{label}</AntCheckBox>
    </Form.Item>
  )
}

export function Submit ({ label, ...props }) {
  return (
    <Form.Item>
      <Button type='primary' htmlType='submit' {...props}>
        {label}
      </Button>
    </Form.Item>
  )
}
