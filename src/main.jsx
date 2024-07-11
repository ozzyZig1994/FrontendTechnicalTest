import React from 'react';
import ReactDOM from 'react-dom/client';
import { GithubUsersScreen, GithubRepositoriesScreen } from './pages';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GithubUsersScreen /> */}
    <GithubRepositoriesScreen />
  </React.StrictMode>,
)
