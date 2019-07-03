import React, { Component } from 'react';

class LeftAsideMenu extends Component {
    render() {
        return (
            <div>
                <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
                    <i className="la la-close" />
                </button>
                <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
                    <div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " data-menu-vertical="true" data-menu-scrollable="false" data-menu-dropdown-timeout={500}>
                        <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                            <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                                <a href="index.html" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-line-graph" />
                                    <span className="m-menu__link-title">
                                        <span className="m-menu__link-wrap">
                                            <span className="m-menu__link-text">
                                                Dashboard
                        </span>
                                            <span className="m-menu__link-badge">
                                                <span className="m-badge m-badge--danger">
                                                    2
                          </span>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <li className="m-menu__section">
                                <h4 className="m-menu__section-text">
                                    Blog
                  </h4>
                                <i className="m-menu__section-icon flaticon-more-v3" />
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                                <a href="#" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon flaticon-interface" />
                                    <span className="m-menu__link-text">
                                        About website
                    </span>
                                    <i className="m-menu__ver-arrow la la-angle-right" />
                                </a>
                                <div className="m-menu__submenu">
                                    <span className="m-menu__arrow" />
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <a href="update-introduce.html" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span />
                                                </i>
                                                <span className="m-menu__link-text">
                                                    Introduce
                          </span>
                                            </a>
                                            <a href="update-admininfo.html" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span />
                                                </i>
                                                <span className="m-menu__link-text">
                                                    Admin info
                          </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                                <a href="users.html" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon flaticon-users" />
                                    <span className="m-menu__link-text">
                                        Users
                    </span>
                                    <i className="m-menu__ver-arrow la la-angle-right" />
                                </a>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                                <a href="#" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon flaticon-edit-1" />
                                    <span className="m-menu__link-text">
                                        Post
                    </span>
                                    <i className="m-menu__ver-arrow la la-angle-right" />
                                </a>
                                <div className="m-menu__submenu">
                                    <span className="m-menu__arrow" />
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <a href="create-post.html" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span />
                                                </i>
                                                <span className="m-menu__link-text">
                                                    Add new post
                          </span>
                                            </a>
                                            <a href="posts.html" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span />
                                                </i>
                                                <span className="m-menu__link-text">
                                                    Posts
                          </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" data-menu-submenu-toggle="hover">
                                <a href="categories.html" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon flaticon-list" />
                                    <span className="m-menu__link-text">
                                        Categories
                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default LeftAsideMenu