import { useDispatch } from 'react-redux'
import { Text, Submit, Form } from '../utils/Field'
import { login } from '../../redux/actions/user'

const Login = () => {
  const dispatch = useDispatch()

  const onFinish = values => dispatch(login(values))

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Form name='basic' onFinish={onFinish}>
        <Text label='نام کاربری' name='username' />
        <Text label='رمزعبور' name='pass' />
        <Submit label='ورود' />
      </Form>
    </div>
  )
}

export default Login
