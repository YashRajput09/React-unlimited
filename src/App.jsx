import React, { useState } from "react";
import Card from "./components/Card";
import State from "./components/State";
import Addproperty from "./components/Addproperty";
import ArrayOne from "./components/ArrayOne";
import RemoveArrItem from  "./components/RemoveArrItem";
import AddArrItem from "./components/AddArrItem";
import ActivityOne from "./components/ActivityOne";
import Props from "./components/props/Props";
import PropsCard from "./components/props/PropsCard";
import UserData from "./components/parentComponent/UserData";

function App(){
 

 

  return (
    // <> this sign called fragments, without creating a new div we can return multiple components
    <> 
        {/* <Card /> */}
        {/* <State /> */}
        {/* < Addproperty /> */}
        {/* < ArrayOne /> */}
        {/* < RemoveArrItem /> */}
        {/* < AddArrItem /> */}
        {/* < ActivityOne /> */}
        {/* < Props text="Know More" />
        < Props text="Download"/> */}
        < UserData />
    </>
  )
}

export default App;