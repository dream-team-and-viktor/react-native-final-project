import { createStackNavigator, createAppContainer } from "react-navigation";

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
const AppContainer = createAppContainer(RootStack);

export default AppContainer;