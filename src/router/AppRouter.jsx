import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GithubRepositoriesScreen, GithubUsersScreen } from '../pages'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={ <GithubUsersScreen /> }/>
                <Route path='repositories' element={ <GithubRepositoriesScreen /> }/>
            </Routes>
        </>
    )
}
