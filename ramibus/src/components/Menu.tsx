import imgToAdd from "../assets/cross.png";
import traficImg from "../assets/icoons/trafic.png";
import driverImg from "../assets/icoons/driver.png";
import timeImg from "../assets/icoons/time.png";
import repairmentImg from "../assets/icoons/repairment.png";
import axios from "axios";
import { useState } from "react";

interface Props {
  onMenuClose: () => void;
  title: string;
  desc: string;
}

function Menu({ onMenuClose, title, desc }: Props) {
  const [traficShow, traficFct] = useState(0);
  const [driverShow, driverFct] = useState(0);
  const [programShow, programFct] = useState(0);
  const [repairShow, repairFct] = useState(0);
  const [overShow, overFct] = useState(0);

  axios.get("/ramibus/vehicle.php?bus=" + title).then((res) => {
    traficFct(res.data.trafic);
    driverFct(res.data.driver);
    programFct(res.data.program);
    repairFct(res.data.repairment);

    overFct(
      ((10 - traficShow) * 10 +
        (10 - driverShow) * 10 +
        (10 - programShow) * 10 +
        (1 - repairShow) * 100) /
        4
    );
  });

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
              <img src={traficImg} alt="" />
              <label htmlFor="trafic">Traffic level: </label>{" "}
              <input
                id="trafic"
                type="number"
                placeholder={traficShow + "/10"}
                max={10}
                min={0}
              />{" "}
              <br />
              <img src={driverImg} alt="" />
              <label htmlFor="driver">Bad Driver: </label>{" "}
              <input
                id="driver"
                type="number"
                placeholder={driverShow + "/10"}
                max={10}
                min={0}
              />
              <br />
              <img src={timeImg} alt="" />
              <label htmlFor="program">Not in program: </label>{" "}
              <input
                id="program"
                type="number"
                placeholder={programShow + "/10"}
                max={10}
                min={0}
              />
              <br />
              <img src={repairmentImg} alt="" />
              <label htmlFor="repairment">In repairment: </label>{" "}
              <input
                id="repairment"
                type="number"
                placeholder={repairShow ? "Yes" : "No"}
                max={1}
                min={0}
              />
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  var traficInt = parseInt(
                    (document.getElementById("trafic") as HTMLInputElement)
                      .value
                  );
                  var driverInt = parseInt(
                    (document.getElementById("driver") as HTMLInputElement)
                      .value
                  );
                  var programInt = parseInt(
                    (document.getElementById("program") as HTMLInputElement)
                      .value
                  );
                  var repairmentInt = parseInt(
                    (document.getElementById("repairment") as HTMLInputElement)
                      .value
                  );

                  overFct(
                    ((10 - traficInt) * 10 +
                      (10 - driverInt) * 10 +
                      (10 - programInt) * 10 +
                      (1 - repairmentInt) * 100) /
                      4
                  );
                  axios.put("/ramibus/vehicle.php", {
                    trafic: traficInt,
                    program: programInt,
                    driver: driverInt,
                    repairment: repairmentInt,
                    bus: title,
                  });
                }}
              >
                Modify data
              </button>
            </ul>
          </div>

          <h3 className="over">
            Overall score: {overShow}
            /100
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Menu;
