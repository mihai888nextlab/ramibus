import Menu from "./Menu";
import { useState } from "react";

interface Props {
  title: string;
  auto: string[];
  desc: string[];
}

function Colon({ title, auto, desc }: Props) {
  const [menuShow, menuShowFct] = useState("");
  const [descShow, descShowfct] = useState("");

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
          onMenuClose={() => menuShowFct("")}
        ></Menu>
      )}
    </>
  );
}

export default Colon;
