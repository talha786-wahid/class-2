import React, { Fragment, useState } from "react";
// import ProductImage from "./grid.png";
import { Row, Col, Button } from "antd";
import { useStateValue } from "../StateProvider";

function Checkout({ name, price, image, rating, location }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        name: name,
        price: price,
        rating: rating,
        image: image,
        location: location,
      },
    });
  };
  return (
    <Fragment>
      <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Col
          lg={{ span: 6, offset: 1 }}
          md={{ span: 6, offset: 1 }}
          // style={{ textAlign: "center" }}
        >
          <h3>Product 1</h3>
          <img src={image} style={{ width: "100%", height: "auto" }} />
        </Col>
        <Col
          //   lg={{ span: 6, offset: 1 }}
          md={{ span: 6, offset: 1 }}
          // style={{ textAlign: "center" }}
        >
          <Row style={{ marginTop: "50px" }}>
            <Col
              lg={{ span: 6, offset: 1 }}
              md={{ span: 6, offset: 1 }}
              // style={{ textAlign: "center" }}
            >
              <h3> Name:{name}</h3>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ span: 6, offset: 1 }}
              md={{ span: 6, offset: 1 }}
              // style={{ textAlign: "center" }}
            >
              <h3>Price: ${price}</h3>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ span: 6, offset: 1 }}
              md={{ span: 6, offset: 1 }}
              // style={{ textAlign: "center" }}
            >
              <h3> Rating: {rating}</h3>
            </Col>
          </Row>{" "}
          <Row>
            <Col
              lg={{ span: 8, offset: 1 }}
              md={{ span: 8, offset: 1 }}
              // style={{ textAlign: "center" }}
            >
              <h3>Location:{location}</h3>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ span: 6, offset: 1 }}
              md={{ span: 6, offset: 1 }}
              // style={{ textAlign: "center" }}
            >
              <Button typ="primary" onClick={addToBasket}>
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}
export default Checkout;
