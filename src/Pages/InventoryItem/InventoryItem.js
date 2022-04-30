import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {
    const { id } = useParams();
    const [inventoryDetails, setInventoryDetails] = useState({});
    const { image, name, price, quantity, sold, description, supplierName } = inventoryDetails;
    useEffect(() => {
        const url = `http://localhost:5000/inventories/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryDetails(data))
    }, [id]);
    return (
        <div className="bg-light">
            <div className='container py-5'>
                <div className="row gy-3">
                    <div className="col-sm-12 col-lg-8">
                        <h3 className='text-center text-success'>{name}</h3>
                        <img className='img-fluid' src={image} alt="" />
                        <p style={{ textAlign: 'justify' }} className='mt-3'><span className='fw-bold'>Description: </span>{description}</p>

                    </div>
                    <div className="col-sm-12 col-lg-4 shadow" >
                        <div className='d-flex align-items-center justify-content-center ' style={{ height: '70%' }}>
                            <div className='mt-5 pt-5'>
                                <p><span className='fw-bold '>Id</span>:{id}</p>
                                <p><span className='fw-bold'>Supplier Name:</span>:{supplierName}</p>
                                <p><span className='fw-bold'>Price</span>:{price}</p>
                                <p><span className='fw-bold'>Sold: </span>:{sold}</p>
                                <p><span className='fw-bold'>Quantity: </span>:{quantity}</p>
                                <div className='w-100 text-center'>
                                    <button className='btn btn-success mb-5 '>Delivered</button>
                                    <form>
                                        <label className='mt-3 fw-bold' htmlFor="stock">Want to Restock Items?</label>
                                        <br />
                                        <input type="text" name="stock" placeholder='ReStock Quantity' />
                                        <br />
                                        <input className='mt-3' type="submit" value="Add" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;