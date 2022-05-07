import { CheckCircleIcon, CurrencyBangladeshiIcon, UsersIcon } from '@heroicons/react/solid';
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './TotalCount.css'

const TotalCount = () => {
    return (
        <div className='p-4 bg-img'>
            <div className="row">
                <div className="col-sm-12 col-lg-4">
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <div className='text-center text-white'>
                                <CurrencyBangladeshiIcon className='w-25 ' />
                                <h1> {isVisible ? <CountUp end={750000} /> : null}</h1>
                                <p className='fw-bold'>Amount Sold</p>
                            </div>
                        )}
                    </VisibilitySensor>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <div className='text-center text-white'>
                                <UsersIcon className='w-25'></UsersIcon>
                                <h1> {isVisible ? <CountUp start={0} end={100} /> : null}%</h1>
                                <p className='fw-bold'>Customer Satisfaction</p>
                            </div>
                        )}
                    </VisibilitySensor>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <div className='text-center text-white'>
                                <CheckCircleIcon className='w-25 ' />
                                <h1> {isVisible ? <CountUp end={500} /> : null}</h1>
                                <p className='fw-bold'>Car Sold</p>
                            </div>
                        )}
                    </VisibilitySensor>
                </div>

            </div>
        </div>
    );
};

export default TotalCount;