import { useEffect, createContext, useReducer } from "react";
import axios from "axios";

const initialState = { user: null };

const rootReducer = (state, action) => {
  switch (action.type) {
    case "CREATAUCTION":
      return {
        ...state,
        user: action.payload,
      };
  }
};

// create context
const CreateAuctionContext = createContext();

// create provider
const CreateAuctionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  useEffect(() => {
    dispatch({
      type: "CREATAUCTION",
      payload: JSON.stringify(window.localStorage.getItem("auction")),
    });
  }, []);

  return (
    <CreateAuctionContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateAuctionContext.Provider>
  );
};

export { CreateAuctionContext, CreateAuctionProvider };
