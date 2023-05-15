import React from "react";
import Layout from "../../components/BaseLayout/Layout";
import CarouselTrend from "../../components/CarouselTrending/CarouselTrend";
import Section from "../../components/Section/Section";
import CarouselCat from "../../components/CarouselCategory/CarouselCat";
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

import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="my-5">
        <CarouselTrend></CarouselTrend>
      </div>

      <Section header={"Category"} title={"What are you currently looking for"}>
        <CarouselCat></CarouselCat>
      </Section>

      <Section header={"New"} title={"You’ve never seen it before!"}>
        <div className=" __product-section d-flex flex-lg-wrap">
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Putih"} price={"Rp.500.000"} img={shirt1} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Putih Cotton"} price={"Rp.750.000"} img={shirt2} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Biru Square"} price={"Rp.350.000"} img={shirt3} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Biru Donker"} price={"Rp.319.000"} img={shirt4} />
          </div>
        </div>
      </Section>

      <Section
        header={"Popular"}
        title={"Find clothes that are trending recently"}
      >
        <div className=" __product-section d-flex flex-lg-wrap">
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Putih"} price={"Rp.500.000"} img={shirt1} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Putih Cotton"} price={"Rp.750.000"} img={shirt2} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Biru Square"} price={"Rp.350.000"} img={shirt3} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Biru Donker"} price={"Rp.319.000"} img={shirt4} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Biru Awan"} price={"Rp.459.000"} img={shirt5} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Merah Marron"} price={"Rp.515.000"} img={shirt6} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Motif Pantai"} price={"Rp.320.000"} img={shirt7} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 __margin-right">
            <Card name={"Kemeja Cream"} price={"Rp.219.000"} img={shirt8} />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
