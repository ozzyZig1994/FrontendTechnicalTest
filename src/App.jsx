import { useEffect, useState } from 'react'
import './App.css'

export const App = () => {
  const [ gitHubUserList, setGitHubUserList ] = useState([]);
  const [ search, setSearch ] = useState('');

  const debouncing = (data) => {
    let list = [];
    data.forEach(element => list.push(element));
    search ? setGitHubUserList(list.filter(user => user.login === search || user.login.startsWith(search))) 
           : setGitHubUserList([]);     
  }

  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => debouncing(data));
  }, [search, gitHubUserList]);

  const handleOnChange = (userName) => {
    setSearch(userName.target.value);
  }

  return (
    <div className='container'>
      <h2>Search for Github User</h2>
      <input className='search-bar' type="text" name='searchBar' value={search} placeholder='Search...' onChange={handleOnChange} />
      <div>
        <ul>
          {gitHubUserList.map(item => ( <li key={ item.id } >{ item.login }</li> ))}
        </ul>
      </div>
    </div>
  )
}
