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
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/auctions/filterByIsActive/true`
        );
        setThumbnail(res.data);
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
