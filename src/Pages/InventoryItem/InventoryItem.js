import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const InventoryItem = () => {
  const { id } = useParams();
  const [inventoryDetails, setInventoryDetails] = useState({});
  const [isReload, setReload] = useState(false);

  const { image, name, price, quantity, sold, description, supplierName } =
    inventoryDetails;
  useEffect(() => {
    const url = `https://cars-house-bd-server-side.onrender.com/inventories/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryDetails(data));
  }, [id, isReload]);

  //for delivery
  const handleDeliverBtn = () => {
    const updateQuantity = parseInt(inventoryDetails.quantity) - 1;
    const data = { quantity: updateQuantity };
    const url = `https://cars-house-bd-server-side.onrender.com/inventories/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success:', data);
        setReload(!isReload);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //for update stock
  const handleReStockForm = (event) => {
    event.preventDefault();
    const stock = event.target.stock.value;
    if (stock) {
      const updateQuantity =
        parseInt(inventoryDetails.quantity) + parseInt(stock);
      const data = { quantity: updateQuantity };
      const url = `https://cars-house-bd-server-side.onrender.com/inventories/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('Success:', data);
          setReload(!isReload);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      event.target.reset();
    }
  };

  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row gy-3">
          <div className="col-sm-12 col-lg-8">
            <h3 className="text-center text-success">{name}</h3>
            <img className="img-fluid" src={image} alt="" />
            <p style={{ textAlign: "justify" }} className="mt-3">
              <span className="fw-bold">Description: </span>
              {description}
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 shadow">
            <div
              className="d-flex align-items-center justify-content-center "
              style={{ height: "70%" }}
            >
              <div className="mt-5 pt-5">
                <p>
                  <span className="fw-bold ">Id</span>:{id}
                </p>
                <p>
                  <span className="fw-bold">Supplier Name:</span>:{supplierName}
                </p>
                <p>
                  <span className="fw-bold">Price</span>:{price}
                </p>
                <p>
                  <span className="fw-bold">Sold: </span>:{sold}
                </p>
                <p>
                  <span className="fw-bold">Quantity: </span>:{quantity}
                </p>
                <div className="w-100 text-center">
                  {/* <button onClick={handleDeliverBtn} className='btn btn-success mb-5 '>Delivered</button> */}
                  {inventoryDetails.quantity <= 0 ? (
                    <button className="btn btn-danger fw-bold">
                      Item sold
                    </button>
                  ) : (
                    <button
                      onClick={handleDeliverBtn}
                      className="btn btn-success mb-5 "
                    >
                      Delivered
                    </button>
                  )}
                  <form onSubmit={handleReStockForm}>
                    <label className="mt-3 fw-bold" htmlFor="stock">
                      Want to Restock Items?
                    </label>
                    <br />
                    <input
                      type="text"
                      name="stock"
                      placeholder="ReStock Quantity"
                    />
                    <br />
                    <input
                      className="mt-3 btn btn-success"
                      type="submit"
                      value="Add Items"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link
            className="text-decoration-none btn btn-secondary "
            to="/manage-inventories"
          >
            Manage Inventories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
