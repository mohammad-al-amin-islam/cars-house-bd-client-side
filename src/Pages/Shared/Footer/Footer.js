import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <div className='text-center mt-5 bg-success'>
            <p className='p-4 text-white'>Copyright &copy;{today.getFullYear()}  All rights reserved by Al Amin</p>
        </div>
    );
};

export default Footer;