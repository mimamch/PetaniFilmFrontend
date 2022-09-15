import React from "react";
import Link from "next/link";

export default function VerticalMenu() {
  return (
    <div className="vertical-menu">
      <div data-simplebar="" className="h-100">
        {/*- Sidemenu */}
        <div id="sidebar-menu">
          {/* Left Menu Start */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title" key="t-menu">
              Menu
            </li>
            <li>
              <Link href="/">
                <a className="waves-effect">
                  <i className="bx bx-home-circle" />

                  <span key="t-dashboards">Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tables">
                <a className="waves-effect">
                  <i className="bx bx-table" />
                  <span key="t-chat">DataTables</span>
                </a>
              </Link>
            </li>
            <li className="menu-title" key="t-apps">
              Movies
            </li>
            <li>
              <Link href="/movies">
                <a className="waves-effect">
                  <i className="bx bx-film" />
                  <span key="t-chat">Movies</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/movies/links">
                <a className="waves-effect">
                  <i className="bx bx-link-alt"></i>
                  <span key="movie-links">Movie Links</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/movies/substitles">
                <a className="waves-effect">
                  <i className="bx bx-captions"></i>
                  <span key="movie-subtitles">Subtitles</span>
                </a>
              </Link>
            </li>
            <li className="menu-title" key="t-tv">
              TV-Shows
            </li>
            <li>
              <Link href="/tv-show">
                <a className="waves-effect">
                  <i className="bx bx-tv" />
                  <span key="t-chat">TV Shows</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Sidebar */}
      </div>
    </div>
  );
}
