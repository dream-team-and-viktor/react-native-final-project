import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Camera extends React.Component {
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
