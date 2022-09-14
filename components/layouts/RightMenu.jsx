import React from "react";

export default function RightMenu() {
  return (
    <div className="right-bar">
      <div data-simplebar="" className="h-100">
        <div className="rightbar-title d-flex align-items-center px-3 py-4">
          <h5 className="m-0 me-2">Settings</h5>
          <a href="#" className="right-bar-toggle ms-auto">
            <i className="mdi mdi-close noti-icon" />
          </a>
        </div>
        {/* Settings */}
        <hr className="mt-0" />
        <h6 className="text-center mb-0">Choose Layouts</h6>
        <div className="p-4">
          <div className="mb-2">
            <img
              src="assets/images/layouts/layout-1.jpg"
              className="img-thumbnail"
              alt="layout images"
            />
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="light-mode-switch"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="light-mode-switch">
              Light Mode
            </label>
          </div>
          <div className="mb-2">
            <img
              src="assets/images/layouts/layout-2.jpg"
              className="img-thumbnail"
              alt="layout images"
            />
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="dark-mode-switch"
            />
            <label className="form-check-label" htmlFor="dark-mode-switch">
              Dark Mode
            </label>
          </div>
          <div className="mb-2">
            <img
              src="assets/images/layouts/layout-3.jpg"
              className="img-thumbnail"
              alt="layout images"
            />
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="rtl-mode-switch"
            />
            <label className="form-check-label" htmlFor="rtl-mode-switch">
              RTL Mode
            </label>
          </div>
          <div className="mb-2">
            <img
              src="assets/images/layouts/layout-4.jpg"
              className="img-thumbnail"
              alt="layout images"
            />
          </div>
          <div className="form-check form-switch mb-5">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="dark-rtl-mode-switch"
            />
            <label className="form-check-label" htmlFor="dark-rtl-mode-switch">
              Dark RTL Mode
            </label>
          </div>
        </div>
      </div>{" "}
      {/* end slimscroll-menu*/}
    </div>
  );
}
