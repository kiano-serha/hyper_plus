import { useContext, useEffect, useState } from "react";
import HyperPlusLogo from '../assets/hyper_plus.png'
import UccLogo from '../assets/ucclogo.png'
import { useForm } from "react-hook-form";
import axios from "axios";
import '../App.css'

export default function Navbar({ pageName }) {
  return (
    <div className="mb-3">
      {/* {pageName} */}
      <header className="navbar navbar-expand-md d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
            aria-controls="navbar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal">
            <img src={HyperPlusLogo} className="w-25" />
          </h1>
          <div className="" style={{ textAlign: "right" }}>
            <img src={UccLogo} className="w-75" style={{ marginRight: 0 }} id="ucc_logo" />
          </div>
        </div>
      </header>
      <header className="navbar-expand-md">
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="navbar">
            <div className="container-xl">
              <ul className="navbar-nav">
                <li
                  className={`nav-item ${pageName == "home" ? "active" : ""}`}
                >
                  <a className="nav-link" href="/">
                    <span className="nav-link-title">Home Page</span>
                  </a>
                </li>
                <li
                  className={`nav-item ${pageName == "chat" ? "active" : ""}`}
                >
                  <a className="nav-link" href="/chat">
                    <span className="nav-link-title">Start Chat</span>
                  </a>
                </li>
                <li
                  className={`nav-item ${pageName == "dev" ? "active" : ""}`}
                >
                  <a className="nav-link" href="/dev">
                    <span className="nav-link-title">Development</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}