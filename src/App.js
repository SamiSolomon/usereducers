import React from "react";
import CounterPage from "./components/counterPage";
function App(){
    return(
        <div>
            <CounterPage  initial={10} /> 
        </div>
                     
    );
};


export default App;