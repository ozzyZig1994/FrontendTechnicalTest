import React from 'react';
import './GithubUsersScreen.css'
import { SearchBoxComponent } from '../../components';
import { useGetGithubUsers } from '../../hooks'

export const GithubUsersScreen = () => {
  const { gitHubUserList, search, setSearch } = useGetGithubUsers();

  return (
    <>
        <h1 className='title'>Search for Github Users</h1>
        <hr />
        <SearchBoxComponent list={gitHubUserList} search={search} setSearch={setSearch} />
    </>
  )
}
