import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is home page</Text>
<<<<<<< HEAD
        
        <Button title="GoogleView" onPress={() => {
          this.props.navigation.navigate('GoogleView')
=======
        <Button title="Take a picture" onPress={() => {
          this.props.navigation.navigate('Camera')
>>>>>>> aa5b534203e8d1712ff694ab567c6a0eadf0d216
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
