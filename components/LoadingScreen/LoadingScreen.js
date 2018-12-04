import React, { Component } from 'react';
import { Image, View } from 'react-native';
import LoadingScreenStyle from './LoadingScreenStyle';


export default class LoadingScreen extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <View style={LoadingScreenStyle.container}>
          <View style={LoadingScreenStyle.loadingPictureWrapper}>
            <Image
              style={LoadingScreenStyle.loadingPicture}
              source={require('../../assets/loading.gif')}
            />
          </View>
      </View>
    )
  }
}