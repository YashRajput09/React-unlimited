import React from "react";
import Card from "./components/Card"
import State from "./components/State";
import Addproperty from "./components/Addproperty";
function App(){
  return (
    // <> this sign called fragments, without creating a new div we can return multiple components
    <> 
        {/* <Card /> */}
        {/* <State /> */}
        < Addproperty />
    </>
  )
}

export default App;