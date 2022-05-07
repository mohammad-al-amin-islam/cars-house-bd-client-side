import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firesbase.init';
import Manageinventory from '../ManageInventories/ManageInventory/Manageinventory';
import Loading from '../Shared/Loading/Loading'

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const email = user?.email;
    useEffect(() => {
        if (loading) {
            return <Loading></Loading>
        }
    }, [loading]);
    useEffect(() => {
        const getMyItems = async () => {
            const url = `http://localhost:5000/myinventories?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyItems(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }

        }
        getMyItems();
    }, [email, navigate]);
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