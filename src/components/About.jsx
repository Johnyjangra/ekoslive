import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import check from "../assets/images/svg/Checkmark.svg"
import towerimg from "../assets/images/png/towerimg.png";
import blurimgtwr from "../assets/images/png/blurimgtwr.png";

const About = () => {
  return (
    <section className="bg-black pt-5 mt_m2 pb-4">
      <Container className="pb-lg-5 pt-4">
        <Row className='align-items-center flex-lg-row flex-column-reverse'>
          <Col lg={5} className="pe-xxl-5 me-xxl-5">
            <div className="pe-xxl-4 pt-lg-0 pt-lg-4">
              <h1 className="ff_ralway fw-medium fs_xl clr_white">
                About EkosLive
              </h1>
              <div className="d-flex align-items-center hovr_svg_white">
                <img src={check} alt="check" />
                <p className="mb-0 ps-sm-4 ps-2 ff_manrop fw_400 fs_sm clr_light ">
                  Powered by Open Source technologies.
                </p>
              </div>
              <div className="d-flex align-items-center hovr_svg_white pt-4">
                <img src={check} alt="check" />
                <p className="mb-0 ps-sm-4 ps-2 ff_manrop fw_400 fs_sm clr_light pe-xl-5">
                  Transforms your astrophotography capture platform to the
                  cloud.
                </p>
              </div>
              <div className="d-flex align-items-center hovr_svg_white pt-4">
                <img src={check} alt="check" />
                <p className="mb-0 ps-sm-4 ps-2  ff_manrop fw_400 fs_sm clr_light pe-xl-5">
                  Online community where you can explore, share, and collaborate
                  your passion in Astronomy.
                </p>
              </div>
              <div className="d-flex align-items-center hovr_svg_white pt-4">
                <img src={check} alt="check" />
                <p className="mb-0 ps-sm-4 ps-2 ff_manrop fw_400 fs_sm clr_light pe-xl-4">
                  Access to global community-driven observatories. Host and
                  broadcast virtual star parties.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='position-relative'>
              <img
                className="w-100 after _blur"
                src={towerimg}
                alt="towerimg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About