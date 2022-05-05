import React from 'react';
import NotFoundImg from '../../../images/404-Pages.jpg'

const NotFound = () => {
    return (
        <div className='container mt-5 '>
            <div>
                <img className='img-fluid rounded' src={NotFoundImg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;