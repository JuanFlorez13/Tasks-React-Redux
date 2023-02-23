import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { addTask, editTask } from '../features/tasks/taskSlice'
export const  TaskForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(params.id) {
            dispatch( 
                editTask(task)
            )
        } else {
            dispatch( 
                addTask({
                    ...task,
                    id: uuid()
                })
            )
        }
        navigate('/')
    }

    useEffect(() => {
        if(params.id) {
            setTask(tasks.find(task => task.id === params.id));
        }
    }, [params.id, tasks])

    return (
        <form onSubmit={ handleSubmit } className="bg-zinc-800 max-w-sm p-4 mb-2">
            <label htmlFor='title' className='block text-xs font-bold mb-1'> Task:</label>
            <input 
                name="title" 
                type="text" 
                placeholder="Title..." 
                onChange={ handleInputChange }
                value={ task.title }
                className='block w-full p-2 rounded-md bg-zinc-600 mb-2'
            />

            <label htmlFor='description' className='block text-xs font-bold mb-1'> Description:</label>
            <textarea 
                name="description" 
                placeholder="Description..." 
                onChange={ handleInputChange }
                value={ task.description }
                className='block w-full p-2 rounded-md bg-zinc-600 mb-2'
            ></textarea>

            <button type="submit" className='bg-indigo-600 px-2 py-1'>Save</button>
        </form>
    )
}