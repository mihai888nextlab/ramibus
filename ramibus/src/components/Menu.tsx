import imgToAdd from "../assets/cross.png";

interface Props {
  onMenuClose: () => void;
  title: string;
  desc: string;
  trafic: number;
  driver: number;
}

function Menu({ onMenuClose, title, desc, trafic, driver }: Props) {
  //let trafic = Math.floor(Math.random() * 11);
  //let driver = Math.floor(Math.random() * 11);
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
          <div>
            <h3>Bus hazards</h3>
            <ul>
              <label htmlFor="trafic">Traffic level: </label>{" "}
              <input
                id="trafic"
                type="number"
                placeholder={trafic + "/10"}
                max={10}
                min={0}
              />
              <li>Bad driver: {driver}/10</li>
              <li>Not in program: {program}/10</li>
              <li>In repairment: {repair ? "Yes" : "No"}</li>
            </ul>
          </div>

          <h3 className="over">
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
