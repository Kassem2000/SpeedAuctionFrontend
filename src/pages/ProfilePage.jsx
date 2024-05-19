import { ThumbnailProvider } from "../context/ThumbnailContext";
import HeroImage from "../components/HeroImage";
import AuctionDisplayer from "../components/AuctionDisplayer";
import "./pageCss/profilePage.css";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const ProfilePage = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({ ...state.user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //to update userdata in the backend
      const { data } = await axios.get(
        "http://localhost:8080/api/user/{userid}",

        formData,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "UPDATE_USER",
        payload: data,
      });
      alert("profile updeted");
    } catch (err) {
      console.error("profile update error" + err);
      alert("failed to update" + err.message);
    }
  };

  return (
    <ThumbnailProvider>
      <HeroImage>
        <div className="pageContainer">
          <div className="leftsideProfile">
            <AuctionDisplayer className="auctionDisplayProfile" />
          </div>
          <div className="rightsideProfile">
            <div className="profilePictureWrapper">
              <div className="profilePic"></div>
              <div className="picInfo">
                <p className="username">{formData.username}</p>
                <div className="ratingProfile">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
            <div className="formContainerProfile">
              <form onSubmit={handleSubmit} className="formContainer">
                <div>
                  <label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      value={formData.username || ""}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="firstName"
                      value={formData.first_name || ""}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="lastName"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="phoneNumber"
                      value={formData.phone_number || ""}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="text"
                      name="address"
                      placeholder="address"
                      value={formData.adress}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="country"
                      placeholder="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="city"
                      placeholder="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="postal Code"
                      value={formData.postal_code}
                      onChange={handleChange}
                    />
                  </label>
                  <button type="submit" className="buttonProfile">
                    Confirm Changes
                  </button>
                </div>
              </form>
              <button className="buttonProfile">View your Auctions</button>
              <button className="buttonProfile">Change Password</button>
            </div>
          </div>
        </div>
      </HeroImage>
    </ThumbnailProvider>
  );
};

export default ProfilePage;
