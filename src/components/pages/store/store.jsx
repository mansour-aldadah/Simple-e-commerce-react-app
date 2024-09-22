import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { AddButton } from "./styledStore";
import getRating from "./getRating";
import "./store.css";
import { useNavigate } from "react-router-dom";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error.message);
      });

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error.message);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Container>
        {categories.length > 0 &&
          categories.map((category) => (
            <Row key={category}>
              <h2 className="mt-3">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              {products.length > 0 &&
                products.map((product) => {
                  if (category === product.category) {
                    return (
                      <Col xs="12" sm="6" md="4" lg="3" key={product.id}>
                        <Card className="mb-3">
                          <div
                            className="containerImage p-2 p-sm-3 d-flex align-items-center"
                            style={{ height: "280px", cursor: "pointer" }}
                          >
                            <Card.Img
                              variant="top"
                              onClick={() => navigate(`product/${product.id}`)}
                              style={{
                                maxHeight: "100%",
                                objectFit: "contain"
                              }}
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
                            <AddButton
                              className={true ? "bg-success" : "bg-danger"}
                            >
                              {true ? "Add to cart" : "Remove from cart"}
                            </AddButton>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  }
                })}
            </Row>
          ))}
      </Container>
    </>
  );
}
