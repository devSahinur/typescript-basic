import React from 'react';

interface IProps {
    name: string,
    email?: string
}

const Contract = ({name, email = 'N/A'}: IProps) => {
    return (
        <div className='card'>
            <p>
                <strong>💂‍♂️ Name:</strong> {name}
            </p>
            <p>
                <strong>📨 Email:</strong> {email}
            </p>
        </div>
    );
};

export default Contract;