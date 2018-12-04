import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getDistance } from 'geolib';
import { Location } from 'expo';

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
      regionPicture: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
      },
      regionPhone: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
      },
      latLngPhone: {
        latitude: 0,
        longitude: 0
      }
    };
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  getDeltas = () => {
    this.setState({
      regionPicture: {
        latitudeDelta: this.latLngPicture.latitude - this.state.latLngPhone.latitude,
        longitudeDelta: this.latLngPicture.longitude - this.state.latLngPhone.longitude
      }
    })
  }

  getLocationAsync = () => {
    let location = Location.getCurrentPositionAsync({});
    location.then(result => {
      const { latitude, longitude } = result.coords;
      this.setState({
        latLngPhone: {
          latitude,
          longitude
        }
      })
    })
    // await Location.reverseGeocodeAsync(regionPhone).then(locations => {
    //   let { name, street, city, region, isoCountryCode, postalCode } = locations[0];
    //   let locationName = `${name} ${street} ${city}, ${region} ${isoCountryCode} ${postalCode}`

    //   this.setState({
    //     locationName
    //   });
    // });
  };

  render() {
    const { latLngPhone } = this.state;
    const { latLngPicture, regionPicture } = this;
    return (
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        region={regionPicture}
      >
        <Marker
          title="Picture Location"
          coordinate={latLngPicture}
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