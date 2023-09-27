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
        <main className="page">
          <div className="page__container">
            <div className="promo">
              <div className="promo__container">
                <h1 className="promo__title">Find your custom matched commercial real estate space.</h1>
                <p className="promo__subtitle">In oculis quidem exercitus quid ex ea consequatur? autem vel eum fugiat, quo
                  pertineant ero tibique</p>
                <div className="promo__action">
                  <input type="text" className="promo__input" placeholder="Your email here"></input>
                  <div className="promo__btn">Subscribe</div>
                  <img src="./img/Icon (2).png" alt="mail" />
                </div>
              </div>
              <img src="./img/Your image here.png" alt="promo"></img>
            </div>
            <div className="sponsors">
              <img src="./img/first.png" alt="" />
              <img src="./img/second.png" alt="" />
              <img src="./img/third.png" alt="" />
              <img src="./img/fourth.png" alt="" />
            </div>
            <div className="features">
              <div className="features__text-box">
                <h1 className="features__title">We provide best space for you!</h1>
                <p className="features__subtitle">Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex ea quid est et via procedat oratio quaerimus.</p>
                <p className="features__subtitle">quid aut ad id omnia referri oporteat, ipsum autem nusquam hoc epicurus in ea commodi consequatur?</p>
                <div className="features__btn">Learn more</div>
              </div>
            </div>
          </div>
          <div className="features__image-box">
            <img src="./img/Your images here (1).png" alt="" />
            <img src="./img/Your images here.png" alt="" />
          </div>
        </main>
      </div>
    </div>
  );
}

//export default App
