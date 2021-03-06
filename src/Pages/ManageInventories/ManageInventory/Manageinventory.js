import React from 'react';
import { TrashIcon } from '@heroicons/react/solid'

const Manageinventory = ({ inventory, handleDeleteBtn }) => {
    const { _id, name, image, quantity } = inventory;
    return (
        <div>
            <div className='bg-info rounded item-focus text-center d-lg-flex justify-content-between my-3  p-3'>
                <div className='rounded'>
                    <img width='200px' src={image} alt="" />
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center text-white'>
                    <h3 >{name}</h3>
                    <p>Quantity:{quantity}</p>
                </div>
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