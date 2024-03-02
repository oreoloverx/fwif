import './App.css';
import TG from "./assets/TG.svg"
import TW from "./assets/TW.svg"
import bill from "./assets/bill.png"
import taco from "./assets/taco.png"


function App() {
  return (
    <div className="App">
      <div className="section1">
        <h1 className="heading1">
          FRANKLIN WIF HAT
        </h1>
        <img src={bill} className="bill" alt="wif"/>
        <h2 className="heading2">
          WITH $FWIF YOU GET FREE TACOS
        </h2>
        <img alt="taco" className="taco" src={taco}/>
        <div className="socialBlock">
          <a href="https://t.me/fwifsol" target="_blank" rel="nopener noreferrer"><img className="social" src={TG} alt="TG" /></a>
          <a href="https://twitter.com/fwifsol" target="_blank" rel="nopener noreferrer"><img className="social" src={TW} alt="TW" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
