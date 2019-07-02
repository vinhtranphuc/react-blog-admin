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
                    <div class="m-grid m-grid--hor m-grid--root m-page">
                        <Header>
                        </Header>
                        <Content>
                        </Content>
                        <SideBar >
                        </SideBar>
                        <Footer>
                        </Footer>
                    </div>
                </>
            </Router>
        )
    }
}
export default Dashboard