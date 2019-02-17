import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    _onPressButton(props){
      props.navigation.navigate('Details');
    }
    
    render() {
      return (
        <View style={styles.container}>
          <Text h1>SMART BARBELL</Text>
          <Text>A smart application to track your barbell movements.</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={() => this._onPressButton(this.props)} title="ENTER" />
          </View>
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
    heading: {
      fontSize:40
    },
    buttonContainer: {
      margin:20
    },
  });


