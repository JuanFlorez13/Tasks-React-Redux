import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

    const tasksState = useSelector( state => state.tasks )

    return (
        <div className='w-4/6'>
            <header className='flex justify-between items-center py-4'>
                <h1>Task {tasksState.length}</h1>
                <NavLink 
                    className="bg-indigo-600 px-2 py-1 rounded-sm text-sm" 
                    to="/" exact activeClassName="active"
                >Task List</NavLink>
                
                <NavLink 
                    className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"  
                    to="/add" exact activeClassName="active"
                >Create Task</NavLink>
            </header>
        </div>
    )
}