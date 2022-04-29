import React from 'react';
import bannerImg from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div className='container-fluid bg-light' style={{ height: '100vh' }}>
            <div className="row d-flex flex-direction-column align-items-center">
                <div className="col-lg-6">
                    <div className='mt-2'>
                        <h1 className='text-secondary fw-bold fs-1 text-uppercase'>The Best Car Dealer</h1>
                        <p className='text-primary'>We offer high quality vehicles and unbelievable prices and creates pleasent buying experiences</p>
                        <button type="button" class="btn btn-outline-secondary">Read More</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className='mt-5'>
                        <img className='img-fluid' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;