import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ImagePicker, Permissions } from "expo";

import { GoogleView } from '../../models/GoogleView'; 

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
      <View style={styles.container}>
        <Text>This is home page</Text>
        <Button
          title="Take a Picture"
          onPress={this.takeImage}
        />
        <Button
          title="Pick an image from camera roll"
          onPress={this.pickImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
