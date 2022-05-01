import React from 'react';
import { TrashIcon } from '@heroicons/react/solid'

const Manageinventory = ({ inventory, handleDeleteBtn }) => {
    const { _id, name, image } = inventory;
    return (
        <div>
            <div className='text-center d-lg-flex justify-content-between my-3 shadow p-3 '>
                <div>
                    <img width='200px' src={image} alt="" />
                </div>
                <h3 className='d-flex align-items-center'>{name}</h3>
                <div className='d-lg-flex align-items-center'>

                    <button onClick={() => handleDeleteBtn(_id)} className='bg-Info border-0 rounded-pill'>
                        <TrashIcon style={{ height: '50px', width: '50px' }} className="text-danger" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Manageinventory;