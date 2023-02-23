import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <div className='flex items-center justify-center bg-zinc-900'>
        <App />
      </div>
    </Provider>
  </React.StrictMode>
)