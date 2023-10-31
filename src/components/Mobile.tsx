import "../sass/Mobile.scss";
import heroMobile from "../assets/hero-mobile.jpg";
import logo from "../assets/logo.svg";
import Form from "./Form";

const Mobile = () => {
  return (
    <div className="mobile">
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <main className="mainContent">
        <section className="heroImageContainer">
          <img src={heroMobile} alt="heroMobile" />
        </section>
        <section className="contentContainer">
          <h1 className="title">
            <span>We're</span> coming soon
          </h1>
          <p className="desc">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <Form />
        </section>
      </main>
    </div>
  );
};

export default Mobile;
