import { QUOTE_RECEIVED, QUOTE_FAILED, QUOTE_REQUESTED } from "./actionType";
import axios from 'axios';

export const quoteRequest = () => {
    return {
        type: QUOTE_REQUESTED
    }
}

const quoteReceive = (quotes) => {
    return {
        type: QUOTE_RECEIVED,
        payload: quotes
    }
}


const quoteFailed = (error) => {
    return {
        type: QUOTE_FAILED,
        payload: error
    }
}


export const fetchQuotes = () => {
    return (dispatch) => {
        dispatch(quoteRequest);

        axios.get("https://type.fit/api/quotes")
            .then((response) => {
                const quotes = response.data;
                dispatch(quoteReceive(quotes));
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log(errorMsg)
                dispatch(quoteFailed(errorMsg));
            })
    }
}
