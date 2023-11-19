import Menu from "./Menu";
import { useState } from "react";

interface Props {
  title: string;
  auto: string[];
  desc: string[];
  imgs: string[];
}

function Colon({ title, auto, desc, imgs }: Props) {
  const [menuShow, menuShowFct] = useState("");
  const [descShow, descShowfct] = useState("");
  const [imgShow, imgShowfct] = useState("");
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
                imgShowfct(imgs[index]);
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
          img={imgShow}
          onMenuClose={() => menuShowFct("")}
        ></Menu>
      )}
    </>
  );
}

export default Colon;
