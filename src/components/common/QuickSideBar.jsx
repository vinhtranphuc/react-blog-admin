import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div id="m_quick_sidebar" className="m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light">
                <div className="m-quick-sidebar__content m--hide">
                    <span id="m_quick_sidebar_close" className="m-quick-sidebar__close">
                        <i className="la la-close" />
                    </span>
                    <ul id="m_quick_sidebar_tabs" className="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
                        <li className="nav-item m-tabs__item">
                            <a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_quick_sidebar_tabs_messenger" role="tab">
                                Messages
                  </a>
                        </li>
                        <li className="nav-item m-tabs__item">
                            <a className="nav-link m-tabs__link" data-toggle="tab" href="#m_quick_sidebar_tabs_settings" role="tab">
                                Settings
                  </a>
                        </li>
                        <li className="nav-item m-tabs__item">
                            <a className="nav-link m-tabs__link" data-toggle="tab" href="#m_quick_sidebar_tabs_logs" role="tab">
                                Logs
                  </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active m-scrollable" id="m_quick_sidebar_tabs_messenger" role="tabpanel">
                            <div className="m-messenger m-messenger--message-arrow m-messenger--skin-light">
                                <div className="m-messenger__messages">
                                    <div className="m-messenger__message m-messenger__message--in">
                                        <div className="m-messenger__message-pic">
                                            <img src="assets/app/media/img//users/user3.jpg" alt="true"/>
                                        </div>
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-username">
                                                    Megan wrote
                            </div>
                                                <div className="m-messenger__message-text">
                                                    Hi Bob. What time will be the meeting ?
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-messenger__message m-messenger__message--out">
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-text">
                                                    Hi Megan. It's at 2.30PM
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-messenger__message m-messenger__message--in">
                                        <div className="m-messenger__message-pic">
                                            <img src="assets/app/media/img//users/user3.jpg" alt="true"/>
                                        </div>
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-username">
                                                    Megan wrote
                            </div>
                                                <div className="m-messenger__message-text">
                                                    Will the development team be joining ?
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-messenger__message m-messenger__message--out">
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-text">
                                                    Yes sure. I invited them as well
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-messenger__datetime">
                                        2:30PM
                      </div>
                                    <div className="m-messenger__message m-messenger__message--in">
                                        <div className="m-messenger__message-pic">
                                            <img src="assets/app/media/img//users/user3.jpg" alt="true"/>
                                        </div>
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-username">
                                                    Megan wrote
                            </div>
                                                <div className="m-messenger__message-text">
                                                    Noted. For the Coca-Cola Mobile App project as well ?
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-messenger__message m-messenger__message--out">
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-text">
                                                    Yes, sure.
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-messenger__message m-messenger__message--out">
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-text">
                                                    Please also prepare the quotation for the Loop CRM project as well.
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-messenger__datetime">
                                        3:15PM
                      </div>
                                    <div className="m-messenger__message m-messenger__message--in">
                                        <div className="m-messenger__message-no-pic m--bg-fill-danger">
                                            <span>
                                                M
                          </span>
                                        </div>
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-username">
                                                    Megan wrote
                            </div>
                                                <div className="m-messenger__message-text">
                                                    Noted. I will prepare it.
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-messenger__message m-messenger__message--out">
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-text">
                                                    Thanks Megan. I will see you later.
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-messenger__message m-messenger__message--in">
                                        <div className="m-messenger__message-pic">
                                            <img src="assets/app/media/img//users/user3.jpg" alt="true"/>
                                        </div>
                                        <div className="m-messenger__message-body">
                                            <div className="m-messenger__message-arrow" />
                                            <div className="m-messenger__message-content">
                                                <div className="m-messenger__message-username">
                                                    Megan wrote
                            </div>
                                                <div className="m-messenger__message-text">
                                                    Sure. See you in the meeting soon.
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-messenger__seperator" />
                                <div className="m-messenger__form">
                                    <div className="m-messenger__form-controls">
                                        <input type="text" placeholder="Type here..." className="m-messenger__form-input" />
                                    </div>
                                    <div className="m-messenger__form-tools">
                                        <a className="m-messenger__form-attachment">
                                            <i className="la la-paperclip" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane  m-scrollable" id="m_quick_sidebar_tabs_settings" role="tabpanel">
                            <div className="m-list-settings">
                                <div className="m-list-settings__group">
                                    <div className="m-list-settings__heading">
                                        General Settings
                      </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            Email Notifications
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" defaultChecked="checked" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            Site Tracking
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            SMS Alerts
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            Backup Storage
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            Audit Logs
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" defaultChecked="checked" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="m-list-settings__group">
                                    <div className="m-list-settings__heading">
                                        System Settings
                      </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            System Logs
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            Error Reporting
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            Applications Logs
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            Backup Servers
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" defaultChecked="checked" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="m-list-settings__item">
                                        <span className="m-list-settings__item-label">
                                            Audit Logs
                        </span>
                                        <span className="m-list-settings__item-control">
                                            <span className="m-switch m-switch--outline m-switch--icon-check m-switch--brand">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span />
                                                </label>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane  m-scrollable" id="m_quick_sidebar_tabs_logs" role="tabpanel">
                            <div className="m-list-timeline">
                                <div className="m-list-timeline__group">
                                    <div className="m-list-timeline__heading">
                                        System Logs
                      </div>
                                    <div className="m-list-timeline__items">
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-success" />
                                            <a className="m-list-timeline__text">
                                                12 new users registered
                            <span className="m-badge m-badge--warning m-badge--wide">
                                                    important
                            </span>
                                            </a>
                                            <span className="m-list-timeline__time">
                                                Just now
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-info" />
                                            <a className="m-list-timeline__text">
                                                System shutdown
                          </a>
                                            <span className="m-list-timeline__time">
                                                11 mins
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-danger" />
                                            <a className="m-list-timeline__text">
                                                New invoice received
                          </a>
                                            <span className="m-list-timeline__time">
                                                20 mins
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-warning" />
                                            <a className="m-list-timeline__text">
                                                Database overloaded 89%
                            <span className="m-badge m-badge--success m-badge--wide">
                                                    resolved
                            </span>
                                            </a>
                                            <span className="m-list-timeline__time">
                                                1 hr
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-success" />
                                            <a className="m-list-timeline__text">
                                                System error
                          </a>
                                            <span className="m-list-timeline__time">
                                                2 hrs
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-info" />
                                            <a className="m-list-timeline__text">
                                                Production server down
                            <span className="m-badge m-badge--danger m-badge--wide">
                                                    pending
                            </span>
                                            </a>
                                            <span className="m-list-timeline__time">
                                                3 hrs
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-success" />
                                            <a className="m-list-timeline__text">
                                                Production server up
                          </a>
                                            <span className="m-list-timeline__time">
                                                5 hrs
                          </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-list-timeline__group">
                                    <div className="m-list-timeline__heading">
                                        Applications Logs
                      </div>
                                    <div className="m-list-timeline__items">
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-info" />
                                            <a className="m-list-timeline__text">
                                                New order received
                            <span className="m-badge m-badge--info m-badge--wide">
                                                    urgent
                            </span>
                                            </a>
                                            <span className="m-list-timeline__time">
                                                7 hrs
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-success" />
                                            <a className="m-list-timeline__text">
                                                12 new users registered
                          </a>
                                            <span className="m-list-timeline__time">
                                                Just now
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-info" />
                                            <a className="m-list-timeline__text">
                                                System shutdown
                          </a>
                                            <span className="m-list-timeline__time">
                                                11 mins
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-danger" />
                                            <a className="m-list-timeline__text">
                                                New invoices received
                          </a>
                                            <span className="m-list-timeline__time">
                                                20 mins
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-warning" />
                                            <a className="m-list-timeline__text">
                                                Database overloaded 89%
                          </a>
                                            <span className="m-list-timeline__time">
                                                1 hr
                          </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-success" />
                                            <a className="m-list-timeline__text">
                                                System error
                            <span className="m-badge m-badge--info m-badge--wide">
                                                    pending
                            </span>
                                            </a>
                                            <span className="m-list-timeline__time">
                                                2 hrs
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-info" />
                                            <a className="m-list-timeline__text">
                                                Production server down
                                            </a>
                                            <span className="m-list-timeline__time">
                                                3 hrs
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-list-timeline__group">
                                    <div className="m-list-timeline__heading">
                                        Server Logs
                                    </div>
                                    <div className="m-list-timeline__items">
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-success" />
                                            <a className="m-list-timeline__text">
                                                Production server up
                                            </a>
                                            <span className="m-list-timeline__time">
                                                5 hrs
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-info" />
                                            <a className="m-list-timeline__text">
                                                New order received
                                            </a>
                                            <span className="m-list-timeline__time">
                                                7 hrs
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-success" />
                                            <a className="m-list-timeline__text">
                                                12 new users registered
                                            </a>
                                            <span className="m-list-timeline__time">
                                                Just now
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-info" />
                                            <a className="m-list-timeline__text">
                                                System shutdown
                                            </a>
                                            <span className="m-list-timeline__time">
                                                11 mins
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-danger" />
                                            <a className="m-list-timeline__text">
                                                New invoice received
                                            </a>
                                            <span className="m-list-timeline__time">
                                                20 mins
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-warning" />
                                            <a className="m-list-timeline__text">
                                                Database overloaded 89%
                                            </a>
                                            <span className="m-list-timeline__time">
                                                1 hr
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-success" />
                                            <a className="m-list-timeline__text">
                                                System error
                                            </a>
                                            <span className="m-list-timeline__time">
                                                2 hrs
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-info" />
                                            <a className="m-list-timeline__text">
                                                Production server down
                                            </a>
                                            <span className="m-list-timeline__time">
                                                3 hrs
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-success" />
                                            <a className="m-list-timeline__text">
                                                Production server up
                                            </a>
                                            <span className="m-list-timeline__time">
                                                5 hrs
                                            </span>
                                        </div>
                                        <div className="m-list-timeline__item">
                                            <span className="m-list-timeline__badge m-list-timeline__badge--state-info" />
                                            <a className="m-list-timeline__text">
                                                New order received
                                            </a>
                                            <span className="m-list-timeline__time">
                                                1117 hrs
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar