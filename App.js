import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import DisplayScreen from "./components/DisplayScreen/DisplayScreen";
import RelatedImagesScreen from "./components/RelatedImagesScreen/RelatedImagesScreen";
import MapScreen from './components/MapScreen/MapScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        header: null,
      })
    },
    Display: {
      screen: DisplayScreen
    },
    RelatedImages: {
      screen: RelatedImagesScreen
    },
    MapScreen: {
      screen: MapScreen
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
