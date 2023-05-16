import React from "react";
import Layout from "../../components/BaseLayout/Layout";
import shirt from "../../assets/product/shirt2.jpg";
import "./detailProduct.css";
import Rating from "../../components/RatingStars/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";

// Image Static
import shirt1 from "../../assets/product/shirt1.jpg.jpg";
import shirt2 from "../../assets/product/shirt2.jpg";
import shirt3 from '../../assets/product/shirt3.jpg'
import shirt4 from '../../assets/product/shirt4.jpg'
import shirt5 from '../../assets/product/shirt5.jpg'
import shirt6 from '../../assets/product/shirt6.jpg'
import shirt7 from '../../assets/product/shirt7.jpg'
import shirt8 from '../../assets/product/shirt8.jpg'

const DetailProduct = () => {
  return (
    <Layout>
      <div className="row mt-5">
        <div className="col-12 col-md-4 img-product-detail p-3">
          <img src={shirt} alt="" />
          <div className="row pt-2">
            <div className="col-12">
              <span className="child-img d-flex justify-content-between">
                <img src={shirt} alt="" />
                <img src={shirt} alt="" />
                <img src={shirt} alt="" />
                <img src={shirt} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 p-3">
          <h3 className="fw-bolder">Kemeja Putih</h3>
          <span
            className="text-secondary d-block mb-2"
            style={{ fontSize: "14px" }}
          >
            Store Shirt
          </span>
          <Rating></Rating>
          <p className="pt-4 pb-1 mb-1">Price</p>
          <h2 className="fw-bolder">Rp. 250.000</h2>
          <p className="pt-4 pb-1 mb-1"> Color</p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input color-red"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input color-blue"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input color-yellow"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input color-green"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio4"
              value="option4"
            />
          </div>

          <div className="row pt-4 pb-1 mb-1">
            <div className="col-6 col-sm-4">
              <p>Size</p>
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
            </div>
            <div className="col-6 col-sm-4">
              <p>Size</p>
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
            </div>
          </div>

          {/* <div className="buttonLink pt-4 pb-1 mb-1 d-flex gap-2"> */}
          <div className="row pt-5 pb-1 mb-1">
            <div className="col-6 col-sm-3 mb-sm-0 mb-2 ">
              <Link
                className="btn btn-outline-secondary"
                style={{ borderRadius: "50px", width: "100%" }}
              >
                Chat
              </Link>
            </div>
            <div className="col-6 col-sm-3 mb-sm-0 mb-2 ">
              <Link
                className="btn btn-outline-secondary"
                style={{ borderRadius: "50px", width: "100%" }}
              >
                Add Bag
              </Link>
            </div>
            <div className="col-12 col-sm-6 ">
              <Link
                className="btn btn-danger"
                style={{ borderRadius: "50px", width: "100%" }}
              >
                Buy now
              </Link>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="row pt-4">
        <h2 className="fw-bolder">Informasi Produk</h2>
        <h5 className="pt-4">Condition</h5>
        <span>New</span>
        <h5 className="pt-4">Description</h5>
        <span className="text-secondary">
          Kemeja Pria Lengan Panjang Putih Original </br>
________________________________________________________________ </br>

Untuk size ready terdapat pada varian produk, mohon memilih size kemeja pada varian produk. </br>
Spesifikasi ukuran pada setiap size : </br>
M = LD 52 cm, PB 72 cm </br>
L = LD 55 cm, PB 73 cm </br>

Kemeja Pria dengan bahan berkualitas.Gak gampang kusut, tetap terlihat rapi dan nyaman banget ketika dipakai. </br>
Foto diambil oleh kita sendiri, bukan copy paste dari web orang lain, asli sesuai barangnya , Real Picture! </br>
Dapetin kemeja berkualitas yang gak nguras kantong ^-^ </br>
Grab it fast and happy shooping! </br> </br>

Terima kasih! </br> </span>
        <h2 className="fw-bolder pt-5">Produk Review</h2>
        <div className="d-flex align-items-center">
          <p className="fw-normal" style={{ fontSize: "60px" }}>
            0
          </p>
          <p className="text-secondary ps-2 fs-5"> /5</p>
        </div>
        <div className="rating">
          <FontAwesomeIcon
            icon={faStar}
            style={{ fontSize: "20px", color: "orange" }}
          >
            {" "}
          </FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faStar}
            style={{ fontSize: "20px", color: "orange" }}
          >
            {" "}
          </FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faStar}
            style={{ fontSize: "20px", color: "orange" }}
          >
            {" "}
          </FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faStar}
            style={{ fontSize: "20px", color: "orange" }}
          >
            {" "}
          </FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faStar}
            style={{ fontSize: "20px", color: "orange" }}
          >
            {" "}
          </FontAwesomeIcon>
        </div>
      </div>

      <hr
        style={{ width: "100%", border: "2px solid black" }}
        className="mt-5"
      />

      <Section
        header={"Popular"}
        title={"Find clothes that are trending recently"}
      >
        <div className=" __product-section d-flex flex-lg-wrap">
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Putih"} price={"Rp.500.000"} img={shirt1} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card
              name={"Kemeja Putih Cotton"}
              price={"Rp.750.000"}
              img={shirt2}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card
              name={"Kemeja Biru Square"}
              price={"Rp.350.000"}
              img={shirt3}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card
              name={"Kemeja Biru Donker"}
              price={"Rp.319.000"}
              img={shirt4}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Biru Awan"} price={"Rp.459.000"} img={shirt5} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card
              name={"Kemeja Merah Marron"}
              price={"Rp.515.000"}
              img={shirt6}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card
              name={"Kemeja Motif Pantai"}
              price={"Rp.320.000"}
              img={shirt7}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Cream"} price={"Rp.219.000"} img={shirt8} />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default DetailProduct;
