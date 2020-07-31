import { QUOTE_RECEIVED, QUOTE_FAILED, QUOTE_REQUESTED } from "../action/actionType";

const initialQuote = {
    loading: true,
    quotes: [],
    color: ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#009B77", "#45B8AC", "#DFCFBE"],
    error: ""
}


export const reducer = (state = initialQuote, action) => {
    switch (action.type) {
        case QUOTE_REQUESTED:
            return { ...state, loading: true };
        case QUOTE_RECEIVED:
            return { ...state, loading: false, quotes: action.payload };
        case QUOTE_FAILED:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}