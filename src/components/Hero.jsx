import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyNav from './MyNav'

const Hero = () => {
  return (
    <section className="hero_bg">
      <MyNav />
      <Container>
        <div className="pt-md-5"></div>
        <div className="pt-md-5"></div>
        <div className="pt-lg-5"></div>
        <div className="pt-lg-5"></div>
        <div className="pt-lg-5"></div>
        <div className="pt-md-5"></div>
        <div className="pt-md-5"></div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <Row className="align-items-end justify-content-end pb-5  pt _427 pb_ 130">
          <Col lg={8}>
            <div className="ps-lg-5 text-lg-start text-center">
              <h1 className="ff_ralway fw_400 fs_2xl clr_white">
                Your ultimate <span className="clr_orange">cloud </span>
                astrophotography platform
              </h1>
              <p className="ff_manrop fw_400 fs_sm clr_lightwhite mb-0">
                Capture, share, and explore the sky from anywhere and at any
                time.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="text-end pe-lg-5 text-lg-end text-center pt-lg-0 pt-4">
              <button className="ff_manrop fw-semibold fs_sm clr_white bg_orange px_32 py_17 hovr_shadow">
                Discover
              </button>
            </div>
          </Col>
        </Row>
        <div className="pt-5"></div>
        <div className="pt-md-4"></div>
      </Container>
    </section>
  );
}

export default Hero