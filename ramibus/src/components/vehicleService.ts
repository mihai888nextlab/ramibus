import axios from "axios";
//import { cors } from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function(app) {
    app.use(
      '/ramibus/vehicle.php',
      createProxyMiddleware({
        target: 'http://localhost:80/ramibus/vehicle.php',
        changeOrigin: true,
      })
    );
  };

export const getVehicles = async () => {

    //App.options("*", cors({ origin: 'http://localhost:8000', optionsSuccessStatus: 200 }));
    
    //App.use(cors({ origin: "http://localhost:8000", optionsSuccessStatus: 200 }));    

    return await axios.get('http://localhost:80/ramibus/vehicle.php');
};