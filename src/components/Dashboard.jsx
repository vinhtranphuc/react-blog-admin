import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header/Header';
import SideBar from './sidebar/SideBar';
import Footer from './footer/Footer';
import Content from './content/Content';

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Dashboard</h1>
                    <Header/>
                    <SideBar/>
                    <Footer/>
                    <Content/>
                </>
            </Router>
        )
    }
}
export default Dashboard