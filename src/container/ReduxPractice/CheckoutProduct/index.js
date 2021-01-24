import React, { Fragment } from "react";

import { Row, Col, Button } from "antd";
import { useStateValue } from "../StateProvider";
import Products from "../Products";
import { Link } from "react-router-dom";

function CheckoutProduct() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Fragment>
      <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Col
          lg={{ span: 6, offset: 1 }}
          md={{ span: 6, offset: 1 }}
          // style={{ textAlign: "center" }}
        >
          <Link to="/">
            <h3>CheckoutProducts</h3>
          </Link>
        </Col>
      </Row>
      {basket.length === 0 ? (
        <div>
          <h2 className="checkout_title">Your Shopping Basket is empty</h2>
          <p className="paragraph">
            You have no items in your basket. To buy one or more items, click
            "add to basket" next to the items
          </p>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
          {basket.map((item) => {
            console.log(item);
            return (
              <Products
                name={item.name}
                price={item.price}
                image={item.image}
                rating={item.rating}
                location={item.location}
              />
            );
          })}
        </div>
      )}
    </Fragment>
  );
}
export default CheckoutProduct;
