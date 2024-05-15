import { useEffect,useReducer, createContext, Children } from "react";

//global initial state
const initialState ={
    user: null,
};

//define reducer
const rootReducer = (state, action) =>{
    switch(action.type){

        case "SIGNUP":
            return{ ...state, user: action.payload };
        default:
            return state;
    }
};

//create context
const AuthContext = createContext();

//create provider
const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

   
  useEffect(() => {
    dispatch({
      type: "SIGNUP",
      payload: JSON.stringify(window.localStorage.getItem("user")),
    });
  }, []);

    return(
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext, AuthProvider};