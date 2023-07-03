import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dottedline from "../assets/images/png/dottedline.png"
import round1 from "../assets/images/svg/round1.svg"
import round3 from "../assets/images/svg/round3.svg"
import round4 from "../assets/images/svg/round4.svg"
import supportblur from "../assets/images/png/supportblur.png";
import circleimg from "../assets/images/png/circleimg.png";

const Support = () => {
  return (
    <section className="bg-black mt_m2 py-md-5">
      <Container className="py-lg-5">
        <Row className="py-lg-5">
          <Col lg={6} className="position-relative">
            <img
              className="position-absolute support_blur_set d-md-block d-none"
              src={supportblur}
              alt="supportblur"
            />
            <div className='d-sm-none d-block'>
              <img className='w-100' src={circleimg} alt="circleimg" />
            </div>
            <div className="position-relative text-center d-sm-block d-none">
              <img className="" src={dottedline} alt="dottedline" />
              <img
                className="position-absolute left_21 top_10 "
                src={round1}
                alt="round1"
              />
              <img
                className="position-absolute r_19 dotted_animates"
                src={round3}
                alt="round3"
              />
              <img
                className="position-absolute l_41 btm_18"
                src={round4}
                alt="round4"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="pt-lg-0 pt-5 text-lg-start text-center">
              <h1 className="ff_ralway fw-medium fs_xl clr_white position-relative z-3">
                Supported Platforms
              </h1>
              <p className="ff_manrop fw_400 fs_sm clr_white op_06 mb-0">
                Out of the box support for StellarMate, Linux, and MacOS using
                KStars. 3rd party integrations planned for popular capture
                software.
              </p>
              <button className="ff_manrop fw-semibold fs_sm clr_white bg_orange px_32 py_17 hovr_shadow mt-lg-5 mt-4 position-relative z-3">
                Learn More
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Support