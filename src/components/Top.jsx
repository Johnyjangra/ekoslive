import React, { useState } from "react";
import toparrow from "../assets/images/png/toparrow.jpeg";
const TopToBottom = () => {
  const [first, setfirst] = useState(true);
  const clikontop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section className=" position-fixed arrow_pos curser_pointr z-3">
      <img
        src={toparrow}
        alt="toparrow"
        onClick={() => clikontop()}
        className={first ? "d-none" : "d-block"}
      />
    </section>
  );
};

export default TopToBottom;
