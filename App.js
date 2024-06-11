import React from "react";
// import About from "./components/About";
import Search from "./components/Search";
import { View, StyleSheet } from 'react-native'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.view}>

        <Search />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    marginVertical: 60,
  }
})