import React, { Component } from "react";
import { Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import bgImage from "./bgImg.png";
import Checkout from "../Checkout";
import ProductImage from "../Checkout/grid.png";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Landing() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <Row>
        <Col lg={{ span: 12 }} md={{ span: 12 }} style={{ textAlign: "right" }}>
          <h1>Header</h1>
        </Col>
        <Col
          lg={{ span: 9 }}
          md={{ span: 9 }}
          style={{ textAlign: "right", marginTop: "10px" }}
        >
          <Link to="/checkoutProduct">
            <ShoppingCartOutlined style={{ fontSize: "38px" }} />
            <p>{basket.length}</p>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col
          lg={{ span: 24 }}
          md={{ span: 24 }}
          style={{ textAlign: "center" }}
        >
          <img
            src={bgImage}
            alt="Bg-Image"
            style={{ width: "100%", height: "70vh" }}
          />
        </Col>
      </Row>
      <Checkout
        id="123"
        name="Talha"
        price={12}
        rating={5}
        location="lahore"
        image={ProductImage}
      />{" "}
      <Checkout
        id="333"
        name="Umer"
        price={123}
        rating={4}
        location="Barish"
        image={ProductImage}
      />
    </div>
  );
}
export default Landing;
