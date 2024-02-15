import "./../../src/contact.scss";
export const Contact = () => {
  return (
    <>
      {" "}
      <div className="contact-container">
        <ul>
          <li>
            <img src="src/assets/logoBlack.png" alt="bild på restaurangensvarumärke" className="brand-icon" />
          </li>
        </ul>
        <div className="contact-info">
          <ul>
            <li>
              <p className="info-title">
                <b>"Smakriket"</b>
              </p>
              <p>Älgstigen 17B</p>
              <p>123 45, Skogsby</p>
              <p>Tel: +46 123 465 789</p>
              <p>Email:info@smakriket.se</p>
            </li>
          </ul>
          <div className="icons-desktopmode">
            <ul>
              <li>
                <img
                  src="src/images/icons/svg/icons8-instagram.svg"
                  alt="bild på instagrams logga"
                  className="insta-icon"
                />
                <img
                  src="src/images/icons/svg/icons8-facebook.svg"
                  alt="bild på facebooks logga"
                  className="facebook-icon"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="opening-hours">
          <ul>
            <li>
              <p className="opening-title">
                <b>Öppetider</b>
              </p>
              <p>Tis: 11:00-22:00</p>
              <p>Ons: 11:00-22:00</p>
              <p>Tors: 11:00-22:00</p>
              <p>Fre: 17:00-00:00</p>
              <p>Lör: 17:00-00:00</p>
              <p>Sön: 11:00-19:00</p>
            </li>
          </ul>
        </div>
        <div className="icons-mobilemode">
          <ul>
            <li>
              <img
                src="src/images/icons/svg/icons8-instagram.svg"
                alt="bild på instagrams logga"
                className="insta-icon"
              />
              <img
                src="src/images/icons/svg/icons8-facebook.svg"
                alt="bild på facebooks logga"
                className="facebook-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
