import './App.css';
import telegram from './assets/TG.svg';
import twitter from './assets/X.svg';
import meme1 from './assets/1.png';
import meme2 from './assets/2.png';
import meme3 from './assets/3.png';
import meme4 from './assets/4.png';
import logo from './assets/Logo.png';

function App() {
  const token = "$BOY";


  return (
    <div className="app">
      <div className="main">
        <div className="layout">
          <img className="logo" alt="logo" src={logo}/>
          <div className="textBlock">
            <h1 className="heading">
              PAJAMA BOY
            </h1>
            <h3 className="subheading white paddingTop">
              FOREVER IN OUR HEARTS
            </h3>
            <button className="button">
              <p className="buttonText">
                BUY {token}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="runningTextBlock">
        <div className="runningTextBlock">
          <h4 className="runningText">
            <span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span><span className="run red">{token}</span><span className="runborder white">{token}</span>
          </h4>
        </div>
      </div>
      <div className="about">
        <div className="layout">
          <div className="aboutTextBlock">
            <h3 className="red heading2">
              LEGENDS NEVER DIE
            </h3>
            <p className="subheading2 red">
              MEMES WITH PAJAMA BOY
            </p>
          </div>
          <div className="imgLayout">
            <div className="rowBlock">
              <img className="memeStyle" alt="meme1" src={meme1}/>
              <img className="memeStyle" alt="meme2" src={meme2}/>
            </div>
            <div className="rowBlock">
              <img className="memeStyle" alt="meme3" src={meme3}/>
              <img className="memeStyle" alt="meme4" src={meme4}/>
            </div>
          </div>
          <div className="socialBlock">
            <a href="https://t.me/pajamaboyonsol"><img className="social" alt="telegram" src={telegram}/></a>
            <a href="https://twitter.com/PajamaBoyonsol"><img className="social" alt="x" src={twitter}/></a>
            <p className="lastText red">PAJAMA BOY 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
