import React from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from '../App'
const Routers =()=>(
    <Router>
        <React.Fragment>
            <Route exact path="/" component={App} />
        </React.Fragment>
    </Router>
);
export default Routers