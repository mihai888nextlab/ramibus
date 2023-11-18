import imgToAdd from "../assets/cross.png";

interface Props {
  onMenuClose: () => void;
  title: string;
}

function Menu({ onMenuClose, title }: Props) {
  let trafic = Math.floor(Math.random() * 11);
  return (
    <div className="menu">
      <div>
        <h2>{title}</h2>
        <img onClick={onMenuClose} className="cross" src={imgToAdd} alt="" />
      </div>
      <h3>Bus hazards</h3>
      <ul>
        <li>Traffic level: {trafic}</li>
      </ul>
    </div>
  );
}

export default Menu;
