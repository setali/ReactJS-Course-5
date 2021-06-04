import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'
import axios from 'axios'
import { Form, Text, Select, Checkbox, Submit } from '../utils/Field'

const GENDER_OPTIONS = [
  { label: 'مرد', value: 'male' },
  { label: 'زن', value: 'female' }
]

function New () {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function onFinish (values) {
    console.log(values)
    setLoading(true)
    axios
      .post('https://jsonplaceholder.typicode.com/users', values)
      .then(response => {
        message.success(`کاربر ${response.data.name} با موفقیت ایجاد شد.`)
        history.push('/person')
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }

  return (
    <div>
      <Form name='basic' onFinish={onFinish}>
        <Text label='نام کاربری' name='username' required={true} />
        <Text label='نام' name='name' required={true} />
        <Select label='جنسیت' name='gender' options={GENDER_OPTIONS} />
        <Checkbox label='مدیر' name='admin' />
        <Submit label='ذخیره' loading={loading} />
      </Form>
    </div>
  )
}

export default New
