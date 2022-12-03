import axios from "axios";
import { useState, useEffect } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://cars-house-bd-server-side-production.up.railway.app/jwtlogin",
          { email }
        );
        setToken(data.token);
        localStorage.setItem("accessToken", data.token);
      }
    };
    getToken();
  }, [user]);
  return [token];
};
export default useToken;
