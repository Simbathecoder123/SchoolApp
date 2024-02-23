import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from "./Screens/Main"
import DetailsScreen from "./Screens/Details"
import DrawerNavigation from './Navigation/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <MainScreen/>
        <DetailsScreen/> */}
        <DrawerNavigation/>
        
      </View>
    );
  }
}
console.log("In app.js");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
