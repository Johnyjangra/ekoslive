import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import logo from "../assets/images/svg/logo.svg"
import search from "../assets/images/svg/search.svg";
import closebtn from "../assets/images/png/closebtn.png";

const MyNav = () => {
    const [nav, setnav] = useState(false)

  if (nav) {
    document.body.classList.add('overflow-hidden')
  } else {
     document.body.classList.remove("overflow-hidden");
  }
  
  return (
    <section className="nav_bg_blur py_20 position-relative z-3">
      <Container>
        <div className="d-flex justify-content-between">
          <img className="curser_pointr w_xsm_43" src={logo} alt="logo" />
          <div className="bg_blur w_398 w_xl_70 w_xxl_229 d-flex flex-row justify-content-between align-items-center px-4 ">
            <input
              className="nav_input border-0 ff_ralway fs_sm clr_white op_06 w_80 d-xl-block d-none"
              type="search"
              placeholder="Search here..."
            />
            <img
              className="h_26 w_26 curser_pointr "
              src={search}
              alt="search"
            />
          </div>
          <ul
            className={
              nav
                ? "top_0  ps-0 mb-0 d-flex align-items-center flex-lg-row flex-column justify-content-lg-start justify-content-center mobile_ul"
                : " top_m1381  ps-0 mb-0 d-flex align-items-center flex-lg-row flex-column justify-content-lg-start justify-content-center mobile_ul"
            }
          >
            <img
              onClick={() => {
                setnav(false);
              }}
              className="h_40 w_40 position-absolute top_3 right_5 d-lg-none d-block"
              src={closebtn}
              alt="closebtn"
            />
            <li>
              <a
                onClick={() => {
                  setnav(false);
                }}
                className="ff_ralway fs_sm fw_400 clr_white op_06 hovr_orng_clr"
                href="#"
              >
                About
              </a>
            </li>
            <li className="ms_33 ms_xl_20 ms_lg_0 mt-lg-0 mt-3">
              <a
                onClick={() => {
                  setnav(false);
                }}
                className="ff_ralway fs_sm fw_400 clr_white op_06 hovr_orng_clr"
                href="#"
              >
                Features
              </a>
            </li>
            <li className="ms_33 ms_xl_20 ms_lg_0  mt-lg-0 mt-3">
              <a
                onClick={() => {
                  setnav(false);
                }}
                className="ff_ralway fs_sm fw_400 clr_white op_06 hovr_orng_clr"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="ms_33 ms_xl_20 ms_lg_0  mt-lg-0 mt-3">
              <a
                onClick={() => {
                  setnav(false);
                }}
                className="ff_ralway fs_sm fw_400 clr_white op_06 hovr_orng_clr"
                href="#"
              >
                Support
              </a>
            </li>
            <li className="ms_33 ms_xl_20 ms_lg_0  mt-lg-0 mt-3 ">
              <a
                onClick={() => {
                  setnav(false);
                }}
                className="ff_ralway fs_sm fw_400 clr_white op_06 hovr_orng_clr"
                href="#"
              >
                FAQs
              </a>
            </li>
            <button
              onClick={() => {
                setnav(false);
              }}
              className="ff_ralway fs_sm fw_400 clr_white bg_trnsprnt white_border py_14 px_32 ms_40 ms_xl_35 hovr_bg_orng ms_lg_0  mt-lg-0 mt-3"
            >
              {" "}
              Login
            </button>
            <button
              onClick={() => {
                setnav(false);
              }}
              className="ff_ralway fs_sm fw_400 clr_white bg_trnsprnt white_border py_14 px_32 ms-2 hovr_bg_orng  mt-lg-0 mt-3"
            >
              SignUp
            </button>
          </ul>
          <div className='d-lg-none d-block'
            onClick={() => {
              setnav(true);
            }}
          >
            <div className="nav_icon"></div>
            <div className="nav_icon"></div>
            <div className="nav_icon"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MyNav