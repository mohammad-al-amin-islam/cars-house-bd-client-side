import React from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Manageinventory from '../ManageInventory/Manageinventory';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();
    const handleDeleteBtn = id => {
        const confirm = window.confirm();
        if (confirm) {
            const url = `http://localhost:5000/inventory-delete/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const rest = inventories.filter(inventory => inventory._id !== id)
                    setInventories(rest);
                })
        }
    }
    return (
        <div className='container'>
            <h2 className='mt-3 text-center text-uppercase text-success'>Manage Your Inventories</h2>
            {
                inventories.map(inventory => <Manageinventory
                    key={inventory._id}
                    inventory={inventory}
                    handleDeleteBtn={handleDeleteBtn}
                ></Manageinventory>)
            }
            <div className="text-center mt-3">
                <Link className='text-decoration-none btn btn-secondary ' to='/add-items'>Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventories;