import React, { useEffect, useReducer } from 'react'
import { TodoList } from '../components/TodoList'
import { useForm } from '../hook/useForm'
import { todoReducer } from './appReducer'


import './style.css'
export const TodoReducer = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
       localStorage.setItem('todos',JSON.stringify(todos))

   },[todos])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (desc.trim().length <= 1) {
            return
        }


        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
        reset()
    }
    const handleDelete = (todoId) => {
    
        const action = {
            type: 'delete',
            payload: todoId
        }
        
        dispatch(action)
    }
    
    const handleToggle = (todoId) => {
        const action = {
            type: 'toogle',
            payload: todoId
        }

        dispatch(action)
    }
    const [{desc}, handleInputChange, reset]= useForm({
        desc: ""
    })
    return (
        <div>
            <h1>Total de tareas ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle= {handleToggle}
                    
                    />
                </div>
                
                
                
                <div className="col-5">
                        <h4>Agregar TODO</h4>
                        <hr />

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="desc"
                                className="form-control"
                                placeholder="Introduce una tarea..."
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={desc}
                            />
                            <div className="d-grid gap-2">
                
                                <button className="btn btn-outline-primary mt-1" type= "submit">Agregar</button>
                            </div>
                        </form>
                </div>
                    
            </div>
                
        </div>
    )
}
