import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    const url =
      "https://cars-house-bd-server-side-production.up.railway.app/inventories";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return [inventories, setInventories];
};

export default useInventories;
