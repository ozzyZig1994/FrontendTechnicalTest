import { useEffect, useState } from 'react';

export const useGetGithubUsers = () => {
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
    
    return {
        gitHubUserList,
        search,
        setSearch
    }
}
