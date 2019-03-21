import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
  static navigationOptions = {
    title: 'Main Mermão'
  };

  render() {
    return (
      <View>
        <Text>Opa é agora hein</Text>
      </View>
    );
  }
}

export default Main;
