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
        <div className="m-auto text-black bg-white relative" >
            <Header/>
            <Menu/>
            <Routes >
                {publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
            <div className="w-full h-[98px]"></div>
            <div className="absolute w-full left-0 right-0 bottom-0">
                <Footer />
            </div>
        </div>
    );
}

export default App;