import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteTask } from '../features/tasks/taskSlice'

export const TaskList = () => {

    const dispatch = useDispatch()
    const tasksState = useSelector( state => state.tasks )

    const handleDelete = ( id ) => {
        dispatch( deleteTask( id ) )
    }
    
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                tasksState.map( task => (
                    <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
                        <header className='flex justify-between'>
                            <h3>{task.title}</h3>
                            <div className='flex gap-x-2'>
                                <NavLink 
                                    to={`edit/${task.id}`}
                                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                                >Edit</NavLink>

                                <button 
                                    onClick={ () => handleDelete( task.id ) }
                                    className="bg-red-500 px-2 py-1 text-xs rounded-md"
                                >Delete</button>
                            </div>
                        </header>
                        <p>{task.description}</p>
                    </div>
                ))
            }
        </div>
    )
}