import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const ImageDetailsStyleScreen = StyleSheet.create({
  RelatedImagesScreenMainView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  googlePlaceName : {
    fontSize: 30
  },
  WikiDescriptionView : {

    padding: 10,
  },
  wikiText : {
    fontFamily : 'sans-serif'
  },
  WikiDescriptionText : {
    fontSize: 30,
    fontFamily: 'Hoefler Text',
    fontWeight : 'bold'
  },
  WikiTitle : {
    fontSize: 30, 
    paddingBottom: 7, 
    textAlign: 'center',
    
  },
  googlePlaceInfoView : {
    padding: 10
  },
  starsStyling : {
    alignItems:'flex-start',
    paddingLeft : 0
  },
  googlePlaceFlatList : {
    flex : 1,
    paddingBottom: 5,
    paddingTop : 5
  },
  AuthorText : {
    paddingLeft: 5
  },
  googleReviewTitle : {
  }
});

export default ImageDetailsStyleScreen;