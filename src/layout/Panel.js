import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AllContext } from "../components/Context/AllContext";
import Footer from "../components/Panel/ends/Footer";
import Header from "../components/Panel/ends/Header";
import PanelMenu from "../components/Panel/ends/PanelMenu";
import Login from "../components/Panel/Login";
const PanelLayout = () => {
  const { userPanel } = useContext(AllContext);
  const { user } = userPanel
  const [login, setLogin] = useState(false)
  useEffect(() => {
    if (user) {
      setLogin(user.isLogin)
    }
  }, [user])
  return (
    <>
      <Header user={user} />
      <main className="panel-container">

        {
          login &&
          <>
            <PanelMenu />
            <div className="box">
              <Outlet />
            </div>
          </>
        }

        {
          !login && <Login />
        }
      </main>
      <Footer />
    </>
  )
}

export default PanelLayout;