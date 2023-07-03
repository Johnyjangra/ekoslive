import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../assets/images/svg/logo.svg"
import google from "../assets/images/svg/google.svg";
import apple from "../assets/images/svg/apple.svg";
import twit from "../assets/images/svg/twit.svg";
import insta from "../assets/images/svg/insta.svg";
import discord from "../assets/images/svg/discord.svg";

const Footer = () => {
  return (
    <section className="bg_gray mt_m2 pt-lg-5 pt-4 position-relative z-3 overflow-hidden">
      <Container className="pt-3 pb-lg-5 pb-4">
        <Row className="justify-content-between">
          <Col lg={4}>
            <div className="text-lg-start text-center">
              <img src={logo} alt="logo" />
              <p className="ff_ralway fw_400 lh_150 fs_sm clr_white op_08 pe-xl-5 me-lg-5 pt-2 mb-0">
                Lorem ipsum dolor sit amet consectetur. Neque turpis
                pellentesque vulputate ut pharetra sodales nunc.
              </p>
              <div className="pt-3">
                <img className="curser_pointr" src={google} alt="google" />
                <img className="ms-2 curser_pointr" src={apple} alt="apple" />
              </div>
            </div>
          </Col>
          <Col lg={8} className="pt-lg-0 pt-4">
            <Row>
              <Col md={11}>
                <Row className="">
                  <Col sm={3} xs={6}>
                    <div>
                      <p className="ff_ralway fw-medium fs_sm clr_white lh_150 mb-0 text-sm-start text-center">
                        Main
                      </p>
                      <ul className="ps-0 mb-0 text-sm-start text-center">
                        <li className="pt_14 pt_xs_10">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            About
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08  hovr_orng_clr"
                            href="#"
                          >
                            Features
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Pricing
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Support
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            FAQs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col sm={3} xs={6}>
                    <div>
                      <p className="ff_ralway fw-medium fs_sm clr_white lh_150 mb-0 text-sm-start text-center">
                        Useful links
                      </p>
                      <ul className="ps-0 mb-0 text-sm-start text-center">
                        <li className="pt_14 pt_xs_10">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08  hovr_orng_clr"
                            href="#"
                          >
                            Quis ac
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Fermentum justo
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Ornare eu
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Sagittis fringilla
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Platea libero
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col sm={3} xs={6} className="pt-lg-0 pt-4">
                    <div>
                      <p className="ff_ralway fw-medium fs_sm clr_white lh_150 mb-0 text-sm-start text-center">
                        Dashboard
                      </p>
                      <ul className="ps-0 mb-0 text-sm-start text-center">
                        <li className="pt_14 pt_xs_10">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08  hovr_orng_clr"
                            href="#"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Target
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Steller
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Sagittis fringilla
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col sm={3} xs={6} className="pt-lg-0 pt-4">
                    <div>
                      <p className="ff_ralway fw-medium fs_sm clr_white lh_150 mb-0 text-sm-start text-center">
                        Other
                      </p>
                      <ul className="ps-0 mb-0 text-sm-start text-center">
                        <li className="pt_14 pt_xs_10">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08  hovr_orng_clr"
                            href="#"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Terms & Conditions
                          </a>
                        </li>
                        <li className="pt-2">
                          <a
                            className="ff_manrop fw_400 fs_xsm clr_white  op_08 hovr_orng_clr"
                            href="#"
                          >
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={1}>
                <div className="pt-4">
                  <div className="d-md-block d-none">
                    <div>
                      <img
                        className="foot_img_hovr curser_pointr"
                        src={twit}
                        alt="twit"
                      />
                    </div>
                    <div className="pt-3 ">
                      <img
                        className="foot_img_hovr curser_pointr"
                        src={insta}
                        alt="insta"
                      />
                    </div>
                    <div className="pt-3 ">
                      <img
                        className="foot_img_hovr curser_pointr"
                        src={discord}
                        alt="discord"
                      />
                    </div>
                  </div>
                  <div className="d-md-none d-block text-center">
                    <img
                      className="foot_img_hovr curser_pointr"
                      src={twit}
                      alt="twit"
                    />
                    <img
                      className="foot_img_hovr ms-3 curser_pointr"
                      src={insta}
                      alt="insta"
                    />
                    <img
                      className="foot_img_hovr ms-3 curser_pointr"
                      src={discord}
                      alt="discord"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="gray_line"></div>
      <p className="mb-0 ff_manrop fw_400 fs_xsm clr_white  op_08 text-center py-3">
        Copyright@2023 | All Rights Reserved
      </p>
    </section>
  );
}

export default Footer