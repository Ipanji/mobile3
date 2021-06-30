import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Biodata from "./Biodata.js";

export default createAppContainer(
  createStackNavigator({ Home, Biodata }, { initialRouteName: "Home" })
);
