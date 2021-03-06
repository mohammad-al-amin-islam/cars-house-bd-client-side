import React from 'react';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center fs-5' style={{ height: '500px' }}>
            <div className="spinner-border" style={{ width: '3rem', height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;