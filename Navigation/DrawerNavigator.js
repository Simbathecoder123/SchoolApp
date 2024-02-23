import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from "react"
import MainScreen from '../Screens/Main';
import DetailsScreen from '../Screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Drawer = createBottomTabNavigator();

export default function DrawerNavigation(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
            <Drawer.Screen name="Main Screen" component = {MainScreen}/>
            <Drawer.Screen name="Details Screen" component = {DetailsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}