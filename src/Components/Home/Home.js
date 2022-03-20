import React from "react";
import "./Home.css";
import Product from "./../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="assets/img/background_1.jpg"
          alt="Background"
        /> */}

        {/* <img
          className="home__image"
          src="assets/img/background_2.jpg"
          alt="Background"
        /> */}
        {/* <img
          className="home__image"
          src="assets/img/background_3.jpg"
          alt="Background"
        /> */}
        <img
          className="home__image"
          src="assets/img/background_4.jpg"
          alt="Background"
        />
        <div className="home__row">
          <Product
            id="122345"
            title="Macbook Pro"
            image="assets/img/macbook.jpg"
            price="1243.39"
            rating={5}
            alt="macbook"
          />
          <Product
            id="1123435"
            title="iPhone 13"
            image="assets/img/iphone.jpg"
            price="1029.59"
            rating={5}
            alt="iphone"
          />
        </div>
        <div className="home__row">
          <Product
            id="122587"
            title="Sports Bicycle"
            image="assets/img/bicycle.jpg"
            price="989.79"
            rating={3}
            alt="bicycle"
          />
          <Product
            id="234586"
            title="Comfy Sneakers"
            image="assets/img/sneakers.jpg"
            price="24.99"
            rating={4}
            alt="sneakers"
          />
          <Product
            id="345864"
            title="Diamong Necklace"
            image="assets/img/necklace.jpg"
            price="1699.29"
            rating={3}
            alt="necklace"
          />
        </div>
        <div className="home__row">
          <Product
            id="458643"
            title="Smart Television"
            image="assets/img/tv.jpg"
            price="743.57"
            rating={4}
            alt="tv"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
