import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact } from '../../action/contactAction'
import { useNavigate, useParams } from 'react-router-dom'
import { EDIT_CONTACT } from '../../constant/type'

const EditContact = () => {
    let { id } = useParams()
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const contact = useSelector(state => state.ContactReducer.contact)
    
    useEffect(() => {
        dispatch(getContact(id))
    }, [id])

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if(contact){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
    },[contact])

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: EDIT_CONTACT,
            payload: {
                id, name, phone, email
            }
        })

        navigate('/')
    }

    return (
        <div className='card border-0 shadow'>
            <div className='card-header'>Edit Contact</div>
            <div className='card-body'>
                <form className='form-group edit-form' onSubmit={handleSubmit}>
                    <input type="text" name="name" className='form-control' placeholder='Enter your Name'
                        value={name} onChange={e => setName(e.target.value)}
                    />
                    <input type="text" name="phone" className='form-control' placeholder='Enter your phone number'
                        value={phone} onChange={e => setPhone(e.target.value)}
                    />
                    <input type="text" name="email" className='form-control' placeholder='Enter your email'
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <button className='btn btn-warning' type='submit' >Edit Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact