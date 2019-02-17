import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';


export default class ExerciseScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        exercise: '',
        sets: '',
        reps: '',
        weight: ''
    };

    this.send_data = this.send_data.bind(this);
  }

send_data = async (props) => {
    //Send POST request to the API to log the user data
    try {
        let response = await fetch(
            'http://34.73.53.208:3000/exercise', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    exercise: this.state.exercise,
                    sets: this.state.sets,
                    reps: this.state.reps,
                    weight: this.state.weight
                }),
            }
        );
        let responseJSON = await response.toString();

    } catch(error){
        console.error(error);
    }
  }

    render() {
        return (
          <View>
            <Text h1>SMART BARBELL</Text>
            <Input 
                placeholder='Exercise'
                onChangeText={(text) => this.setState({exercise: text})}
                value = {this.state.exercise}
            />
             <Input
                placeholder="Sets"
                keyboardType='numeric'
                onChangeText={(text) => this.setState({sets: text})}
                value = {this.state.sets}
            />
            <Input
                placeholder="Reps"
                keyboardType='numeric'
                onChangeText={(text) => this.setState({reps: text})}
                value = {this.state.reps}
            />
            <Input
                placeholder="Weight"
                keyboardType='numeric'
                onChangeText={(text) => this.setState({weight: text})}
                value = {this.state.weight}
            />
            <Button onPress={() => this.send_data(this.props)} title="START" />
          </View>
        );
      }
}