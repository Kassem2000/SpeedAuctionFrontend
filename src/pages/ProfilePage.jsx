import { ThumbnailProvider } from "../context/ThumbnailContext";
import HeroImage from "../components/HeroImage";
import AuctionDisplayer from "../components/AuctionDisplayer";
import "./pageCss/profilePage.css";

const ProfilePage = () => {
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
                <p className="username">username</p>
                <div className="ratingProfile">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
              </div>
            </div>
            <div className="formContainerProfile">
              <form>
                <div>
                  <label>
                    <input type="text" name="username" placeholder="username" />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="firstName"
                    />
                  </label>
                  <label>
                    <input type="text" name="lastName" placeholder="lastName" />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="phoneNumber"
                    />
                  </label>
                  <label>
                    <input type="text" name="email" placeholder="email" />
                  </label>
                </div>
                <div>
                  <label>
                    <input type="text" name="address" placeholder="address" />
                  </label>
                  <label>
                    <input type="text" name="country" placeholder="country" />
                  </label>
                  <label>
                    <input type="text" name="city" placeholder="city" />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="postal Code"
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
