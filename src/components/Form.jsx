import React from "react";

const Form = ({
  langRadio,
  langRadioHandler,
  versRadio,
  versRadioHandler,
  select,
  selectHandler,
}) => {
  return (
    <form>
      <div className="form-wrapper">
        <div className="input-group">
          <div className="radio-wrapper">
            <input
              type="radio"
              name="language"
              id="languageSK"
              value="SK"
              checked={langRadio === "SK"}
              onChange={(e) => {
                langRadioHandler(e);
              }}
            />
            <label htmlFor="languageSK">Slovak</label>
          </div>
          <div className="radio-wrapper">
            <input
              type="radio"
              name="language"
              id="languageCZ"
              value="CZ"
              checked={langRadio === "CZ"}
              onChange={(e) => langRadioHandler(e)}
            />
            <label htmlFor="languageCZ">Czech</label>
          </div>
        </div>
        <div className="input-group">
          <div className="radio-wrapper">
            <input
              type="radio"
              name="version"
              id="versionCity"
              value="City"
              checked={versRadio === "City"}
              onChange={(e) => {
                versRadioHandler(e);
              }}
            />
            <label htmlFor="versionCity">City</label>
          </div>
          <div className="radio-wrapper">
            <input
              type="radio"
              name="version"
              id="versionNature"
              value="Nature"
              checked={versRadio === "Nature"}
              onChange={(e) => {
                versRadioHandler(e);
              }}
            />
            <label htmlFor="versionNature">Nature</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
