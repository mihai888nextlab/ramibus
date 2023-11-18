import Menu from "./Menu";
import { useState } from "react";

interface Props {
  title: string;
  auto: string[];
}

function Colon({ title, auto }: Props) {
  const [menuShow, menuShowFct] = useState("");

  return (
    <>
      <div className="colon">
        <h2>{title}</h2>
        <ul>
          {auto.map((item) => (
            <li
              onClick={() => {
                menuShowFct(item);
              }}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {menuShow && (
        <Menu title={menuShow} onMenuClose={() => menuShowFct("")}></Menu>
      )}
    </>
  );
}

export default Colon;
