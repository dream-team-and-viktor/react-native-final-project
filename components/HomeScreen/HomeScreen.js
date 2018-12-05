import React from "react";
import { Image, View, Button, TouchableNativeFeedback, Modal } from "react-native";
import { ImagePicker, Permissions } from "expo";

import { GoogleView } from '../../models/GoogleView';
import HomeScreenStyle from './HomeScreenStyle';

import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: {
        imageURI: null,
        imageBase64: null,
      },
      googleViewResult: null,
      loading: false
    };
  }

  componentDidMount() {
    this.askPermissionsAsync()
  }

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.LOCATION);
  };

  fetchGoogleViewData = async () => {
    let googleView = new GoogleView();
    if (this.state.currentImage.imageBase64) {
      // console.log(this.state.currentImage.base64)
      this.setState({
        loading: true
      })
      googleView.fetchGoogleViewData(this.state.currentImage.imageBase64)
      .then((result) => {
        // console.log(result)
        this.setState({
          loading: false
        }, () => {
          this.props.navigation.navigate("RelatedImages", {
            result
          });
        })
      })
    }
  };

  goToMapScreen = async () => {
    const { navigation } = this.props;
    const { location, locationName, regionPhone, regionPicture } = this.state;
    navigation.navigate("MapScreen", {
      location,
      locationName,
      regionPhone,
      regionPicture
    })
  }

  takeImage = async () => {
    let { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: true
    });
    if (!cancelled) {
      let currentImage = {...this.state.currentImage};
      currentImage.imageURI = uri;
      currentImage.imageBase64 = base64
      await this.setState({currentImage}, () => {
        this.fetchGoogleViewData();
      });
    }
  }

  pickImage = async () => {
    let { cancelled, uri, base64 } = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: false
    });
    if (!cancelled) {
      let currentImage = {...this.state.currentImage};
      currentImage.imageURI = uri;
      currentImage.imageBase64 = base64
      await this.setState({currentImage}, () => {
        this.fetchGoogleViewData();
      });
    }
  }

  render() {
    return (
      <View style={HomeScreenStyle.container}>
        <Image
          style={HomeScreenStyle.background}
          source={require('../../assets/background.png')}
          resizeMode='cover'
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.loading}
          onRequestClose={() => {
            this.setState({
              loading: false,
            })
          }}
        >
          <LoadingScreen/>
        </Modal>
        <TouchableNativeFeedback
          style={HomeScreenStyle.startButtonWrapper}
          onPress={this.takeImage}
        >
          <View
            style={HomeScreenStyle.startButtonWrapper}
            elevation={3}
          >
            <Image
              style={HomeScreenStyle.startButton}
              source={require('../../assets/photo-camera.png')}
              resizeMode='cover'
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          style={HomeScreenStyle.startButtonWrapper}
          onPress={this.pickImage}
        >
          <View
            style={HomeScreenStyle.startButtonWrapper}
            elevation={3}
          >
            <Image
              style={HomeScreenStyle.startButton}
              source={require('../../assets/gallery.png')}
              resizeMode='cover'
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
