import './SearchBoxComponent.css';
import { ListItemComponent } from '../ListItemComponent/ListItemComponent';
import { useGetGithubUsers } from '../../hooks/useGetGithubUsers';

export const SearchBoxComponent = () => {
  const { gitHubUserList, search, setSearch } = useGetGithubUsers();

  const handleOnChange = (userName) => {
    setSearch(userName.target.value);
  }

  return (
    <div className='container'>
      <input className='search-bar' type="text" name='searchBar' value={search} placeholder='Search...' onChange={handleOnChange} />
      <ListItemComponent matches={gitHubUserList}/>
    </div>
  )
}
