import './app.css'
import {Route, Routes} from "react-router-dom";
import Menu from "./components/general/menu";
import React from "react";
import {publicRoutes} from "./routes/routes";
import Footer from "./components/general/footer";
import Header from "./components/general/header";

document.body.style.overflow = "";

function App() {
    return (
      <div className="m-auto text-black bg-white h-[100%] relative">
        <Header />
        <Menu />
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <div className="box-border h-[83px] pb-[80px]"></div>
        <div className="h-[83px] mt-[-80px] ">
          <Footer />
        </div>
      </div>
    );
}

export default App;