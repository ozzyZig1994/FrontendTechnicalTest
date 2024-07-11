import React from 'react';
import { SearchBoxComponent, NavbarComponent } from '../../components';
import { useGetGithubRepositories } from '../../hooks'

export const GithubRepositoriesScreen = () => {
  const { gitHubRepositoriesList, search, setSearch } = useGetGithubRepositories();

  return (
    <>
      <NavbarComponent />
      <div className='container-fluid'>
        <h1 className='title'>Search for Github Repositories</h1>
        <hr />
        <SearchBoxComponent list={gitHubRepositoriesList} search={search} setSearch={setSearch} />
      </div>
    </>
  )
}
