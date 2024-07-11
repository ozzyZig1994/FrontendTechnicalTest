import React from 'react';
import './ListItemComponent.css';

export const ListItemComponent = ({ matches }) => {
    const handleOnClick = () => {
        console.log('Clicked!!')
    }

    return (
        <div className='content'>
            { matches.map(item => (
                <div onClick={ handleOnClick } className='list-item' key={ item.id }>
                    <img className='avatar' src={item.avatar_url} alt="avatar"/>
                    <span>{ item.login }</span>
                    <span>+</span>
                </div>
            ))}
        </div>
    )
}
