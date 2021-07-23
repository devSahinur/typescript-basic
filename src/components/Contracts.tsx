import React, { useState } from 'react';
import Contract from './Contract';

const Contracts = () => {
    const [contact, setContact] = useState('');
    const [contactList , setContactList] = useState<string[]>([])

    console.log('input text:', contact)
    const contractCreate = () =>{
        setContactList([...contactList, contact])
        setContact('')
    }

    console.log(contactList)

    return (
        <div>
            <h1>📄 Contact list</h1>
            <div className="form">
                <input 
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                    type="text" 
                    name='name' 
                    placeholder='Contact Name'
                 />
                 <button onClick={contractCreate}>Create</button>
            </div>

            {
                contactList.map((singleContact) => <Contract name={singleContact}/>)
            }
            <Contract name='sahinur' email='infosahinur@gamil.com'/>
        </div>
    );
};

export default Contracts;