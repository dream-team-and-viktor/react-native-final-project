import React, { Component } from 'react';
import { Image, View } from 'react-native';
import LoadingScreenStyle from './LoadingScreenStyle';


export default class LoadingScreen extends Component {

  constructor(props) {
      super(props);
      this.color = this.props.backgroundColor ? this.props.backgroundColor : 'rgba(191,54,12 ,0.5)'
  }

  render() {
    return (
      <View style={[LoadingScreenStyle.container, {backgroundColor: this.color}]}>
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