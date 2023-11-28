import Kingsolution from './Components/Kingsolution';
import Kings from './data/kings.json';
import React from "react";
// react component called APP

function App() {
    console.log("King:", Kingsolution);
    // declaring kingsName as an array
    const kingsName = []

    for (const King of Kings) {
        //console.log("King:", kingsName);
        kingsName.push(
            <Kingsolution name={King.nm} city={King.cty} house={King.hse} years={King.yrs} />
        );

    }

    return (
        <div>
            <h1>Kings Names</h1>
            {kingsName}
        </div >
    );
}

export default App;
