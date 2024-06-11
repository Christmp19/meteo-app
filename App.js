import React from "react";
// import About from "./components/About";
import Search from "./components/Search";
import { View, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import About from "./components/About"
import style from "./style";

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Search') {
                iconName = 'home';
              } else if (route.name === 'About') {
                iconName = 'user-circle-o';
              }

              return <FontAwesome name={iconName} size={size} color={focused ? 'white' : 'gray'} />;
            },
            tabBarLabel: ({ focused }) => (
              <Text style={focused ? style.activeTabLabel : style.inactiveTabLabel}>
                {route.name}
              </Text>
            ),
            tabBarStyle: {
              backgroundColor: 'blue',
              padding: 10
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '500',
              color: 'white', // Change this to the color you want
            },
            tabBarActiveTintColor: 'blue', // Active tab label color
            tabBarInactiveTintColor: 'gray', // Inactive tab label color
            // 
            // showIcon: true,
            // showLabel: false,
            // style: {
            //   backgroundColor: "#a2273C",
            //   borderTopWidth: 1
            // }
          })}
        >
          <Tab.Screen
            name="Search"
            component={Search}
            options={({ route }) => ({
              headerShown: route.name === 'Search' ? true : false,
              title: route.name === 'Search' ? 'Rechercher une ville' : 'Search',
              headerStyle: {
                backgroundColor: 'blue',
              },
              headerTitleStyle: {
                color: 'white',
              }
            })}
          />
          <Tab.Screen name="About" component={About} options={({ route }) => ({
            title: route.name === 'About' ? 'A propos' : 'About',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTitleStyle: {
              color: 'white',
            }
          })} />
        </Tab.Navigator>
      </NavigationContainer>

    );
  }
}