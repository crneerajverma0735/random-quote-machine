import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { fetchQuotes } from '../action/action'

function Box({ color, state, getQuotes, setCol }) {

    let [quote, setQuote] = useState({});
    let [random, setRandom] = useState(0);

    useEffect(() => {
        getQuotes();

    }, [])

    const getRandom = () => {
        setRandom(Math.floor(Math.random() * state.quotes.length));
    }

    useEffect(() => {
        getRandom();
        setQuote({ ...state.quotes[random] });
    }, [state.loading])


    const changeQuote = () => {
        setCol(state.color[Math.floor(Math.random() * state.color.length)]);
        getRandom();
        setQuote({ ...state.quotes[random] });
    }

    return (


        state.loading ?
            (<div className="d-flex text-secondary text-center flex-column" style={{ "fontSize": "2rem" }}>Loading...</div>)
            :

            state.error ?
                (

                    <div
                        className="d-flex text-secondary text-center flex-column"
                        style={{ "font-size": "2rem" }}>
                        Sorry! Try again something error
                        {console.log(state.error)}
                    </div>)
                :
                (

                    <div id="quote-box" className="d-flex text-white flex-column" >

                        <div id="text" className="">
                            <blockquote className="blockquote">
                                <p className="quote" style={{ "color": color }}>
                                    <i className="fa fa-quote-left" aria-hidden="true"></i> {quote.text}
                                </p>
                                <footer id="author" style={{ "color": color }} className="blockquote-footer text- text-right">{quote.author}</footer>
                            </blockquote>
                        </div>


                        <div className="d-flex justify-content-between mt-2">

                            <div>
                                <a href={`https://twitter.com/intent/tweet?text=${quote.text}`} id="tweet-quote" target="blank">
                                    <i className="fa fa-twitter-square" style={{ "color": color }} id="tweet"></i>
                                </a>
                            </div>
                            <div>
                                <button id="new-quote" onClick={changeQuote} style={{ "background": color, "color": "white" }}>New quote</button>
                            </div>
                        </div>
                    </div >
                )





    )
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuotes: () => dispatch(fetchQuotes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);
