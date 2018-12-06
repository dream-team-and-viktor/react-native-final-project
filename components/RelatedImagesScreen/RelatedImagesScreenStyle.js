import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const RelatedImagesScreenStyle = StyleSheet.create({
  RelatedImagesScreenMainView: {
    width: undefined,
    height: undefined,
  },
  RelatedImages: {
    flexDirection: 'column',
  },
  ImageWrapper: {
    padding: 3,
    width: (Dimensions.get('window').width*0.95)/3,
    height: (Dimensions.get('window').width*0.95)/3,
  },
  ImageThumbnail: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "cover",
    borderRadius: 10,
  },
  ImageModalWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    alignContent: 'center',
  },
  ImageModalBackground: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.8,
    flexDirection: 'column',
    alignContent: 'center',
  },
  ImageLargeSctivityIndicator: {
    flex: 1,
  },
  ImageLarge: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "contain",
  }
});

export default RelatedImagesScreenStyle;