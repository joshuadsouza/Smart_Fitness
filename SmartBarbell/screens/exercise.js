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
        weight: '',
        exercise_id: 0
    };

    this.send_data = this.send_data.bind(this);
    this.send_stop_data = this.send_stop_data.bind(this);
  }

//FUNCTION TO SET THE END TIME OF THE EXERCISE
send_stop_data = async (props) => {
  //Send POST request to the API to log the user data
  try {
    let response = await fetch(
        'http://34.73.53.208:3000/exercise_stop', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                exercise_id: this.state.exercise_id
            }),
        }
    );
    let responseJSON = await response.toString();

} catch(error){
    console.error(error);
}

props.navigation.navigate('Analysis');

}

//FUNCTION TO SEND START TIME DATA
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
        let responseJSON = await response.json();
        let id_num = responseJSON.ex_id;
        this.setState({
          exercise_id: id_num
        });

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
            <Button onPress={() => this.send_stop_data(this.props)} title="STOP" />
          </View>
        );
      }
}