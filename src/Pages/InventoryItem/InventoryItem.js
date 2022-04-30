import React from 'react';
import useInventories from '../../hooks/useInventories';

const InventoryItem = () => {
    const [inventories] = useInventories();
    return (
        <div>
            <h1>This is inventory item{inventories.length}</h1>
        </div>
    );
};

export default InventoryItem;