import React from "react";
import {BrowserRouter, Route,Routes} from 'react-router-dom'

import Home from '../containers/home'
import ReselectDemo from '../containers/reselect';

export default function() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/reselect" element={<ReselectDemo />} />
            </Routes>
        </BrowserRouter>
    )
}
