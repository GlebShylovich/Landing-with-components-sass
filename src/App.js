import './style/App.css';

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="header__container">
            <div className="header__logo">
              <img src="./img/Your logo.png" alt="logo"></img>
            </div>
            <div className="header__nav">
              <div className="header__item header__item--active">Home</div>
              <div className="header__item">About Us</div>
              <div className="header__item">Find space</div>
              <div className="header__item">Share space</div>
              <div className="header__item">Promote space</div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

//export default App
