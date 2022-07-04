import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    destination: undefined,
    date: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined,
    },
};

const searchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state
    }
}

const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

    return (
        <searchContext.Provider
            value={{
                city: state.destination,
                date: state.date,
                options: state.options,
                dispatch
            }}
        >
            {children}

        </searchContext.Provider>
    );
}

export { searchContext, searchReducer, SearchContextProvider };