import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Contact from './Contact'
import { clearSection, deleteSlectedContact, selectAllContact } from '../../action/contactAction'

const Contacts = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.ContactReducer.contacts)
    const selectedContacts = useSelector(state => state.ContactReducer.selectedContacts)

    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map(contact => contact.id)))
        } else {
            dispatch(clearSection())
        }
    }, [selectAll, contacts, dispatch])

    return (
        <div>
            {selectedContacts.length > 0 ? (
                <button
                    className="btn btn-danger mb-3"
                    onClick={() => dispatch(deleteSlectedContact())}
                >
                    Delete All
                </button>
            ) : null}
            <table className="table shadow">
                <thead>
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input
                                    id="selectAll"
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={selectAll}
                                    onClick={() => { setSelectAll(!selectAll) }}
                                />
                                <label
                                    htmlFor="selectAll"
                                    className="custom-control-label"
                                ></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Contact contact={contact} key={contact.id} selectAll={selectAll} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts