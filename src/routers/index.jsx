import React from "react";
import {BrowserRouter, Route,Routes} from 'react-router-dom'

import Home from '../containers/home'

export default function() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}
