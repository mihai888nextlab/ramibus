import Menu from "./Menu";
import { useState } from "react";
import axios from "axios";

interface Props {
  title: string;
  auto: string[];
  desc: string[];
}

function Colon({ title, auto, desc }: Props) {
  const [menuShow, menuShowFct] = useState("");
  const [descShow, descShowfct] = useState("");
  const [traficShow, traficShowfct] = useState(0);
  const [driverShow, driverShowfct] = useState(0);

  let hazards: number[][] = [];

  for (var i = 0; i < auto.length; i++) {
    axios.get("/ramibus/vehicle.php?bus=" + title).then((response) => {
      hazards.push([
        parseInt(response.data.trafic),
        parseInt(response.data.driver),
      ]);

      console.log(response.data);
    });
  }

  new Promise((res) => setTimeout(res, 1000));

  return (
    <>
      <div className="colon">
        <h2>{title}</h2>
        <ul>
          {auto.map((item, index) => (
            <li
              onClick={() => {
                menuShowFct(item);
                descShowfct(desc[index]);
                traficShowfct(hazards[index][0]);
                driverShowfct(hazards[index][1]);
              }}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {menuShow && (
        <Menu
          desc={descShow}
          title={menuShow}
          trafic={traficShow}
          driver={driverShow}
          onMenuClose={() => menuShowFct("")}
        ></Menu>
      )}
    </>
  );
}

export default Colon;
