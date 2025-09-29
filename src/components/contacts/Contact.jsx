import React from 'react'
import Avatar from 'react-avatar'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact } from '../../action/contactAction'

const Contact = ({ contact, selectAll }) => {
    const dispatch = useDispatch()
    const { phone, email, name, id } = contact
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input
                        checked={selectAll}
                        type="checkbox"
                        className="custom-control-input"
                    />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar name={name} size='40' round={true} className='Avatar' />{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className='actions'>
                <Link to={`/contacts/edit/${id}`} className='material-icons mr-2'><span>edit</span></Link>
                <Link to="#!" onClick={e => { e.preventDefault(); dispatch(deleteContact(id))}} className='material-icons text-danger'><span>remove_circle</span></Link>
            </td>
        </tr>
    )
}

export default Contact