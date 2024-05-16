import { useEffect, createContext, useState } from "react";
import axios from "axios";

// create context
const ThumbnailContext = createContext();

// create provider
const ThumbnailProvider = ({ children }) => {
  const [thumbnail, setThumbnail] = useState([]);

  useEffect(() => {
    const fetchThumbnails = async () => {
      try {
        const resIsActive = await axios.get(
          `${import.meta.env.VITE_API_URL}/auctions/filterByIsActive/true`
        );
        const resStartingPrice = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctions/filterByStartingPriceBetween/100000/100000000`
        );
        const reversedOrder = resStartingPrice.data.reverse();
        const activeAuctions = resIsActive.data;
        const filtersCombined = reversedOrder.filter(
          (startingPriceRangeAuction) => {
            return activeAuctions.some((activeAuction) => {
              return activeAuction.active === startingPriceRangeAuction.active;
            });
          }
        );
        setThumbnail(filtersCombined);
      } catch (err) {
        console.log("error: " + err);
      }
    };
    fetchThumbnails();
  }, []);

  return (
    <ThumbnailContext.Provider value={{ thumbnail, setThumbnail }}>
      {children}
    </ThumbnailContext.Provider>
  );
};

export { ThumbnailContext, ThumbnailProvider };
