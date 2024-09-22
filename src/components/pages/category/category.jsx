import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import getRating from "../store/getRating";
import { AddButton } from "../store/styledStore";
import axios from "axios";

export default function Category() {
  const products = useLoaderData();
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Row>
        {products.length > 0 &&
          products.map((product) => (
            <Col xs="12" sm="6" md="4" lg="3" key={product.id}>
              <Card className="mb-3">
                <div
                  className="containerImage p-2 p-sm-3 d-flex align-items-center"
                  style={{ height: "280px", cursor: "pointer" }}
                  onClick={() => navigate(`product/${product.id}`)}
                >
                  <Card.Img
                    variant="top"
                    style={{ maxHeight: "100%", objectFit: "contain" }}
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <Card.Body>
                  <Card.Title
                    style={{ height: "100px" }}
                    className="fs-6 fs-lg-5"
                  >
                    {product.title}
                  </Card.Title>
                  <Row className="mb-0">
                    <Col xs="6" className="price">
                      {product.price} EGP
                    </Col>
                    <Col xs="6" className="rate text-end">
                      {getRating(product.rating.rate)}
                    </Col>
                  </Row>
                  <Card.Text className="text-decoration-line-through text-muted fs-6 p-0 m-0">
                    4.5555.0 EGP
                  </Card.Text>
                  <Card.Text className="fs-6 p-0 m-0 mt-2 mb-3 fw-bold">
                    Free Shipping
                  </Card.Text>
                  <AddButton className={true ? "bg-success" : "bg-danger"}>
                    {true ? "Add to cart" : "Remove from cart"}
                  </AddButton>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export const CategoriesLoader = async ({ params }) => {
  // Fetch category from params
  const category = params.category;
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.data;
};
