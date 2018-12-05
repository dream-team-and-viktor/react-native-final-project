import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getDistance } from 'geolib';
import { Location } from 'expo';
import mapstyle from './mapstyle.json';

export default class MapScreen extends Component {
  // static navigationOptions = {
  //   header: null
  // }

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.latLngPicture = { 
      latitude: navigation.getParam("latitude", null),
      longitude: navigation.getParam("longitude", null)
    }
    // console.log(this.latLngPicture);

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      latLngPhone: {
        latitude: 0,
        longitude: 0
      }
    };
  }

  componentDidMount()  {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    await Location.getCurrentPositionAsync({}).then(result => {
      const { latitude, longitude } = result.coords;
      this.setState({
        region: {
          latitude: (this.latLngPicture.latitude + latitude) / 2,
          longitude: (this.latLngPicture.longitude + longitude) / 2,
          longitudeDelta: Math.abs(Math.abs(this.latLngPicture.longitude) - Math.abs(this.state.latLngPhone.longitude))/5000,
          latitudeDelta: Math.abs(Math.abs(this.latLngPicture.latitude) - Math.abs(this.state.latLngPhone.latitude))/5000,
        },
        latLngPhone: {
          latitude,
          longitude
        }
      })
    })
  };

  render() {
    const { latLngPhone, region } = this.state;
    if (region.latitude === 0) {
      return null;
    }
    console.log(latLngPhone, region);
    return (
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        region={region}
        customMapStyle={mapstyle}
      >
        <Marker
          title="Picture Location"
          coordinate={this.latLngPicture}
        />
        <Marker
          title="Phone"
          coordinate={latLngPhone}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});