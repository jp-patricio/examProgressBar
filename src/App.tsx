import React from 'react';
import './App.css';
import ProgressBar from "./Components/ProgressBar/ProgressBar";

function App() {
    return (
        <div className="App">
            <h3>Progress Bar</h3>
            <ProgressBar barImg={"/imgs/back.jpeg"} topImg="/imgs/cover.jpeg" MaxValue={100} minValue={0}
                         processingTime={2} repeatable={false} repeatTimes={2} stopValue={50}/>
        </div>
    );
}

export default App;
