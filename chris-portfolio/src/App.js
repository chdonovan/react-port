import React,{Component} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Porfolio from "./components/Portfolio";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Header/>
        <About/>
        <Porfolio/>
      </div>
    )
  }
}

export default App;
