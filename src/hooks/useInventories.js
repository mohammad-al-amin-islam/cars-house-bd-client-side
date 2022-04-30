import { useEffect, useState } from "react";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/inventories'
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);
    return [inventories, setInventories];
}

export default useInventories;