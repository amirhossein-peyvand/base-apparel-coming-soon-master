import logo from "../assets/logo.svg";
import Form from "./Form";
import desktopHero from "../assets/hero-desktop.jpg";
import "../sass/Desktop.scss";

const Desktop = () => {
  return (
    <main className="desktop">
      <section className="left">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
        <div className="contentContainer">
          <h1 className="title">
            <span>We're</span> coming soon
          </h1>
          <p className="desc">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <Form />
        </div>
      </section>
      <section className="right">
        <img src={desktopHero} alt="desktopHero" />
      </section>
    </main>
  );
};

export default Desktop;
