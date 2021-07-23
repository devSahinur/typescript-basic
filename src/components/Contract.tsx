import React from 'react';

interface IProps {
    name: string,
    email: string,
    handleRemove: (email: string) => void
}

const Contract = ({name, email, handleRemove}: IProps) => {
    return (
        <div className='card'>
            <p>
                <strong>💂‍♂️ Name:</strong> {name}
            </p>
            <p>
                <strong>📨 Email:</strong> {email}
            </p>
            <button onClick={() => handleRemove(email)}>❌ Remove</button>
        </div>
    );
};

export default Contract;