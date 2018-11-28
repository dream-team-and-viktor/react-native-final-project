import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import DisplayScreen from "./components/DisplayScreen/DisplayScreen";
import RelatedImagesScreen from "./components/RelatedImagesScreen/RelatedImagesScreen";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Display: {
      screen: DisplayScreen
    },
    RelatedImages: {
      screen: RelatedImagesScreen
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
