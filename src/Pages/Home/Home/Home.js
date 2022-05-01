import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
        </div>
    );
};

export default Home;