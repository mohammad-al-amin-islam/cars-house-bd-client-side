import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firesbase.init';
import Manageinventory from '../ManageInventories/ManageInventory/Manageinventory';
import Loading from '../Shared/Loading/Loading'

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (loading) {
            return <Loading></Loading>
        }
    }, [])
    const email = user?.email;
    useEffect(() => {
        const url = `http://localhost:5000/myinventories?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, [email]);
    const handleDeleteBtn = id => {
        const confirm = window.confirm('Are Sure To Delete This Item');
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
            <h2 className='text-center text-primary text-uppercase mt-3 fw-bold'>My Items List</h2>
            {
                myItems.length === 0 ?
                    <h1 className='text-center text-danger mt-5'>No Items Added Yet </h1>
                    : myItems.map(inventory => <Manageinventory
                        key={inventory._id}
                        inventory={inventory}
                        handleDeleteBtn={handleDeleteBtn}
                    ></Manageinventory>)
            }
        </div>
    );
};

export default MyItems; <h1>My Items List</h1>