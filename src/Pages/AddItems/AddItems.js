import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import auth from '../../firesbase.init';
import Loading from '../Shared/Loading/Loading';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/inventories'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                navigate('/home');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary text-uppercase fw-bold mt-3'>Add Items to Inventory</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 p-2' placeholder='Inventory Item Name' {...register("name", { required: true, maxLength: 70 })} />
                <input className='mb-3 p-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 p-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3 p-2' placeholder='Suplier Name' type="text" {...register("suplierName")} />
                <input className='mb-3 p-2' type="text" value={user.email}{...register('email')} readOnly />
                <input className='mb-3 p-2' placeholder='Photo URL' type="text" {...register("image")} />
                <textarea className='mb-3 p-2' placeholder='Give Description' type="text" {...register("description")} />
                <input type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItems;