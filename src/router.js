import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Route from 'react-router-dom/Route'
import SignInWindow from "./Components/SignInWindow";
import SignUpWindow from "./Components/SignUpWindow";
import NaviBar from "./Components/Navibar";
import MainBlock from "./Components/Mainblock";
import {MainPage} from "./Components/MainPage";
import {Container, Nav} from "react-bootstrap";
import CatalogBlock from "./Components/Catalog";
import {CustomNavBar} from "./Components/CustomNavBar";

export const BaseRouter = () => {
    return (
        <Router>
            <NaviBar />
            <CustomNavBar/>
            <div>
                <Route exact path="/" component={MainPage}/>
                <Route path="/api" component={()=><MainBlock endpoints={[{placeholder: 'qwe'}]}/>}/>
                <Route path="/catalog" component={()=><CatalogBlock items={[{title: "qwe", description: 'qwe'}]}/>}/>
                <Route path="/signup" component={SignUpWindow}/>
                <Route path="/login" component={SignInWindow}/>
            </div>
        </Router>
    )
}