import React, { Component } from 'react';

class Content extends Component {

    render() {
        return (
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
            <div className="m-content">
              <div className="row">
                <div className="col-xl-8">
                  <div className="m-portlet m-portlet--full-height ">
                    <div className="m-portlet__head">
                      <div className="m-portlet__head-caption">
                        <div className="m-portlet__head-title">
                          <h3 className="m-portlet__head-text">
                            Your posts
                          </h3>
                        </div>
                      </div>
                      <div className="m-portlet__head-tools">
                        <ul className="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm" role="tablist">
                          <ul className="m-portlet__nav">
                            <li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover" aria-expanded="true">
                              <a href="#" className="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">
                                Categories
                              </a>
                              <div className="m-dropdown__wrapper">
                                <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style={{left: 'auto', right: '36.5px'}} />
                                <div className="m-dropdown__inner">
                                  <div className="m-dropdown__body">
                                    <div className="m-dropdown__content">
                                      <ul className="m-nav">
                                        <li className="m-nav__item">
                                          <a className="m-nav__link">
                                            <i className="m-nav__link-icon flaticon-share" />
                                            <span className="m-nav__link-text">
                                              Activity
                                            </span>
                                          </a>
                                        </li>
                                        <li className="m-nav__item">
                                          <a className="m-nav__link">
                                            <i className="m-nav__link-icon flaticon-chat-1" />
                                            <span className="m-nav__link-text">
                                              Messages
                                            </span>
                                          </a>
                                        </li>
                                        <li className="m-nav__item">
                                          <a className="m-nav__link">
                                            <i className="m-nav__link-icon flaticon-info" />
                                            <span className="m-nav__link-text">
                                              FAQ
                                            </span>
                                          </a>
                                        </li>
                                        <li className="m-nav__item">
                                          <a className="m-nav__link">
                                            <i className="m-nav__link-icon flaticon-lifebuoy" />
                                            <span className="m-nav__link-text">
                                              Support
                                            </span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <li className="nav-item m-tabs__item">
                            <a className="nav-link m-tabs__link active" data-toggle="tab" href="#m_widget5_tab1_content" role="tab">
                              Last Month
                            </a>
                          </li>
                          <li className="nav-item m-tabs__item">
                            <a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget5_tab2_content" role="tab">
                              Last Week
                            </a>
                          </li>
                          <li className="nav-item m-tabs__item">
                            <a className="nav-link m-tabs__link" data-toggle="tab" href="#m_widget5_tab3_content" role="tab">
                              All time
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="m-portlet__body">
                      <div className="tab-content">
                        <div className="tab-pane active" id="m_widget5_tab1_content" aria-expanded="true">
                          <div className="m-widget5">
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img/products/product6.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Great Logo Designn
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-label">
                                    author:
                                  </span>
                                  <span className="m-widget5__info-author-name">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  100
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  views
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  20
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  comments
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product10.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Branding Mockup
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  24,583
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  sales
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  3809
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product11.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Awesome Mobile App
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  10,054
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  sales
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  1103
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product11.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Awesome Mobile App
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  10,054
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  sales
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  1103
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product11.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Awesome Mobile App
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  10,054
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  sales
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  1103
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="m-widget5__item">
                              <nav aria-label="Page navigation example">
                                <ul className="pagination pagination-circle pg-blue">
                                  <li className="page-item disabled">
                                    <a className="page-link">First</a>
                                  </li>
                                  <li className="page-item disabled">
                                    <a className="page-link" aria-label="Previous">
                                      <span aria-hidden="true">«</span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                  </li>
                                  <li className="page-item active"><a className="page-link">1</a></li>
                                  <li className="page-item"><a className="page-link">2</a></li>
                                  <li className="page-item"><a className="page-link">3</a></li>
                                  <li className="page-item"><a className="page-link">4</a></li>
                                  <li className="page-item"><a className="page-link">5</a></li>
                                  <li className="page-item">
                                    <a className="page-link" aria-label="Next">
                                      <span aria-hidden="true">»</span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </li>
                                  <li className="page-item"><a className="page-link">Last</a></li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="m_widget5_tab2_content" aria-expanded="false">
                          <div className="m-widget5">
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product11.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Branding Mockup
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  24,583
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  sales
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  3809
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product6.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Great Logo Designn
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  19,200
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  sales
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  1046
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product10.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Awesome Mobile App
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  10,054
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  sales
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  1103
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="m_widget5_tab3_content" aria-expanded="false">
                          <div className="m-widget5">
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product10.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Branding Mockup
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  10.054
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  sales
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  1103
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product11.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Great Logo Designn
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  24,583
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  sales
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  3809
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                            <div className="m-widget5__item">
                              <div className="m-widget5__pic">
                                <img className="m-widget7__img" src="assets/app/media/img//products/product6.jpg" alt="true"/>
                              </div>
                              <div className="m-widget5__content">
                                <h4 className="m-widget5__title">
                                  Awesome Mobile App
                                </h4>
                                <span className="m-widget5__desc">
                                  Make Metronic Great Again.Lorem Ipsum Amet
                                </span>
                                <div className="m-widget5__info">
                                  <span className="m-widget5__author">
                                    Author:
                                  </span>
                                  <span className="m-widget5__info-author m--font-info">
                                    Fly themes
                                  </span>
                                  <span className="m-widget5__info-label">
                                    Released:
                                  </span>
                                  <span className="m-widget5__info-date m--font-info">
                                    23.08.17
                                  </span>
                                </div>
                              </div>
                              <div className="m-widget5__stats1">
                                <span className="m-widget5__number">
                                  19,200
                                </span>
                                <br />
                                <span className="m-widget5__sales">
                                  1046
                                </span>
                              </div>
                              <div className="m-widget5__stats2">
                                <span className="m-widget5__number">
                                  1046
                                </span>
                                <br />
                                <span className="m-widget5__votes">
                                  votes
                                </span>
                              </div>
                              <div className="post-action">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                <button type="button" className="btn btn-info btn-sm">Update</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
                    <div className="m-portlet__head m-portlet__head--fit">
                      <div className="m-portlet__head-caption">
                        <div className="m-portlet__head-action">
                          <button type="button" className="btn btn-sm m-btn--pill  btn-brand">
                            Blog
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="m-portlet__body">
                      <div className="m-widget19">
                        <div className="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides" style={{minHeight: '286px'}}>
                          <img src="assets/app/media/img//blog/blog1.jpg" alt="true"/>
                          <h3 className="m-widget19__title m--font-light">
                            Introducing New Feature
                          </h3>
                          <div className="m-widget19__shadow" />
                        </div>
                        <div className="m-widget19__content">
                          <div className="m-widget19__header">
                            <div className="m-widget19__user-img">
                              <img className="m-widget19__img" src="assets/app/media/img//users/user1.jpg" alt="true"/>
                            </div>
                            <div className="m-widget19__info">
                              <span className="m-widget19__username">
                                Anna Krox
                              </span>
                              <br />
                              <span className="m-widget19__time">
                                UX/UI Designer, Google
                              </span>
                            </div>
                            <div className="m-widget19__stats">
                              <span className="m-widget19__number m--font-brand">
                                18
                              </span>
                              <span className="m-widget19__comment">
                                Comments
                              </span>
                            </div>
                          </div>
                          <h5 className="m-widget19__title">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry ...
                          </h5>
                          <div className="m-widget19__body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the
                            printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing
                            printing and typesetting industry scrambled dummy text of the printing.scrambled a type specimen book text
                            of the dummy text of the printing
                            printing and typesetting industry scrambled dummy text of the printing.scrambled a type specimen book text
                            of the dummy text of the printing
                            printing and typesetting industry scrambled dummy text of the printing.
                          </div>
                        </div>
                        <div className="m-widget19__action">
                          <button type="button" className="btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom">
                            Read More
                          </button>
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
export default Content