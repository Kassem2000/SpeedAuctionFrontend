import { useState } from "react";
import "../pages/pageCss/signupPage.css";
import HeroImage from "../components/HeroImage";

const Signupform = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  //HANDLE FOCUS FUNCTION
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <HeroImage>
      <div className="FormInput">
        <label className="signup-label">{label}</label>
        <input
          className="signup-input"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmpassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span className="signup-span">{errorMessage}</span>
      </div>
    </HeroImage>
  );
};
export default Signupform;
