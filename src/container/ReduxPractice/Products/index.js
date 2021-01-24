import React, { Fragment } from "react";

import { Row, Col, Button } from "antd";
import { useStateValue } from "../StateProvider";

function Products({ id, name, price, image, rating, location }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
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
          <h1>Name: {name}</h1>
          <p>{price}</p>
          <p>{location}</p>
          <button onClick={removeItem}>Remove item</button>
        </Col>
      </Row>
    </Fragment>
  );
}
export default Products;
