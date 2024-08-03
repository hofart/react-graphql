import React from 'react'
import ReactDOM from 'react-dom/client'
import ApolloClient from "./infrastructure/apollo"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloClient>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </ApolloClient>
  </React.StrictMode>,
)
