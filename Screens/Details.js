import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

let fullresponse, alldata;

const url = 'https://baseball-data.p.rapidapi.com/tournament/list';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '94f8e88a3emsh7a3366b9fb016dbp1dbc64jsn8236d2d4caac',
    'X-RapidAPI-Host': 'baseball-data.p.rapidapi.com'
  }
};

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      respText: '',
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const respText = JSON.stringify(result);
      console.log("Result from API is here &&&&&");
      console.log(respText);
      //this.setState({ respText });
    } catch (error) {
      console.log("API Call failed");
      console.error(error);
    }
  }

  render() {
    return (
      <View>
        <Text style={{ color: '#000', fontSize: 22 }}>
          {this.state.respText}
        </Text>
      </View>
    );
  }
}
