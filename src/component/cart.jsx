import React from "react";
import "./css/cart.css";

// icon
import { IoPricetagsOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const CartLelang = () => {
  return (
    <div>
      <div className="cont-cart-lelang">
        <img src="/assets/lelang/unit_test/test_1.jpg" alt="" />
        <div className="cont-des-lelang">
          <p>
            <FaRegClock /> 18 september 2024
          </p>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
          <p>
            <LuMapPin /> Jakarta barat
          </p>
          <div className="des-cart-lelang">
            <p>
              <LuNewspaper /> SHM
            </p>
            <p>
              <IoPricetagsOutline /> 1.8M
            </p>

            <a href="/DetailPage">View</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLelang;
