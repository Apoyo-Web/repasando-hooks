import React from 'react'
import { useForm } from './hook/useForm'

export const HookApp = () => {

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass:''

    })

    const { nombre, email, pass } = formValues
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(formValues)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Nombre:</label><br/>
                <input type="text" name="nombre" id="nombre" value={nombre} onChange={ handleInputChange}/><br/>
                <label >Email:</label><br />
                <input type="email" name="email" id="email" value={email} onChange={handleInputChange}/><br />
                <label >Password</label><br />
                <input type="password" name="pass" id="pass" value={pass} onChange={handleInputChange} /><br />
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}
