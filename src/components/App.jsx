import React, { useState } from "react";
// images
import citySkJan from "../assets/images/SK City/01-gif.jpg";
import citySkFeb from "../assets/images/SK City/02-gif.jpg";
import citySkMar from "../assets/images/SK City/03-gif.jpg";
import citySkApr from "../assets/images/SK City/04-gif.jpg";
import citySkMay from "../assets/images/SK City/05-gif.jpg";
import citySkJun from "../assets/images/SK City/06-gif.jpg";
import citySkJul from "../assets/images/SK City/07-gif.jpg";
import citySkAug from "../assets/images/SK City/08-gif.jpg";
import citySkSep from "../assets/images/SK City/09-gif.jpg";
import citySkOkt from "../assets/images/SK City/10-gif.jpg";
import citySkNov from "../assets/images/SK City/11-gif.jpg";
import citySkDec from "../assets/images/SK City/12-gif.jpg";
import natureSkJan from "../assets/images/SK Nature/01-gif.jpg";
import natureSkFeb from "../assets/images/SK Nature/02-gif.jpg";
import natureSkMar from "../assets/images/SK Nature/03-gif.jpg";
import natureSkApr from "../assets/images/SK Nature/04-gif.jpg";
import natureSkMay from "../assets/images/SK Nature/05-gif.jpg";
import natureSkJun from "../assets/images/SK Nature/06-gif.jpg";
import natureSkJul from "../assets/images/SK Nature/07-gif.jpg";
import natureSkAug from "../assets/images/SK Nature/08-gif.jpg";
import natureSkSep from "../assets/images/SK Nature/09-gif.jpg";
import natureSkOkt from "../assets/images/SK Nature/10-gif.jpg";
import natureSkNov from "../assets/images/SK Nature/11-gif.jpg";
import natureSkDec from "../assets/images/SK Nature/12-gif.jpg";
import cityCzJan from "../assets/images/CZ City/01-gif.jpg";
import cityCzFeb from "../assets/images/CZ City/02-gif.jpg";
import cityCzMar from "../assets/images/CZ City/03-gif.jpg";
import cityCzApr from "../assets/images/CZ City/04-gif.jpg";
import cityCzMay from "../assets/images/CZ City/05-gif.jpg";
import cityCzJun from "../assets/images/CZ City/06-gif.jpg";
import cityCzJul from "../assets/images/CZ City/07-gif.jpg";
import cityCzAug from "../assets/images/CZ City/08-gif.jpg";
import cityCzSep from "../assets/images/CZ City/09-gif.jpg";
import cityCzOkt from "../assets/images/CZ City/10-gif.jpg";
import cityCzNov from "../assets/images/CZ City/11-gif.jpg";
import cityCzDec from "../assets/images/CZ City/12-gif.jpg";
import natureCzJan from "../assets/images/CZ Nature/01-gif.jpg";
import natureCzFeb from "../assets/images/CZ Nature/02-gif.jpg";
import natureCzMar from "../assets/images/CZ Nature/03-gif.jpg";
import natureCzApr from "../assets/images/CZ Nature/04-gif.jpg";
import natureCzMay from "../assets/images/CZ Nature/05-gif.jpg";
import natureCzJun from "../assets/images/CZ Nature/06-gif.jpg";
import natureCzJul from "../assets/images/CZ Nature/07-gif.jpg";
import natureCzAug from "../assets/images/CZ Nature/08-gif.jpg";
import natureCzSep from "../assets/images/CZ Nature/09-gif.jpg";
import natureCzOkt from "../assets/images/CZ Nature/10-gif.jpg";
import natureCzNov from "../assets/images/CZ Nature/11-gif.jpg";
import natureCzDec from "../assets/images/CZ Nature/12-gif.jpg";
// components
import Header from "./Header";
import Form from "./Form";
import ImgContainer from "./ImgContainer";
import BasketModal from "./BasketModal";
import Footer from "./Footer";

import "../css/App.css";

const App = () => {
  const calendars = [
    {
      images: [
        { src: citySkJan },
        { src: citySkFeb },
        { src: citySkMar },
        { src: citySkApr },
        { src: citySkMay },
        { src: citySkJun },
        { src: citySkJul },
        { src: citySkAug },
        { src: citySkSep },
        { src: citySkOkt },
        { src: citySkNov },
        { src: citySkDec },
      ],
      language: "SK",
      version: "City",
    },
    {
      images: [
        { src: natureSkJan },
        { src: natureSkFeb },
        { src: natureSkMar },
        { src: natureSkApr },
        { src: natureSkMay },
        { src: natureSkJun },
        { src: natureSkJul },
        { src: natureSkAug },
        { src: natureSkSep },
        { src: natureSkOkt },
        { src: natureSkNov },
        { src: natureSkDec },
      ],
      language: "SK",
      version: "Nature",
    },
    {
      images: [
        { src: cityCzJan },
        { src: cityCzFeb },
        { src: cityCzMar },
        { src: cityCzApr },
        { src: cityCzMay },
        { src: cityCzJun },
        { src: cityCzJul },
        { src: cityCzAug },
        { src: cityCzSep },
        { src: cityCzOkt },
        { src: cityCzNov },
        { src: cityCzDec },
      ],
      language: "CZ",
      version: "City",
    },
    {
      images: [
        { src: natureCzJan },
        { src: natureCzFeb },
        { src: natureCzMar },
        { src: natureCzApr },
        { src: natureCzMay },
        { src: natureCzJun },
        { src: natureCzJul },
        { src: natureCzAug },
        { src: natureCzSep },
        { src: natureCzOkt },
        { src: natureCzNov },
        { src: natureCzDec },
      ],
      language: "CZ",
      version: "Nature",
    },
  ];
  // states:
  const [langRadio, setLangRadio] = useState("SK");
  const [versRadio, setVersRadio] = useState("City");
  const [parameters, setParameters] = useState({
    language: "SK",
    version: "City",
    index: 0,
  });
  const [basketModal, setBasketModal] = useState(false);
  // handlers:
  const langRadioHandler = (e) => {
    setLangRadio(e.target.value);
    e.target.value === "SK"
      ? setParameters({ ...parameters, language: "SK" })
      : setParameters({ ...parameters, language: "CZ" });
  };
  const versRadioHandler = (e) => {
    setVersRadio(e.target.value);
    e.target.value === "City"
      ? setParameters({ ...parameters, version: "City" })
      : setParameters({ ...parameters, version: "Nature" });
  };
  const basketModalHandler = (e) => {
    setBasketModal(!basketModal);
  };
  const hideBasketModal = (e) => {
    basketModal && setBasketModal(false)
  }
  // current year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <main>
      <Header basketModalHandler={basketModalHandler} year={year} />
      <Form
        langRadio={langRadio}
        versRadio={versRadio}
        langRadioHandler={langRadioHandler}
        versRadioHandler={versRadioHandler}
      />
      <ImgContainer calendars={calendars} parameters={parameters} />
      <BasketModal basketModal={basketModal} hideBasketModal={hideBasketModal}  />
      <Footer year={year} />
    </main>
  );
};

export default App;
