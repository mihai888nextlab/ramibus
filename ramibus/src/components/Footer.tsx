import logo from "../assets/logo2.png";

function Footer() {
  return (
    <div className="footer">
      <h1 className="logo-text">RamiBus</h1>
      <div className="flex-footer">
        <div className="developers">
          <h3 className="side-title">Developers</h3>
          <h3>Gorunescu Mihai</h3>
          <h3>Gaspar Radu</h3>
        </div>
        <div className="about">
          <h3 className="side-title">About the project</h3>
          <h3>
            RamiBus is a platform witch helps you choose the right bus to travel
            with, based on trafic and other hazards.
          </h3>
        </div>
        <div className="contact">
          <h3 className="side-title">Contact</h3>
          <h3>gorunescu.mihai@moisiltm.ro</h3>
          <h3>raduproman@gmail.com</h3>
        </div>
      </div>

      <div className="img-flex">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
