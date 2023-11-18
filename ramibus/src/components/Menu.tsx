import imgToAdd from "../assets/cross.png";

interface Props {
  onMenuClose: () => void;
  title: string;
  desc: string;
}

function Menu({ onMenuClose, title, desc }: Props) {
  let trafic = Math.floor(Math.random() * 11);
  let driver = Math.floor(Math.random() * 11);
  let program = Math.floor(Math.random() * 11);
  let repair = Math.floor(Math.random() * 2);
  return (
    <div className="menu">
      <div className="titleMenu">
        <h2>{title}</h2>
        <img onClick={onMenuClose} className="cross" src={imgToAdd} alt="" />
      </div>

      <div className="bodyMenu">
        <div className="leftMenu">
          <p>{desc}</p>
        </div>

        <div className="rightMenu">
          <h3>Bus hazards</h3>
          <ul>
            <li>Traffic level: {trafic}/10</li>
            <li>Bad driver: {driver}/10</li>
            <li>Not in program: {program}/10</li>
            <li>In repairment: {repair ? "Yes" : "No"}</li>
          </ul>

          <h3>
            Overall score:{" "}
            {((10 - trafic) * 10 +
              (10 - driver) * 10 +
              (10 - program) * 10 +
              (1 - repair) * 100) /
              4}
            /100
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Menu;
