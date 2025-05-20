import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from './data/store';

console.log(import.meta.env)
createRoot(document.getElementById('root')!).render(
  <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
