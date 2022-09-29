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
        <div className="m-auto font-inter text-black bg-white relative min-h-[100%]">
            <Header/>
            <Menu/>
            <Routes>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
            <div className="absolute left-0 bottom-[-120px] w-full h-[120px]">
                <Footer />
            </div>
        </div>
    );
}

export default App;