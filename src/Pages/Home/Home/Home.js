import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firesbase.init';
import Loading from '../../Shared/Loading/Loading';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import TotalCount from '../TotalCount/TotalCount';

const Home = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <About></About>
            <TotalCount></TotalCount>
            <div className="text-center mt-5">
                <Link className='text-decoration-none btn btn-secondary ' to='/manage-inventories'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Home;