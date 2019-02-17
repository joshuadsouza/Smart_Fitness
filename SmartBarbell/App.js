import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/home.js';
import DetailsScreen from './screens/user_details.js';
import ExerciseScreen from './screens/exercise.js';
import ExerciseAnalysis from './screens/analysis.js'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  },
  Instructions: {
    screen: ExerciseScreen
  },
  Analysis: {
    screen: ExerciseAnalysis 
  }
},
{
  initialRouteName: "Home"
}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return <AppContainer />;
  }
}