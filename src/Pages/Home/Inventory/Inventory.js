import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { name, description, price, quantity, supplierName, image } = inventory;
    const navigate = useNavigate();
    return (
        <div>
            <div className="col">

                <div className="card h-100 border-0 shadow round" style={{ borderRadius: '20px' }}>
                    <div>
                        <h2 className='p-2 text-secondary'>{name}</h2>
                    </div>
                    <div className='p-4'>
                        <img height='200px' src={image} className="card-img-top border" alt="..." />
                        <div className='mt-2'>
                            <div className='d-flex justify-content-between'>
                                <p className='fw-bold'>Supplier Name:</p>
                                <p>{supplierName}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='fw-bold'>Quantity:</p>
                                <p >{quantity}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='fw-bold'>Price:</p>
                                <p className='fs-2 fw-bold text-info'>{price}</p>
                            </div>
                            <p><span className='fw-bold'>Description:</span> {description.slice(0, 90) + ' ' + '...'}</p>
                            <div className='text-center w-100 ' >
                                <button onClick={() => navigate(`/inventory/${inventory._id}`)} type="button" className="btn btn-outline-secondary mx-auto">Update Stock</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;