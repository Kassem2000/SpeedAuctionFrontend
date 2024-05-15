import { useEffect, createContext, useState } from "react";
import axios from "axios";

// create context
const createAuctionContext = createContext();

// create provider
const createAuctionProvider = ({ children }) => {
  const [auctionCreated, setAuctionCreated] = useState([]);

  useEffect(() => {
    const createAuction = async () => {
      try {
        const resAuction = await axios.post(
          `${import.meta.env.VITE_API_URL}/auctions`
        );
        const resAuctionTypeCar = await axios.post(
          `${import.meta.env.VITE_API_URL}/auctionTypeCar`
        );
        setAuctionCreated(response.data);
      } catch (error) {
        console.error("Error creating auction:", error);
      }
    };
    createAuction();
  }, []);

  const addcreateAuction = async (newcreateAuction) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/createAuction`,
        newcreateAuction
      );
    } catch (err) {
      console.log("Error " + err);
    }
  };
  return (
    <createAuctionContext.Provider
      value={{ createAuction, setAuctionCreated, newcreateAuction }}
    >
      {children}
    </createAuctionContext.Provider>
  );
};

export { createAuctionContext, createAuctionProvider };
