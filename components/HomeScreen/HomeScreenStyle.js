import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const HomeScreenStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    top: 0,
    left: 0
  },
  startButtonWrapper: {
    width: Dimensions.get('window').width*0.25,
    height: Dimensions.get('window').width*0.25,
    borderRadius: Dimensions.get('window').width*0.125,
    backgroundColor: 'rgba(0,151,167 ,1)',
    padding: Dimensions.get('window').width*0.05,
    marginTop: Dimensions.get('window').width*0.025,
    marginBottom: Dimensions.get('window').width*0.025,
    flexDirection: 'column'
  },
  startButton: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
});

export default HomeScreenStyle;