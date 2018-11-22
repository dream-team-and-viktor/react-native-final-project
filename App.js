import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./components/HomeScreen";
import GoogleView from "./components/GoogleView";
import DisplayScreen from "./components/DisplayScreen";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    GoogleView: {
      screen: GoogleView
    },
    Display: {
      screen: DisplayScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
