import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firesbase.init';
import Manageinventory from '../ManageInventories/ManageInventory/Manageinventory';
// import useInventories from '../../hooks/useInventories';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {
        const url = `http://localhost:5000/myinventories?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, [email]);
    const handleDeleteBtn = id => {
        const confirm = window.confirm();
        if (confirm) {
            const url = `http://localhost:5000/inventory-delete/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const rest = myItems.filter(inventory => inventory._id !== id)
                    setMyItems(rest);
                })
        }
    }
    return (
        <div className='container'>
            <h1 className='text-center text-primary text-uppercase mt-3'>My Items List</h1>
            {
                myItems.map(inventory => <Manageinventory
                    key={inventory._id}
                    inventory={inventory}
                    handleDeleteBtn={handleDeleteBtn}
                ></Manageinventory>)
            }
        </div>
    );
};

export default MyItems; <h1>My Items List</h1>