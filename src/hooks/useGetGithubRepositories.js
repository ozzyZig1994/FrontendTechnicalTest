import { useEffect, useState } from 'react';

export const useGetGithubRepositories = () => {
    const [ gitHubRepositoriesList, setGitHubrepositoriesList ] = useState([]);
    const [ search, setSearch ] = useState('');

    const debouncing = (data) => {
        
        let list = [];
        data.forEach(element => list.push(element));
        search ? setGitHubrepositoriesList(list.filter(repo => repo.name === search || repo.name.startsWith(search))) 
           : setGitHubrepositoriesList([]);     
    }

    useEffect(() => {
        fetch('https://api.github.com/users/mojombo/repos')
        .then(response => response.json())
        .then(data => debouncing(data));
    }, [search, gitHubRepositoriesList]);
    
    return {
        gitHubRepositoriesList,
        search,
        setSearch
    }
}
