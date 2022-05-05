import { BriefcaseIcon, FingerPrintIcon, ShareIcon } from '@heroicons/react/solid';
import React from 'react';

const About = () => {
    return (
        <div className='py-5 bg-light'>
            <h1 className='text-center text-uppercase mb-4'>About Us</h1>
            <div className='container shadow p-3 bg-white rounded'>
                <div className="row ">
                    <div className="col-sm-12 col-lg-4">
                        <div className='text-center '>
                            <ShareIcon className='w-25 text-success'></ShareIcon>
                            <h2 className='text-primary'>Car Share Option</h2>
                            <p style={{ textAlign: 'justify' }}>We provide the best car sharing option.It reduces the number of vehicles on the road, kilometres driven and overall car ownership. Fewer vehicles on the road reduces congestion and CO2 emissions going into the atmosphere. It also reduces the need for additional parking allowing for the greater expansion of green spaces.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className='text-center '>
                            <FingerPrintIcon className='w-25 text-success'></FingerPrintIcon>
                            <h2 className='text-primary'>Secured Payment</h2>
                            <p style={{ textAlign: 'justify' }}>We also provides the most secure payment option.We know credit cards are easily the most secure and safe payment method to use when you shop online. Credit cards use online security features like encryption and fraud monitoring to keep your accounts and personal information safe. So we take payment using credit card.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className='text-center '>
                            <BriefcaseIcon className='w-25 text-success'></BriefcaseIcon>
                            <h2 className='text-primary'>Corporate Services</h2>
                            <p style={{ textAlign: 'justify' }}>We provide a range of executive cars and VIP transport to our corporate clients, ensuring their people get to where they need to be. We also focus on providing your company luxurious dependable corporate private car services with a positive attitude. Get your reliable ground transportation!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;