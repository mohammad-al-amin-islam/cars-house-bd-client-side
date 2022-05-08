import React from 'react';
import './AboutMySelf.css';
import myImg from '../../images/me1.jpg'

const AboutMySelf = () => {
    return (
        <div className='bg-light '>
            <div className="container">
                <div className="row m-3">
                    <div className="col-sm-12 col-lg-6 mb-2">
                        <div className='bg-info shadow-lg p-3 rounded'>
                            <h2 className='text-center text-success text-uppercase fw-bold'>About MySelf</h2>
                            <div className='text-white'>
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
                    <div className="col-sm-12 col-lg-6">
                        <div className='bg-info shadow-lg p-3 rounded'>
                            <h2 className='text-center text-success text-uppercase fw-bold'>About this Project</h2>
                            <div className='text-white'>
                                <div className='text-center'>
                                    <h4 >About Cars House BD</h4>
                                    <p>This is a warehouse management website.Using this site user can update quantity,restock quantity and also delete or add inventory.</p>
                                </div>
                                <div>
                                    <h4>The key feature of this project</h4>
                                    <ul>
                                        <li>In home pages there is some section header,banner,inventories two extra section and footer.</li>
                                        <li>To see inventtories you must login ,if you have no account you can also register.</li>
                                        <li>In manage inventories you can see all of data also you can delete it from here.</li>
                                        <li>Using add items routes user can add new inventory items.</li>
                                        <li>And in my items pages user can see the items he/she added.</li>
                                        <li>And in blogs there is some question answer and in about there is short description about me.</li>
                                    </ul>
                                    <h4>Technologies used</h4>
                                    <ul>
                                        <li>Firebase, React Toastify ,React Router,Bootstrap</li>
                                        <li> React Firebase hooks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMySelf;