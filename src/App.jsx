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
import MusicWeb from "./components/parentComponent/MusicWeb";
import FHUseRef from "./components/FormHandling/FHUseRef";
import FHControledComponents from "./components/FormHandling/FHControledComponents";
import FHReactHook from "./components/FormHandling/FHReactHook";
import FHParentComponent from "./components/FormHandling/formData/FHParentComponent";

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
        {/* < UserData /> */}
        {/* < MusicWeb /> */}
        {/* < FHUseRef /> */}
        {/* < FHControledComponents /> */}
        {/* < FHReactHook /> */}
        < FHParentComponent />


    </>
  )
}

export default App;