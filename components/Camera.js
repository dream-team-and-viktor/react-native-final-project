import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Camera extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEdditing: true,
      aspect: [5,5],
    });
    console.log(result);

    if (!result.cancelled) {
      this.setState({
        image: result.uri
      })
    }
  }
  fetch_data(){
    var request_to_google = {
      "requests":[
        {
          "image":{
            "content":"/9j/7QBEUGhvdG9...image contents...eYxxxzj/Coa6Bax//Z"
          },
          "features":[
            {
              "type":"LABEL_DETECTION",
              "maxResults":1
            }
          ]
        }
      ]
    }
    fetch('POST https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCyzIDcYNL4BJKjJQdSe-BvmauPVfSMFkY', {
      method: 'POST',
      headers: { 
               'Accept': 'application/json',
               'Content-Type': 'application/json' 
               },
      body: JSON.stringify(request_to_google)
    })
    .then((response) => JSON.stringify(response.json())) 
    .then((responseData) => { console.log("response: " + responseData); })
    .catch((err) => { console.log(err); });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Camera Screen</Text>
        <Button title="Go home" onPress={() => {
          this.props.navigation.navigate('Home')
        }}/>
        <Button title="Take a picture" onPress={() => {
          this.props.navigation.navigate('Home')
        }}/>
        <Button title="Check the pictute" onPress={  }}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
