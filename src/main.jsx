import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from './app/store'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </React.StrictMode>
)
