import { useEffect, useReducer, createContext } from "react";

// global initial state
const initialState = {
  user: null,
};

// define the reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, user: action.payload };

    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// create context
const AuthContext = createContext();

// create provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  //parse data before seding it  as the paload::.
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if(storedUser){
       dispatch({
      type: "LOGIN",
      payload: JSON.parse(storedUser),
    });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
