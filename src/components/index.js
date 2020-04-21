
import React, { Component} from "react";
import About from './about'
import Mygallery from './gallery'
import BeforeAfter from './beforeafter'

class Home extends Component {

render() {

 
    return (
        <div>
          
           <h2>This is my homepage</h2>
          
           <About/>
           <Mygallery/>
           <BeforeAfter/>
            
        </div>
    )
}

}

export default Home
