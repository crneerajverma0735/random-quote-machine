import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';
import { connect } from "react-redux";

function App({ color, quotes }) {

  let [random, setRandom] = useState(0);
  let [bgColor, setBgColor] = useState("red");
  useEffect(() => {
    random = Math.floor(Math.random() * color.length);
    setBgColor(color[random]);
  }, [color])

  return (
    <div className="containerFluid main d-flex flex-column align-content-center justify-content-center" style={{ "background": bgColor }}>
      <div className="row">
        <div className="col-6 p-5 rounded-lg mx-auto box" style={{ "background": "white" }}>
          <Box color={bgColor} setCol={setBgColor} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    color: state.color,
    quotes: state.quotes
  }
}


export default connect(mapStateToProps, null)(App);
