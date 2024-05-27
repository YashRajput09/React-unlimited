import React from "react";
import Card from "./components/Card"
import State from "./components/State";
function App(){
  return (
    // <> this sign called fragments, without creating a new div we can return multiple components
    <> 
        {/* <Card /> */}
        <State />
    </>
  )
}

export default App;