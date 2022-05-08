import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <div className='text-center bg-success text-white d-lg-flex justify-content-between align-items-center p-4'>
            <div className='d-flex justify-content-around px-4 order-2'>
                <p>Privacy Policy</p>
                <div style={{ height: '30px', width: '2px' }} className='bg-info mx-3'></div>
                <p>Terms and Conditions</p>
                <div style={{ height: '30px', width: '2px' }} className='bg-info mx-3'></div>
                <p>Contact Us</p>
            </div>
            <div className='order-1 '>
                <p className='px-4'>Copyright &copy;{today.getFullYear()}  All rights reserved by Al Amin</p>
            </div>
        </div>
    );
};

export default Footer;