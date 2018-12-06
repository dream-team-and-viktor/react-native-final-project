import React from "react";
import { createStackNavigator } from "react-navigation";
import { Constants } from 'expo';
import Dimensions from 'Dimensions';

import HomeScreen from "./components/HomeScreen/HomeScreen";
import DisplayScreen from "./components/DisplayScreen/DisplayScreen";
import RelatedImagesScreen from "./components/RelatedImagesScreen/RelatedImagesScreen";
import ImageDetails from "./components/ImageDetails/ImageDetails"
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
      screen: DisplayScreen,
      navigationOptions: () => ({
        title: 'Display',
        headerStyle: {
          backgroundColor: '#f4511e',
          marginTop: -Constants.statusBarHeight,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })
    },
    RelatedImages: {
      screen: RelatedImagesScreen,
      navigationOptions: () => ({
        title: 'Display',
        headerStyle: {
          backgroundColor: '#f4511e',
          marginTop: -Constants.statusBarHeight,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })
    },
    ImageDetails : {
      screen: ImageDetails,
      navigationOptions: () => ({
        title: 'Details',
        headerStyle: {
          backgroundColor: '#f4511e',
          marginTop: -Constants.statusBarHeight,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })
    },
    MapScreen: {
      screen: MapScreen,
      navigationOptions: () => ({
        title: 'Map',
        headerStyle: {
          backgroundColor: '#f4511e',
          marginTop: -Constants.statusBarHeight,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })
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
