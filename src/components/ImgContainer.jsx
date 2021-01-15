import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ImgContainer = ({ calendars, parameters }) => {
  const { language, version } = parameters;
  const [index, setIndex] = useState(0);
  let source = "";
  calendars.map((calendar) => {
    if (calendar.language === language && calendar.version === version) {
      source = calendar.images[index].src;
    }
    return source;
  });
  return (
    <div className="img-container">
      <button onClick={() => index > 0 && setIndex(index - 1)}>
        <IoIosArrowBack className="arrow" />
      </button>
      <img src={source} alt="" />
      <button onClick={() => index < 11 && setIndex(index + 1)}>
        <IoIosArrowForward className="arrow" />
      </button>
    </div>
  );
};

export default ImgContainer;
