import React, { useState } from 'react';
import Contract from './Contract';

interface IContact {
    name: string;
    email:string;
}

const Contracts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contactList , setContactList] = useState<IContact[]>([])

    const contractCreate = () =>{
        setContactList([...contactList, contact])
        setContact({
            name: '',
            email: ''
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setContact({...contact , [e.target.name]: e.target.value})

    const handleRemove =(email : string) =>{
        const newContactList = contactList.filter(c => c.email !== email)
        setContactList(newContactList)
    }
    console.log(contactList)
    
    return (
        <div>
            <h1>📄 Contact list</h1>
            <div className="form">
                <input 
                    onChange={onChange}
                    value={contact.name}
                    type="text" 
                    name='name' 
                    placeholder='Contact Name'
                 />
                <input 
                    onChange={onChange}
                    value={contact.email}
                    type="text" 
                    name='email' 
                    placeholder='Contact Email'
                 />
                 <button onClick={contractCreate}>Create</button>
            </div>
            {
                contactList.map((con) => <Contract key={con.name} name={con.name} email={con.email} handleRemove={handleRemove} />)
            }
        </div>
    );
};

export default Contracts;