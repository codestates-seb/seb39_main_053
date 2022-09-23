import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./component/routes/Auth";
import Home from "./component/routes/Home";

const AppRouter = ({ isLoggedIn }) => {
    return (                   
        <>
            
                {isLoggedIn ? (
                        <Routes>         
                        <Route path="/" element={<Home />}>
                    
                        </Route>    
                        </Routes>
                ) : (
                    <Routes>
                    <Route path="/" element={<Auth />}>
                        
                    </Route>
                    </Routes>
                )}
            
        </>
        
    );
};

export default AppRouter;