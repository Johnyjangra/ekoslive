import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import boxa from "../assets/images/svg/boxa.svg"
import telescop from "../assets/images/svg/telescop.svg";
import certified from "../assets/images/svg/certified.svg";
import astro from "../assets/images/svg/astro.svg";

const Integration = () => {
  return (
    <section className="bg-black mt_m2 pt-5 pb-5">
      <Container className="pt-4 ">
        <h1 className="ff_ralway fw-medium fs_xl clr_white text-center mb-0 position-relative z-3">
          Integrations
        </h1>
        <Col xl={10} className="mx-auto pt-md-5 pt-4">
          <Row className="pt-lg-3">
            <Col lg={3} md={4} sm={6}>
              <div className="blur_card_back text-center pt_31 pb_40 h-100 hovr_box px-2">
                <img src={boxa} alt="boxa" />
                <p className="ff_ralway fw-semibold fs_lg clr_secondry pt-4 mb-0">
                  Astrobin
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="pt-sm-0 pt-4">
              <div className="blur_card_back text-center pt_31 pb_40 h-100 hovr_box px-2">
                <img src={telescop} alt="telescop" />
                <p className="ff_ralway fw-semibold fs_lg clr_secondry pt-4 mb-0">
                  Telescopius
                </p>
              </div>
            </Col>
            <Col
              lg={3}
              md={4}
              sm={6}
              className="pt-md-0 pt-4 position-relative z-3"
            >
              <div className="blur_card_back text-center pt_31 pb_40 h-100 hovr_box px-2">
                <img src={certified} alt="certified" />
                <p className="ff_ralway fw-semibold fs_lg clr_secondry pt-4 mb-0">
                  Astrobin
                </p>
              </div>
            </Col>
            <Col
              lg={3}
              md={4}
              sm={6}
              className="pt-lg-0 pt-4 position-relative z-3"
            >
              <div className="blur_card_back text-center pt_31 pb_40 h-100 hovr_box px-2">
                <img src={astro} alt="astro" />
                <p className="ff_ralway fw-semibold fs_lg clr_secondry pt-5 mb-0">
                  Astrometry.net
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
}

export default Integration