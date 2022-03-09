import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61Qo3Lx2ZTL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={1196}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={2390}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={19999}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={9899}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={59899}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={109498}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Beginning MERN Stack: Build and Deploy a Full Stack MongoDB, Express, React, Node.js App"
            price={2968}
            rating={5}
            image="https://m.media-amazon.com/images/I/418nSN91rmS.jpg"
          />
          <Product
            id="23445930"
            title="wipro NS9400 9-Watt B22 WiFi Smart LED Bulb with Music Sync Compatible with Amazon Alexa and Google Assistant ( Warm White/Neutral White/White, Standard )"
            price={690}
            rating={4}
            image="https://m.media-amazon.com/images/I/71LIfhSpAYS._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Zuvexa Egg Boiler Poacher Automatic Off Steaming, Cooking, Boiling Double Layer 14 Egg Boiler (Multicolor)"
            price={499}
            rating={4}
            image="https://m.media-amazon.com/images/I/41dlE8ZX0lL._SX425_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Invisible Life of Addie LaRue"
            price={849}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51rLJO8a6QL._SX328_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Caraval: the mesmerising Sunday Times bestseller: The mesmerising Sunday Times bestseller"
            price={435}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51d4C9Sp1OL._SX317_BO1,204,203,200_.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;