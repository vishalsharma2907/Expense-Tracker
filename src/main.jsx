import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //! Provider-->Makes the Redux store available to all components in the app */}
    {/* //!store={store}--> Passes your custom store created in store.js to Provider*/}
    <Provider store={store}>
    <App />  
    </Provider>
  </StrictMode>,
)
