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
            <div className="video">
              <div className="video__text-box">
                <h1 className="video__title">Start using our product</h1>
                <p className="video__subtitle">Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex</p>
                <div className="video__buttons">
                  <div className="video__contact-btn">Contact Us</div>
                  <div className="video__video-btn"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2111 5.10557C10.9482 5.4741 10.9482 6.5259 10.2111 6.89443L1.44721 11.2764C0.782312 11.6088 0 11.1253 0 10.382V1.61803C0 0.874652 0.782312 0.391156 1.44721 0.723607L10.2111 5.10557Z" fill="#F78434" />
                  </svg>

                    <p>Watch now</p>
                  </div>
                </div>
              </div>
              <div className="video__rectangle"></div>
              <img className="video__table" src="./img/Dashboard (on my profile soon).png" alt="" />
              <img className='video__oval' src="./img/Oval.png" alt="" />
              <img className='video__circle' src="./img/Oval (1).png" alt="" />
              <img className='video__fill' src="./img/Fill 1.png" alt="" />
            </div>
            <div className="exp">
              <div className="exp__text-box">
                <h1 className="exp__title">Get experience from the expert</h1>
                <p className="exp__subtitle">
                  Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex
                </p>
                <div className="exp__btn">Contact Us</div>
              </div>
              <img src="./img/Your image here (1).png" alt="" />
            </div>
          </div>
          <div className="features__image-box">
            <img src="./img/Your images here (1).png" alt="" />
            <img src="./img/Your images here.png" alt="" />
          </div>
          <div className="page__rectangle"></div>
          <img src="./img/Mask (2).png" alt="" className="page__mask" />
          <img className='page__oval' src="./img/Oval (2).png" alt="" />
        </main>
      </div>
    </div>
  );
}

//export default App
