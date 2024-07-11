import './SearchBoxComponent.css';
import { ListItemComponent } from '../ListItemComponent/ListItemComponent';

export const SearchBoxComponent = ({ list, search, setSearch, repoSearch = false }) => {

  const handleOnChange = (userName) => {
    setSearch(userName.target.value);
  }

  return (
    <div className='container'>
      <input className='search-bar' type="text" name='searchBar' value={search} placeholder='Search...' onChange={handleOnChange} />
      <ListItemComponent matches={list} displayRepos={repoSearch} />
    </div>
  )
}
