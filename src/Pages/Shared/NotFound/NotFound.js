import React from 'react';
import NotFoundImg from '../../../images/404-Pages.jpg'

const NotFound = () => {
    return (
        <div>
            <div>
                <img className='img-fluid' src={NotFoundImg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;