import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Body from './contents/Body';
import QuickSideBar from './common/QuickSideBar';
import ScrollTop from './common/ScrollTop';
import QuickNav from './common/QuickNav';
import BaseScripts from './common/BaseScripts';

class MainApp extends Component {
    render() {
        return (
                <div className="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
                    <div className="m-grid m-grid--hor m-grid--root m-page">
                        <Header />
                        <Body>
                        </Body>
                        <Footer />
                    </div>
                    <QuickSideBar />
                    <ScrollTop />
                    <QuickNav />
                    <BaseScripts />
                </div>
        )
    }
}
export default MainApp