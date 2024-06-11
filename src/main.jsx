import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserProfile from './components/UserProfile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <UserProfile/>
  </React.StrictMode>,
)
