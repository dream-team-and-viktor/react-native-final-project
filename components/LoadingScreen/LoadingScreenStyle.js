import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const LoadingScreenStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(191,54,12 ,0.5)',
    alignItems: "center",
    justifyContent: "center"
  },
  loadingPictureWrapper: {
    width: Dimensions.get('window').width*0.75,
    height: Dimensions.get('window').width*0.75,
    flexDirection: 'column'
  },
  loadingPicture: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
});

export default LoadingScreenStyle;