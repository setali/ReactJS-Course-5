import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import fa from 'antd/es/locale/fa_IR'
import App from './App'
import store from './redux/store'

ReactDOM.render(
  <ConfigProvider direction='rtl' locale={fa}>
    <ReduxProvider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ReduxProvider>
  </ConfigProvider>,
  document.getElementById('root')
)
