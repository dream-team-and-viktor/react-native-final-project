import React from "react";
import { Image, View, Button, TouchableNativeFeedback } from "react-native";
import { ImagePicker, Permissions } from "expo";

import { GoogleView } from '../../models/GoogleView';
import HomeScreenStyle from './HomeScreenStyle';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: {
        imageURI: null,
        imageBase64: null
      },
      googleViewResult: null
    };
  }

  componentDidMount() {
    this.askPermissionsAsync()
  }

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

  fetchGoogleViewData = async () => {
    let googleView = new GoogleView();
    if (this.state.currentImage.imageBase64) {
      console.log(this.state.currentImage.base64)
      googleView.fetchGoogleViewData(this.state.currentImage.imageBase64)
      .then((result) => {
        console.log(result)
        this.props.navigation.navigate("RelatedImages", {
          result
        });
      })
    }
  };

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
        {/* <Button
          title="Get started"
        ></Button>
        <Button
          title="Take a Picture"
          onPress={this.takeImage}
        />
        <Button
          title="Pick an image from camera roll"
          onPress={this.pickImage}
        /> */}
      </View>
    );
  }
}
