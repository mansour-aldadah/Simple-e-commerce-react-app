import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
import { IoSearch } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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
      .get(`https://fakestoreapi.com/products/category/${categories}}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error.message);
      });
  }, []);

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-between"
          >
            <Form className="d-flex gap-0 w-75">
              <Form.Control
                type="search"
                placeholder="What are you looking for?"
                className="rounded-0"
                aria-label="Search"
              />
              <Button className="rounded-0 search">
                <IoSearch className="mb-1" />
              </Button>
            </Form>

            <Nav>
              <Nav.Link
                className="fw-bold text-muted mt-1"
                onClick={() => navigate("/")}
              >
                Hello, Log In <RiArrowDownSFill className="fs-4 mb-1" />
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/cart")}
                className="position-relative"
              >
                <span
                  id="numOfProduct"
                  className="text-danger position-absolute"
                >
                  0
                </span>
                <FaShoppingCart className="mb-1  cart fs-3" />
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Nav justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => navigate("/")}>
            All
          </Nav.Link>
        </Nav.Item>
        {categories.map((category, index) => {
          return (
            <Nav.Item key={index}>
              <Nav.Link
                eventKey={"link-" + ++index}
                onClick={() => navigate(`/${category}`)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </header>
  );
}
