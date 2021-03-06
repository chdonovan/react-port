import React,{Component} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Porfolio from "./components/Portfolio";
import ContactUs from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Header/>
        <About/>
        <Porfolio/>
        <ContactUs/>
        <Resume/>
        <Footer/>
      </div>
    )
  }
}

export default App;
