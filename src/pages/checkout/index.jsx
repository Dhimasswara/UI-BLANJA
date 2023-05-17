import React from "react";
import Layout from "../../components/BaseLayout/Layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Img
import shirt1 from "../../assets/product/shirt1.jpg";
import shirt2 from "../../assets/product/shirt2.jpg";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ChooseAddress from "../../components/AddressModal/chooseAddress";

const Checkout = () => {
  return (
    <Layout>
      <div className="">
        <h1 className="fw-bolder pt-5">Checkout</h1>
      </div>
      <div className="row justify-content-lg-between pt-3 px-2 px-sm-0">
        <div className="col-lg-8 ">
          <p className="fw-bolder">Shipping Address</p>
          <div className="row">
            <div className="col-12 mb-4 border rounded shadow-sm d-flex align-items-center py-3 justify-content-between">
              <div className="address p-3">
                <p className="fw-bolder">Dhimas Pandu Yogaswara</p>
                <span className="d-block">
                  Kp. Lubang Buaya, Kec. Setu, Kab. Bekasi, Jawa Barat 17320
                  [Blanja Note : Blok A]
                </span>
                <button className="btn btn-outline-secondary mt-4 rounded-pill">
                  <ChooseAddress/>
                </button>
              </div>
            </div>

            <div className="col-12 mb-2 border rounded shadow-sm d-flex align-items-center py-3 justify-content-between">
              <div class="form-check d-flex align-items-center">
                <div className="img">
                  <img
                    src={shirt1}
                    alt=""
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="des">
                  <span className="ms-3 fw-bolder fs-6">Kemeja Jeans</span>
                  <p className="ms-3" style={{ fontSize: "13px" }}>
                    Store Shirt
                  </p>
                </div>
              </div>

              <div className="price">
                <span className="fw-bolder ">Rp. 400.000</span>
              </div>
            </div>

            <div className="col-12 mb-2 border rounded shadow-sm d-flex align-items-center py-3 justify-content-between">
              <div class="form-check d-flex align-items-center">
                <div className="img">
                  <img
                    src={shirt2}
                    alt=""
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="des">
                  <span className="ms-3 fw-bolder fs-6">
                    Kemeja Hitam Kotak
                  </span>
                  <p className="ms-3" style={{ fontSize: "13px" }}>
                    Store Shirt
                  </p>
                </div>
              </div>

              <div className="price">
                <span className="fw-bolder ">Rp. 550.000</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-3 border rounded shadow-sm p-3"
          style={{ height: "280px" }}
        >
          <h5 className="fw-bolder">Shopping summary</h5>
          <div className="orderPrice d-flex justify-content-between pt-4">
            <p className="m-0 p-0">Order</p>
            <p className="m-0 p-0">Rp. 500.000</p>
          </div>
          <div className="orderDelivery  d-flex justify-content-between">
            <p className="m-0 p-0">Delivery</p>
            <p className="m-0 p-0">Rp. 750.000</p>
          </div>
          <hr />
          <div className="price justify-content-between d-flex pt-2">
            <p className="text-secondary">Total price</p>
            <p className="fw-bolder fs-5">Rp. 950.000</p>
          </div>
          <button className="btn btn-danger mb-5" style={{ width: "100%" }}>
            Buy
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
