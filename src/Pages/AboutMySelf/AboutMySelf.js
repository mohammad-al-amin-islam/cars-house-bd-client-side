import React from 'react';
import './AboutMySelf.css';
import myImg from '../../images/me1.jpg'

const AboutMySelf = () => {
    return (
        <div className='w-100 py-4 bg-light'>
            <div className='about-area mx-auto shadow-lg p-3 rounded'>
                <h2 className='text-center text-primary text-uppercase fw-bold'>About MySelf</h2>
                <div className=''>
                    <div className='text-center'>
                        <img className='w-50 mb-2' src={myImg} alt="" />
                        <h4 >Name: Md. Al Amin Islam</h4>
                    </div>
                    <div>
                        <p style={{ textAlign: 'justify' }}>To enhance my qualities with the opportunities at hand and build up my experiences further in order to pursue strong engineering and technological skills as a successful Computer Engineer with focused work ethics, an ability to increase my knowledge and contribute to significant software development. To achieve this goal i will put my best with giving no excuses of other problems.And i will try to learn from mistake insha allah and come back stongly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMySelf;