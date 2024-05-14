import { useEffect, createContext, useState } from "react";
import axios from "axios";

// create context
const AuctionContext = createContext();

// create provider
const AuctionProvider = ({ children }) => {
  const [auctionTypeCar, setAuction] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const resAuctions = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctionTypeCar/65f37679f81ccd579ef2767e`
        );

        setAuction(resAuctions.data);
        console.log("auction data: " + JSON.stringify(resAuctions.data));
      } catch (err) {
        console.log("error: " + err);
      }
    };
    fetchAuctions();
  }, []);

  return (
    <AuctionContext.Provider value={{ auctionTypeCar, setAuction }}>
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };
