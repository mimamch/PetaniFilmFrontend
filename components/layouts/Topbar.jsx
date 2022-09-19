import Link from "next/link";
import React from "react";

export default function Topbar() {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <Link href="/">
              <a className="logo logo-dark ">
                {/* <span className="logo-sm">
                  <img src="/assets/images/logo.svg" alt="" height={22} />
                </span> */}
                <span className="logo-lg">
                  <img src="/assets/images/logo-dark.png" alt="" height={17} />
                </span>
              </a>
            </Link>
            {/* <a href="/" className="logo logo-light">
              <span className="logo-sm">
                <img src="/assets/images/logo-light.svg" alt="" height={22} />
              </span>
              <span className="logo-lg">
                <img src="/assets/images/logo-light.png" alt="" height={19} />
              </span>
            </a> */}
          </div>
          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect"
            id="vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars" />
          </button>
          {/* App Search*/}

          {/* <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
            <button
              type="button"
              className="btn header-item waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <span key="t-megamenu">Mega Menu</span>
              <i className="mdi mdi-chevron-down" />
            </button>
            <div className="dropdown-menu dropdown-megamenu">
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="font-size-14" key="t-ui-components">
                        UI Components
                      </h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="#" key="t-lightbox">
                            Lightbox
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-range-slider">
                            Range Slider
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-sweet-alert">
                            Sweet Alert
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-rating">
                            Rating
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-forms">
                            Forms
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-tables">
                            Tables
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-charts">
                            Charts
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h5 className="font-size-14" key="t-applications">
                        Applications
                      </h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="#" key="t-ecommerce">
                            Ecommerce
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-calendar">
                            Calendar
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-email">
                            Email
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-projects">
                            Projects
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-tasks">
                            Tasks
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-contacts">
                            Contacts
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h5 className="font-size-14" key="t-extra-pages">
                        Extra Pages
                      </h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="#" key="t-light-sidebar">
                            Light Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-compact-sidebar">
                            Compact Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-horizontal">
                            Horizontal layout
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-maintenance">
                            Maintenance
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-coming-soon">
                            Coming Soon
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-timeline">
                            Timeline
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-faqs">
                            FAQs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="font-size-14" key="t-ui-components">
                        UI Components
                      </h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="#" key="t-lightbox">
                            Lightbox
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-range-slider">
                            Range Slider
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-sweet-alert">
                            Sweet Alert
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-rating">
                            Rating
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-forms">
                            Forms
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-tables">
                            Tables
                          </a>
                        </li>
                        <li>
                          <a href="#" key="t-charts">
                            Charts
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-5">
                      <div>
                        <img
                          src="/assets/images/megamenu-img.png"
                          alt=""
                          className="img-fluid mx-auto d-block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="/assets/images/users/avatar-1.jpg"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                Henry
              </span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a className="dropdown-item" href="#">
                <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
                <span key="t-profile">Profile</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="bx bx-wallet font-size-16 align-middle me-1" />{" "}
                <span key="t-my-wallet">My Wallet</span>
              </a>
              <a className="dropdown-item d-block" href="#">
                <span className="badge bg-success float-end">11</span>
                <i className="bx bx-wrench font-size-16 align-middle me-1" />{" "}
                <span key="t-settings">Settings</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="bx bx-lock-open font-size-16 align-middle me-1" />{" "}
                <span key="t-lock-screen">Lock screen</span>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item text-danger" href="#">
                <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
                <span key="t-logout">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
