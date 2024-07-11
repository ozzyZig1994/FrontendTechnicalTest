import React from 'react';
import './ListItemComponent.css';

export const ListItemComponent = ({ matches, displayRepos = false }) => {
    const handleOnClick = () => {
        console.log('Clicked!!')
    }

    return (
        <div className='content'>
            { !displayRepos ? (
                matches.map(item => (
                    <div onClick={ handleOnClick } className='list-item' key={ item.id }>
                        <img className='avatar' src={item.avatar_url} alt="avatar"/>
                        <span>{ item.login }</span>
                        <span>+</span>
                    </div>
                ))
            ) : (
                matches.map(item => (
                    <div className='repo-card' key={ item.id }>
                        <h3>{ item.name }</h3>
                        <span>{ item.full_name }</span>
                        <small><b>Created at</b>: { item.created_at }</small>
                        <div className='details'>
                            <small><b>Stars:</b> { item.stargazers_count }</small>
                            <small><b>Watchers:</b> { item.watchers_count }</small>
                            <small><b>Forks:</b> { item.forks }</small>
                            <small><b>Language:</b> { item.language }</small>
                        </div>
                    </div>
                ))
            ) }
        </div>
    )
}
