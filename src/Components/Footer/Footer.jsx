import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 15.0001L25.5987 4.38552C19.7788 -1.42572 10.209 -1.42216 4.3934 4.39347C-1.42523 10.2121 -1.42523 19.788 4.3934 25.6067C10.212 31.4253 19.788 31.4253 25.6066 25.6067L15 15.0001Z"
                fill="#58BEBF"
              />
            </svg>
            <p>CutSpace</p>
          </div>
          <p className="footer__subtitle">
            Quae fuerit causa, nollem me ab illo inventore veritatis et.
          </p>
          <img
            className="footer__socials"
            src="./img/Social media.png"
            alt=""
          />
        </div>
        <div className="footer__nav">
          <div className="footer__nav-column">
            <div className="footer__title">Privacy</div>
            <div className="footer__nav-item">Si sine causa</div>
            <div className="footer__nav-item">Quae fuerit causa</div>
            <div className="footer__nav-item">Certe, inquam</div>
            <div className="footer__nav-item">Torquatos nostros? </div>
          </div>
          <div className="footer__nav-column">
            <div className="footer__title">Legal</div>
            <div className="footer__nav-item">Ut placet, inquam </div>
            <div className="footer__nav-item">Certe, inquam</div>
            <div className="footer__nav-item">Et quidem rerum</div>
            <div className="footer__nav-item">At vero eos et</div>
          </div>
          <div className="footer__nav-column">
            <div className="footer__title">Contact</div>
            <div className="footer__nav-item">Primum igitur</div>
            <div className="footer__nav-item">Certe, inquam</div>
            <div className="footer__nav-item">Quae fuerit causa</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
