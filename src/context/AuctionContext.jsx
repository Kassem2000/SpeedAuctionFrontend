import { useEffect, createContext, useState } from "react";

import axios from "axios";

// create context
const AuctionContext = createContext();

// create provider
const AuctionProvider = ({ children }) => {
  const [auction, setAuction] = useState([]);

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const resAuction = await axios.get(
          `${import.meta.env.VITE_API_URL}/auctions/all`
        );

        setAuction(filtersCombined);
      } catch (err) {
        console.log("error: " + err);
      }
    };
    fetchAuction();
  }, []);

  return (
    <AuctionContext.Provider value={{ auction, setAuction }}>
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };
