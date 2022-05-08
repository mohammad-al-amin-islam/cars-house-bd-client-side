import { useEffect, useState } from "react";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        const url = 'https://pure-thicket-30594.herokuapp.com/inventories'
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);
    return [inventories, setInventories];
}

export default useInventories;