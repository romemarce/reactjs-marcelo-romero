import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Panel/ends/Footer";
import Header from "../components/Panel/ends/Header";
import PanelMenu from "../components/Panel/ends/PanelMenu";

const PanelLayout = () => {
  return (
    <>
      <Header />
      <main className="panel-container">
        <PanelMenu />
        <div className="box">
        <Outlet />

        </div>
      </main>
      <Footer />
    </>
  )
}

export default PanelLayout;