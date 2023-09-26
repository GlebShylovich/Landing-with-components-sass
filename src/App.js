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
        <main class="page">
          <div class="page__container">
            <div class="promo">
              <div class="promo__container">
                <h1 class="promo__title">Find your custom matched commercial real estate space.</h1>
                <p class="promo__subtitle">In oculis quidem exercitus quid ex ea consequatur? autem vel eum fugiat, quo
                  pertineant ero tibique</p>
                <div class="promo__action">
                  <input type="text" class="promo__input" placeholder="Your email here"></input>
                  <div class="promo__btn">Subscribe</div>
                </div>
              </div>
              <img src="./img/Your image here.png" alt="promo"></img>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

//export default App
