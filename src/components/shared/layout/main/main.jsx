import React from "react";
import Footer from "./../../layout/footer/footer";
import Header from "./../../layout/header/header";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Header></Header>
      <div className="">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}
