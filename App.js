import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
//import org.reactnative.camera.RNCameraPackage;

import HomeScreen from './components/HomeScreen'
<<<<<<< HEAD
// import Camera from './components/Camera'
// import CameraComponent from './components/CameraComponent'
import GoogleView from './components/GoogleView'
=======
import Camera from './components/Camera'
import CameraComponent from './components/CameraComponent'
>>>>>>> aa5b534203e8d1712ff694ab567c6a0eadf0d216
//So, to install it you need to "npm install react-native-camera --save && react-native link".
//But it didn't work for me and gave me an error.

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
<<<<<<< HEAD
  // Camera: {
  //   screen: Camera
  // },
  GoogleView: {
    screen: GoogleView
=======
  Camera: {
    screen: Camera
>>>>>>> aa5b534203e8d1712ff694ab567c6a0eadf0d216
  }
  //,
  // CameraComponent: {
  //   screen: CameraComponent
  // }
},
{
  initialRouteName: 'Home',
}
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
