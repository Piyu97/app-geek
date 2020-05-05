import React from "react"
import DashBoard from "../components/DashBoard"
import Login from "../components/Login"
import Register from "../components/Register"
import { Route, Switch, Redirect } from "react-router-dom";
// import Navbar from "../components/Navbar"

function Routes() {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <Switch>
                <Route path="/register" exact render={props => <Register {...props} />} />
                <Route path="/login" exact render={props => <Login {...props} />}></Route>
                <Route path="/dashboard" exact render={props => <DashBoard {...props} />}></Route>
            </Switch>
        </React.Fragment>
    )
}
export default Routes