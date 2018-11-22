import React, { Component } from "react";
import { View, Image, Button } from "react-native";
import { ImagePicker, Permissions } from "expo";

export default class GoogleView extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      abase64: null
    };
  }

  componentWillMount() {
    this._start();
  }

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

  _start = async () => {
    await this.askPermissionsAsync();
    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: true
    });
    if (!cancelled) {
      this.setState({
        imageUri: uri,
        label: "( loading...)",
        keywords: "( loading...)",
        abase64: base64
      });
    } else {
      this._setnullstate();
      return;
    }

    const body = {
      requests: [
        {
          image: {
            content: this.state.abase64
          },
          features: [
            {
              type: "LOGO_DETECTION",
              maxResults: 5
            },
            {
              type: "WEB_DETECTION",
              maxResults: 5
            }
          ]
        }
      ]
    };

    const response = await fetch(
      "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCyzIDcYNL4BJKjJQdSe-BvmauPVfSMFkY",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );
    const parsed = await response.json();
    this.props.navigation.navigate("Display", {
      parsed
    });
  };

  render() {
    return (
      <View>
        <Button title="Take a Picture" onPress={this._start} />
        <Image
          source={{
            uri: this.state.abase64
          }}
          style={{
            width: 200,
            height: 200
          }}
        />
      </View>
    );
  }
}
