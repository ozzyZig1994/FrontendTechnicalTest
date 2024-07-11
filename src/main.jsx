import React from 'react';
import ReactDOM from 'react-dom/client';
import { GithubUsersScreen, GithubRepositoriesScreen, MainScreen } from './pages';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <MainScreen />
   </BrowserRouter>
  </React.StrictMode>,
)
