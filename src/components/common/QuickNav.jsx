import React, { Component } from 'react';

class QuickNav extends Component {

    render() {
        return (
            <ul className="m-nav-sticky" style={{ marginTop: '30px' }}>
                <li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Purchase" data-placement="left">
                    <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank">
                        <i className="la la-cart-arrow-down" />
                    </a>
                </li>
                <li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Documentation" data-placement="left">
                    <a href="http://keenthemes.com/metronic/documentation.html" target="_blank">
                        <i className="la la-code-fork" />
                    </a>
                </li>
                <li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Support" data-placement="left">
                    <a href="http://keenthemes.com/forums/forum/support/metronic5/" target="_blank">
                        <i className="la la-life-ring" />
                    </a>
                </li>
            </ul>
        )
    }
}
export default QuickNav