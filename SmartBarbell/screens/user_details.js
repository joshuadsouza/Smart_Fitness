import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';

export default class DetailsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            age: '',
            weight: '',
            height: ''
        };

        this.send_data = this.send_data.bind(this);
    }

    send_data = async (props) => {

        //Send POST request to the API to log the user data
        try {
            let response = await fetch(
                'http://34.73.53.208:3000/user_data', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: this.state.email,
                        age: this.state.age,
                        weight: this.state.weight,
                        height: this.state.height
                    }),
                }
            );
            let user_id_number = await Number(response.toString());
            
        } catch(error){
            console.error(error);
        }

        //redirect to the instruction screen
        props.navigation.navigate('Instructions');
    }

    render() {
      return (
        <View>
            <Text style={styles.heading}>Details Screen</Text>
            <Input 
                placeholder='E-mail'
                onChangeText={(text) => this.setState({email: text})}
                value = {this.state.email}
            />
            <Input
                placeholder="Age"
                keyboardType='numeric'
                onChangeText={(text) => this.setState({age: text})}
                value = {this.state.age}
            />
            <Input
                placeholder="Weight"
                keyboardType='numeric'
                onChangeText={(text) => this.setState({weight: text})}
                value = {this.state.weight}
            />
            <Input
                placeholder="Height"
                keyboardType='numeric'
                onChangeText={(text) => this.setState({height: text})}
                value = {this.state.height}
            />
            <Button onPress={() => this.send_data(this.props)} style={styles.buttonContainer} title="SUBMIT" />
        </View>
      )
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
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize:40,
        margin:20
    },
    buttonContainer: {
        margin: 20
    }
  });
