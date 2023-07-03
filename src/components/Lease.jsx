import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import building from "../assets/images/png/building.png"
import check from "../assets/images/svg/Checkmark.svg";
import moonblurimg from "../assets/images/png/moonblurimg.png";

const Lease = () => {
  return (
    <section className="moon_bg py-lg-5 position-relative mt_m2 ">
      <img
        className="position-absolute end-0 top_69 d-lg-block d-none"
        src={moonblurimg}
        alt="moonblurimg"
      />
      <Container className="py-lg-5 position-relative z-3">
        <Row className="align-items-center py-5">
          <Col lg={6}>
            <div className='text-lg-start text-center'>
              <img
                className="position_relative left_11 l_xl_23 w_xl_100 w_lg_85"
                src={building}
                alt="building"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="pt-lg-0 pt-4">
              <h1 className="ff_ralway fw-medium fs_xl clr_white mb-0">
                Lease Observatory
              </h1>
              <div className="d-flex align-items-center hovr_svg_white pt-4">
                <img src={check} alt="check" />
                <p className="mb-0 ps-sm-4 ps-2 ff_manrop fw_400 fs_sm clr_light ">
                  Fine-grained access control for your observatory.
                </p>
              </div>
              <div className="d-flex align-items-center hovr_svg_white pt-3">
                <img src={check} alt="check" />
                <p className="mb-0 ps-sm-4 ps-2 ff_manrop fw_400 fs_sm clr_light ">
                  Search globally for observatories that fit your specific needs
                  and budget.
                </p>
              </div>
              <div className="d-flex align-items-center hovr_svg_white pt-3">
                <img src={check} alt="check" />
                <p className="mb-0 ps-sm-4 ps-2 ff_manrop fw_400 fs_sm clr_light ">
                  Earn income by offering your observatory for lease using
                  flexible plans.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="py-lg-5"></div>
      </Container>
    </section>
  );
}

export default Lease