import imgToAdd from "../assets/cross.png";

interface Props {
  onMenuClose: () => void;
  title: string;
}

function Menu({ onMenuClose, title }: Props) {
  return (
    <div className="menu">
      <h2>{title}</h2>
      <img onClick={onMenuClose} className="cross" src={imgToAdd} alt="" />
    </div>
  );
}

export default Menu;
