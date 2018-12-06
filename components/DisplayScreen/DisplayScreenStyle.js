import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import { Constants } from 'expo';
import { Header } from 'react-navigation';

const DisplayScreenStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    height: Dimensions.get('window').height - Constants.statusBarHeight - Header.HEIGHT,
    width: Dimensions.get('window').width,
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: Dimensions.get('window').width*0.02,
  },
  containerScroll: {
    position: 'absolute',
    maxHeight: Dimensions.get('window').height - Constants.statusBarHeight - Header.HEIGHT,
    width: Dimensions.get('window').width,
    top: 0,
    left: 0,
    backgroundColor: "#fff",
  },
  relatedImagesCardWrapper: {
    width: '100%',
  },
  relatedImagesCard: {
    padding: Dimensions.get('window').width*0.01
  },
  MapButtonWrapper: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  MapButton: {
    backgroundColor: 'red'
  }
});

export default DisplayScreenStyle;