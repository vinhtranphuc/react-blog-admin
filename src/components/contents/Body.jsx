import React, { Component } from 'react';
import LeftAsideMenu from './LeftAsideMenu';
import Content from './Content';

class Body extends Component {
    render() {
        return (
            <div id = "m_aside_left" className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
                <LeftAsideMenu/>
                <Content/>
            </div>
        )
    }
}
export default Body