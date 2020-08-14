import React from 'react';
import {Route} from "react-router-dom"
import Postdata from "./components/Postdata"
import NavbarComponent from './components/NavbarComponent';
import Userdata from './components/Userdata';


function App() {
  return (
    <React.Fragment>
      <NavbarComponent />  
       <Route exact path="/post" component={Postdata}/>
       <Route exact path="/Userdata" component={Userdata} />
    </React.Fragment>
  );
}

export default App;
