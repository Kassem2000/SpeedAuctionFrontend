import { useEffect, createContext, useState } from "react";
import axios from "axios";

// create context
const AuctionContext = createContext();

// create provider
const AuctionProvider = ({ children }) => {
  const [displayedAuction, setDisplayedAuction] = useState([]);
  const [auctionTypeCar, setAuction] = useState([]);

  let AuctionId = "65f37069fdebd262e6b69505"
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const resAuctions = await axios.get(
          `${import.meta.env.VITE_API_URL}/auctions/${AuctionId}`
        );

        const AuctionCar = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctionTypeCar/filterByAuction/${AuctionId}`
        );

        setAuction(AuctionCar.data[0]);
        setDisplayedAuction(resAuctions.data)
        console.log("auction data: " + JSON.stringify(resAuctions.data));
      } catch (err) {
        console.log("error: " + err);
      }
    };
    fetchAuctions();
  }, []);

  return (
    <AuctionContext.Provider value={{ auctionTypeCar, setAuction, displayedAuction, setDisplayedAuction }}>
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };
