import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './config/routes.tsx'
import { ApolloProvider } from '@apollo/client'
import client from '../infra/http/apolloClient.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MyRoutes />
    </ApolloProvider>
  </React.StrictMode>,
)
