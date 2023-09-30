import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
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
        <nav className="header__nav">
          <div className="header__item header__item--active">Home</div>
          <div className="header__item">About Us</div>
          <div className="header__item">Find Space</div>
          <div className="header__item">Share Space</div>
          <div className="header__item">Promote Space</div>
        </nav>
      </div>
    </header>
  );
}
