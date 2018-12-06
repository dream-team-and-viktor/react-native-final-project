import React, { Component } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import DisplayScreenStyle from './DisplayScreenStyle';
import { Card, Button, ActionButton, Subheader } from 'react-native-material-ui';

import RelatedImagesScreen from '../RelatedImagesScreen/RelatedImagesScreen';
import ImageDetails from '../ImageDetails/ImageDetails';


export default class DisplayScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          googleViewResult: null
        }
    }

    componentDidMount() {
      this.setState({
        googleViewResult: this.props.navigation.getParam("result", null)
      })
    }

    goToMapScreen = () => {
      if (this.state.googleViewResult.responses[0].landmarkAnnotations) {
        this.props.navigation.navigate("MapScreen", {
          ...this.state.googleViewResult.responses[0].landmarkAnnotations[0].locations[0].latLng
        })
      } else {
        Alert.alert('Landmark not found')
      }
    }

    render() {
        return (
            <View style={DisplayScreenStyle.container}>
              <ScrollView style={DisplayScreenStyle.containerScroll}>
                <Subheader
                  text="Location Details"
                  style={{
                    container: {alignSelf: 'flex-start'}
                  }}
                />

                <View style={DisplayScreenStyle.relatedImagesCardWrapper}>
                  {this.state &&
                    this.state.googleViewResult &&
                    this.state.googleViewResult.responses &&
                    this.state.googleViewResult.responses[0].landmarkAnnotations &&
                    <ImageDetails googleViewResult={this.state.googleViewResult} />
                  }
                </View>

                <Subheader
                  text="Visually Similar Images"
                  style={{
                    container: {alignSelf: 'flex-start'}
                  }}
                />
                <View style={DisplayScreenStyle.relatedImagesCardWrapper}>
                  <Card>
                    <View style={DisplayScreenStyle.relatedImagesCard}>
                      {this.state &&
                        this.state.googleViewResult &&
                        <RelatedImagesScreen imageList={this.state.googleViewResult.responses[0].webDetection.visuallySimilarImages} />
                      }
                    </View>
                  </Card>
                </View>
              </ScrollView>
              <View style={DisplayScreenStyle.MapButtonWrapper}>
                <ActionButton
                  icon="map"
                  onPress={this.goToMapScreen}
                />
              </View>
            </View>
        )
    }
}