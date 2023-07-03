import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import right from "../assets/images/svg/right.svg"
import wrong from "../assets/images/svg/wrong.svg";
import tableblur from "../assets/images/png/tableblur.png";

const Pricing = () => {
  return (
    <section className="earth_bg mt_m2 py-lg-5 position-relative">
      <img className='position-absolute top_m51 d-lg-block d-none' src={tableblur} alt="tableblur" />
      <Container className="pt-lg-5 pt-3 pb-4">
        <div className="mx_966 ms-auto position-relative z-3">
          <h1 className="ff_ralway fw-medium fs_xl clr_white">Pricing Plans</h1>
          <div className="mx_966 pt_31 overflow_x_scroll">
            <table className="mx_966 w-100 overflow_x_scroll">
              <thead className="mx_966 w-100">
                <tr className="mx_966 w-100 ">
                  <td></td>
                  <td>
                    <p className="ff_ralway fw-semibold fs_md clr_white py_21">
                      EkosLive Basic
                    </p>
                  </td>
                  <td>
                    <p className="ff_ralway fw-semibold fs_md clr_white">
                      EkosLive Pro
                    </p>
                  </td>
                  <td>
                    <p className="ff_ralway fw-semibold fs_md clr_white">
                      EkosLive Ultimate
                    </p>
                  </td>
                </tr>
              </thead>
              <tbody className="mx_966 w-100">
                <tr className="mx_966 w-100">
                  <td>
                    <p className="ff_ralway fw_400 fs_sm clr_white pt-3">
                      Online Access
                    </p>
                  </td>
                  <td className="text-center pt-3">
                    <img src={right} alt="right" />
                  </td>
                  <td className="text-center pt-3">
                    <img src={right} alt="right" />
                  </td>
                  <td className="text-center pt-3">
                    <img src={right} alt="right" />
                  </td>
                </tr>
                <tr className="mx_966 w-100">
                  <td>
                    <p className="ff_ralway fw_400 fs_sm clr_white  pt_45 pt_md_24">
                      Cloud Storage
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24">
                      500mb
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24">
                      5gb
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24">
                      20gb
                    </p>
                  </td>
                </tr>
                <tr className="mx_966 w-100">
                  <td>
                    <p className="ff_ralway fw_400 fs_sm clr_white pt_45 pt_md_24">
                      Observatory Lease
                    </p>
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={wrong} alt="wrong" />
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={wrong} alt="wrong" />
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={right} alt="right" />
                  </td>
                </tr>
                <tr className="mx_966 w-100">
                  <td>
                    <p className="ff_ralway fw_400 fs_sm clr_white pt_45 pt_md_24">
                      Spectators
                    </p>
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={wrong} alt="wrong" />
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={right} alt="right" />
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={right} alt="right" />
                  </td>
                </tr>
                <tr className="mx_966 w-100">
                  <td>
                    <p className="ff_ralway fw_400 fs_sm clr_white pt_45 pt_md_24">
                      Push Notifications
                    </p>
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={wrong} alt="wrong" />
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={right} alt="right" />
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={right} alt="right" />
                  </td>
                </tr>
                <tr className="mx_966 w-100">
                  <td>
                    <p className="ff_ralway fw_400 fs_sm clr_white pt_45 pt_md_24">
                      Broadcasting
                    </p>
                  </td>
                  <td className="text-center pt_45 pt_md_24">
                    <img src={wrong} alt="wrong" />
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24">
                      Yes, Limited
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24">
                      Yes, Full
                    </p>
                  </td>
                </tr>
                <tr className="mx_966 w-100">
                  <td>
                    <p className="ff_ralway fw_400 fs_sm clr_white pt_45 pt_md_24">
                      Access Control
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24 mb-0">
                      Limited
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24">
                      Limited to 5 visitors
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24">
                      Unlimited
                    </p>
                  </td>
                </tr>
                <tr className="mx_966 w-100">
                  <td>
                    <p className="ff_ralway fw_400 fs_sm clr_white pb-4 pt_45 pt_md_24">
                      Price
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24 pb-4">
                      Free
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24 pb-4">
                      $4.99
                    </p>
                  </td>
                  <td>
                    <p className="ff_manrop fw-medium fs_md clr_white text-center pt_45 pt_md_24 pb-4">
                      $9.99
                    </p>
                  </td>
                </tr>
                <tr className="mx_966 w-100">
                  <td className="bg_transprnt"></td>
                  <td className="text-center pt_31">
                    <button className="ff_manrop fw-semibold lh_150 fs_sm clr_white">
                      Choose Plan
                    </button>
                  </td>
                  <td className="text-center pt_31">
                    <button className="ff_manrop fw-semibold lh_150 fs_sm clr_white">
                      Choose Plan
                    </button>
                  </td>
                  <td className="text-center pt_31">
                    <button className="ff_manrop fw-semibold lh_150 fs_sm clr_white">
                      Choose Plan
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Pricing