import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import thumb1 from "../assets/images/svg/thumb1.svg"
import thumb2 from "../assets/images/svg/thumb2.svg"
import thumb3 from "../assets/images/svg/thumb3.svg"
import watch from "../assets/images/svg/watch.svg";
import smalltowr from "../assets/images/svg/smalltowr.svg";
import telescop from "../assets/images/png/telescop.png";

const Community = () => {
  return (
    <section className="bg-black overflow-x-hidden mt_m2 py-md-5">
      <Container className='pt-4 pb-5 position-relative z-3'>
          <h1 className="ff_ralway fw-medium fs_xl clr_secondry mb-0 text-lg-start text-center">
            Community features
          </h1>
          <p className="ff_manrop fs_sm fw_400 lh_150 clr_white text-lg-start text-center pt-3">
            Join thousands of amateur and expert astrophotographers worldwide.
          </p>
        <Row className="align-items-center flex-lg-row flex-column-reverse">
          <Col lg={6} className='pt-lg-0 pt-3'>
            <div>
              <div className="d-flex">
                <img src={thumb1} alt="thumb1" />
                <div className="ps-sm-4 ms-2">
                  <p className="ff_ralway fw-semibold fs_md clr_orange mb-0">
                    Popular
                  </p>
                  <p className="ff_manrop fs_sm fw_400 lh_150 clr_white mb-0 pt-2">
                    Discover most popular images per region, target, mount, and
                    sensor size.
                  </p>
                </div>
              </div>
              <div className="d-flex pt-lg-5 pt-4">
                <img src={thumb2} alt="thumb2" />
                <div className="ps-sm-4 ms-2">
                  <p className="ff_ralway fw-semibold fs_md clr_orange mb-0">
                    Top rated
                  </p>
                  <p className="ff_manrop fs_sm fw_400 lh_150 clr_white mb-0 pt-2">
                    Find trending top rated images voted by the community.
                  </p>
                </div>
              </div>
              <div className="d-flex pt-lg-5 pt-4">
                <img src={thumb3} alt="thumb3" />
                <div className="ps-sm-4 ms-2">
                  <p className="ff_ralway fw-semibold fs_md clr_orange mb-0">
                    Staff Picks
                  </p>
                  <p className="ff_manrop fs_sm fw_400 lh_150 clr_white mb-0 pt-2">
                    Unique and memorable photos selected by our astrophotography
                    staff.
                  </p>
                </div>
              </div>
              <div className="d-flex pt-lg-5 pt-4">
                <img src={watch} alt="watch" />
                <div className="ps-sm-4 ms-2">
                  <p className="ff_ralway fw-semibold fs_md clr_orange mb-0">
                    Targets
                  </p>
                  <p className="ff_manrop fs_sm fw_400 lh_150 clr_white mb-0 pt-2">
                    Comprehensive and easy to use target search with advanced
                    planning and filtering capabilities.
                  </p>
                </div>
              </div>
              <div className="d-flex pt-lg-5 pt-4">
                <img src={smalltowr} alt="smalltowr" />
                <div className="ps-sm-4 ms-2">
                  <p className="ff_ralway fw-semibold fs_md clr_orange mb-0">
                    Nearby
                  </p>
                  <p className="ff_manrop fs_sm fw_400 lh_150 clr_white mb-0 pt-2">
                    Find who is imaging nearby. Engage with your local
                    community!
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="text-lg-start text-center pt-lg-0 pt-3">
              <img
                className="position-relative right_17 w_xl_100 w_lg_85 "
                src={telescop}
                alt="telescop"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Community