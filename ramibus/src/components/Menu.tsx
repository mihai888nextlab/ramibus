import imgToAdd from "../assets/cross.png";
import { getVehicles } from "./vehicleService";
import axios from "axios";

interface Props {
  onMenuClose: () => void;
  title: string;
}

function Menu({ onMenuClose, title }: Props) {
  //let v = Array(getVehicles());

  Promise.all([axios.get("/ramibus/vehicle.php")]).then(function (values) {
    console.log(values);
  });

  return (
    <div className="menu">
      <h2>{title}</h2>
      <img onClick={onMenuClose} className="cross" src={imgToAdd} alt="" />
    </div>
  );
}

export default Menu;
