import logo from "../assets/logo3.png";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="logo-text">RamiBus</h1>
        <img src={logo} alt="" />
      </div>
    </>
  );
}

export default Header;
