import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../action/contactAction'
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from 'react-router-dom'

const AddContact = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const createContact = (e) => {
        e.preventDefault()

        const newContact = {
            id: uuidv4(),
            name: name,
            phone: phone,
            email: email
        }

        dispatch(addContact(newContact))
        
        navigate('/');
    }

    return (
        <div className='card border-0 shadow'>
            <div className='card-header'>Add Contact</div>
            <div className='card-body'>
                <form className='form-group edit-form' onSubmit={(e) => createContact(e)}>
                    <input type="text" name="name" className='form-control' placeholder='Enter your Name'
                        value={name} onChange={e => setName(e.target.value)}
                    />
                    <input type="text" name="phone" className='form-control' placeholder='Enter your phone number' 
                        value={phone} onChange={e => setPhone(e.target.value)}
                    />
                    <input type="text" name="email" className='form-control' placeholder='Enter your email' 
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <button className='btn btn-primary' type='submit' >Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact