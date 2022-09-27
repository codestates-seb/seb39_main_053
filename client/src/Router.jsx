import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Auth from "./component/routes/Auth";
import Home from "./component/routes/Home";

const AppRouter = ({ isLoggedIn }) => {
    return (                   

            <Routes>
                {isLoggedIn ? (
                    <>                    
                        <Route path="/" element={<Home/>}/>
                        <Route path="/:id" element={<Home/>}/>
                    </>
                ) : (
                    
                    <>
                        <Route path="/auth" element={<Auth/>}/>
                        <Route path="/:id" element={<Home/>}/>
                    </>
                
                )}
            
            </Routes>
        
        
    );
};

export default AppRouter;