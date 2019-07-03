import React, { Component } from 'react';

class ScrollTop extends Component {

    render() {
        return (
            <div className="m-scroll-top m-scroll-top--skin-top" data-toggle="m-scroll-top" data-scroll-offset="500" data-scroll-speed="300">
                <i className="la la-arrow-up"></i>
            </div>
        )
    }
}
export default ScrollTop