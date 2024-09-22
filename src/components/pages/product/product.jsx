import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";

export default function Store() {
  const [product, setProduct] = useState({});
  const param = useParams();

  useEffect(() => {
    const callData = async () => {
      var res = await axios.get(
        `https://fakestoreapi.com/products/${param.id}`
      );
      setProduct(res.data);
    };
    callData();
  }, []);

  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Row
          className="p-5 my-5 w-75 m-auto"
          style={{ border: "5px solid green" }}
        >
          <Col sm="6">
            <img src={product.image} style={{ width: "75%" }} alt="" />
          </Col>
          <Col sm="6">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h5>{product.price}</h5>
            <button className="btn btn-success">ADD TO CART</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
