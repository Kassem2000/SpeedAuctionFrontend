import { useState } from "react";
import "../pages/pageCss/signupPage.css";

const Signupform = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  //HANDLE FOCUS FUNCTION
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "comfirmpassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default Signupform;
