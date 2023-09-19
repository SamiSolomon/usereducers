import React from "react";
import CounterPage from "./components/counterPage";
function App(){
    return(
        <div>
            <CounterPage  initialCount={10} /> 
        </div>
                     
    );
};


export default App;