import React, { useEffect, useState } from 'react'
import nike from "../assets/images/png/nikepic.png"

const PreLoader = () => {
  const [first, setfirst] = useState(0);
  useEffect(() => {
    setfirst(0);
    setTimeout(() => {
      setfirst(1);
      document.body.classList.remove("ovr_hiddn");
    }, 4000);
  }, []);

  // if (first === 0) {

  //     document.documentElement.scrollTop = 0
  // }
  // else {
  //     document.body.style.overflow = "hidden"
  //     document.documentElement.scrollTop = 0
  // }
  return (
    <>
      {first === 0 ? (
        <section style={{ background: "#000" }} className=" min_vh_100">
          <div
            style={{ background: "#000", minHeights: "100vh " }}
            className="bg_black center min_vh_100 d-flex flex-column justify-content-center align-items-center"
          >
            {/* <h1 className="clr_white animation">PreLoader</h1> */}
            <img className="animation" src={nike} alt="nike" />
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default PreLoader