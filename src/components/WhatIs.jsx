import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import nikepic from "../assets/images/png/nikepic.png"
import orangebg from "../assets/images/png/orangebg.png";
import orangeb2 from "../assets/images/png/orangebg2.png";

const WhatIs = () => {
  return (
    <section className="bg-black pt-lg-5 mt_m2 position-relative z_ m3">
      <Container className="pt-lg-4 pb-lg-5">
        <Row className="pb-md-5">
          <Col lg={6} className="position-relative z _1">
            <img
              className="position-absolute w_85 top_m120 start_m10 top_xl_71 start_xxl_21 top_lg_38 d-lg-block d-none"
              src={orangebg}
              alt="orangebg"
            />
            <img
              className="position-absolute w-100 orange_2_set top_lg_38 d-lg-block d-none"
              src={orangeb2}
              alt="orangebg"
            />
            <div className="text-center">
              <img className='w_sm_85 position-relative z_ m1' src={nikepic} alt="nikepic" />
            </div>
          </Col>
          <Col lg={6}>
            <div className='text-lg-start text-center pt-lg-0 pt-4'>
              <h1 className="ff_ralway fw-medium fs_xl clr_white">
                What is EkosLive?
              </h1>
              <p className="ff_manrop fw_400 fs_sm lh_180 clr_white op_06 pe-lg-5 me-xl-5">
                EkosLive is an online cloud-based App to remotely control your
                observatory from anywhere and at any time. Store, search, share,
                and tag your images. Get notifications about the imaging
                progress, live-stack deep sky targets, and invite others to join
                your session. Engage with the astrophotography community and
                discover new targets and equipment. Use it on your phone,
                tablet, or computer.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhatIs