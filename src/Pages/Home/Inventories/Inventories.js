import React from 'react';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';
import { Link } from 'react-router-dom';
const Inventories = () => {

    const [inventories] = useInventories();

    return (
        <div className='mt-5'>
            <h1 className='text-center text-success fw-bold my-3'>Inventory Items:{inventories.length}</h1>
            <div className='bg-light '>
                <div className="container mt-5 py-3">
                    <div className="row row-cols-sm--1 row-cols-lg-3 g-4">
                        {
                            inventories.length <= 6 ?
                                inventories.map(inventory => <Inventory
                                    key={inventory._id}
                                    inventory={inventory}
                                ></Inventory>)
                                : inventories.slice(0, 6).map(inventory => <Inventory
                                    key={inventory._id}
                                    inventory={inventory}
                                ></Inventory>)
                        }
                    </div>
                </div>
                <div className="text-center mt-5">
                <Link className='text-decoration-none btn btn-secondary ' to='/manage-inventories'>Manage Inventories</Link>
            </div>
            </div>
        </div>
    );
};

export default Inventories;