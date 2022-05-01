import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firesbase.init';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <div className="text-center mt-3">
                <Link className='text-decoration-none btn btn-secondary ' to='/manage-inventories'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Home;