import React from "react";
import Layout from "../../components/BaseLayout/Layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Img
import shirt1 from "../../assets/product/shirt1.jpg";
import shirt2 from "../../assets/product/shirt2.jpg";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const MyBag = () => {
  return (
    <Layout>
      <div className="">
        <h1 className="fw-bolder pt-5">My Bag</h1>
      </div>
      <div className="row justify-content-lg-between pt-3 px-2 px-sm-0">
        <div className="col-lg-8 ">
          <div className="row">
            <div className="col-12 mb-4 border rounded shadow-sm d-flex align-items-center py-3 justify-content-between">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Select all items{" "}
                  <span className="text-secondary">(2 items selected)</span>
                </label>
              </div>
              <div className="">
                <Link className="text-danger decoration-none fw-bolder">
                  {" "}
                  Delete
                </Link>
              </div>
            </div>

            <div className="col-12 mb-2 border rounded shadow-sm d-flex align-items-center py-3 justify-content-between">
              <div class="form-check d-flex align-items-center">
                <input
                  class="form-check-input me-3"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label d-flex" for="flexCheckDefault">
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
                </label>
              </div>

              <div className="triggerBtn d-flex align-items-center">
                <button
                  className="d-flex align-items-center justify-content-center btn-dark btn"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "100%",
                  }}
                >
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
                <span className="px-4"> 1 </span>
                <button
                  className="d-flex align-items-center justify-content-center btn-secondary btn"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "100%",
                  }}
                >
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
              </div>

              <div className="price">
                <span className="fw-bolder ">Rp. 400.000</span>
              </div>
            </div>

            <div className="col-12 mb-2 border rounded shadow-sm d-flex align-items-center py-3 justify-content-between">
              <div class="form-check d-flex align-items-center">
                <input
                  class="form-check-input me-3"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label d-flex" for="flexCheckDefault">
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
                    <span className="ms-3 fw-bolder fs-6">Kemeja Hitam Kotak</span>
                    <p className="ms-3" style={{ fontSize: "13px" }}>
                      Store Shirt
                    </p>
                  </div>
                </label>
              </div>

              <div className="triggerBtn d-flex align-items-center">
                <button
                  className="d-flex align-items-center justify-content-center btn-dark btn"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "100%",
                  }}
                >
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
                <span className="px-4"> 1 </span>
                <button
                  className="d-flex align-items-center justify-content-center btn-secondary btn"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "100%",
                  }}
                >
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
              </div>

              <div className="price">
                <span className="fw-bolder ">Rp. 550.000</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-3 border rounded shadow-sm p-3"
          style={{ height: "190px" }}
        >
          <h5 className="fw-bolder">Shopping summary</h5>
          <div className="price justify-content-between d-flex">
            <p className="py-4 text-secondary">Total price</p>
            <p className="py-4 fw-bolder fs-5">Rp. 950.000</p>
          </div>
          <button className="btn btn-danger mb-5" style={{ width: "100%" }}>
            Buy
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MyBag;
