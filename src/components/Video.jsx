import React from 'react'
import { Col, Container } from 'react-bootstrap'
import videoimg from "../assets/images/png/videoimg.png"
import playbutton from "../assets/images/svg/playbutton.svg";
import videoblur from "../assets/images/png/videoblur.png";
import videoblur2 from "../assets/images/png/videoblur2.png";

const Video = () => {
  return (
    <section className="bg-black mt_m2 py-lg-5 position-relative">
      <img
        className="position-absolute end-0 top_m23 d-lg-block d-none"
        src={videoblur}
        alt="videoblur"
      />
      <img
        className="position-absolute d-lg-block d-none w_45"
        src={videoblur2}
        alt="videoblur"
      />
      <Container className="py-5">
        <Col className="position-relative pt-lg-5">
          <img className="w-100 " src={videoimg} alt="videoimg" />
          <button
            type="button"
            class="btn btn-pr imary "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div className="text-center position-absolute play_btnset">
              <img
                className="curser_pointr"
                src={playbutton}
                alt="playbutton"
              />
              <p className="ff_ralway fw-medium fs_xl clr_white mb-0 d-md-block d-none">
                StellerMate app v2.1.0 Demo
              </p>
            </div>
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade "
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                {/* <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div> */}
                <div class="modal- body ">
                  <div className='text-center'>
                    <iframe
                      className="pt-3 w_320 w_xsm_93"
                      width="470 "
                      height="315"
                      src="https://www.youtube.com/embed/bc6P9OjYmI0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  {/* <button type="button" class="btn btn-primary">
                    Save changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
}

export default Video