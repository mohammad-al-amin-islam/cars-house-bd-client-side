import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firesbase.init";
import Manageinventory from "../ManageInventories/ManageInventory/Manageinventory";
import Loading from "../Shared/Loading/Loading";

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const email = user?.email;
  useEffect(() => {
    if (loading) {
      return <Loading></Loading>;
    }
  }, [loading]);
  useEffect(() => {
    const getMyItems = async () => {
      const url = `https://cars-house-bd-server-side.onrender.com/myinventories?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getMyItems();
  }, [email, navigate]);

  //delete data from my items
  const handleDeleteBtn = (id) => {
    const confirm = window.confirm("Want to delete this item?");
    if (confirm) {
      const url = `https://cars-house-bd-server-side.onrender.com/inventory-delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const rest = myItems.filter((inventory) => inventory._id !== id);
          setMyItems(rest);
          toast.success("Items Deleted Successfully");
        });
    }
  };
  return (
    <div className="container">
      <h2 className="text-center text-primary text-uppercase mt-3 fw-bold">
        My Items List
      </h2>
      {myItems.length === 0 ? (
        <h1 className="text-center text-danger mt-5">No Items Added Yet </h1>
      ) : (
        myItems.map((inventory) => (
          <Manageinventory
            key={inventory._id}
            inventory={inventory}
            handleDeleteBtn={handleDeleteBtn}
          ></Manageinventory>
        ))
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyItems;
<h1>My Items List</h1>;
