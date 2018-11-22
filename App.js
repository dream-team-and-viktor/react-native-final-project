import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./components/HomeScreen";
import GoogleView from "./components/GoogleView";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    GoogleView: {
      screen: GoogleView
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
