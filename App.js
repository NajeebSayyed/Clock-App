import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Alarm from './src/screens/Alarm';
import Clock from './src/screens/Clock';
import StopWatch from './src/screens/StopWatch';
import Timer from './src/screens/Timer';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarInactiveTintColor: 'black',
            tabBarActiveTintColor: 'black',
            tabBarStyle: {
              height: 80, // Set height of tab bar
              paddingBottom: 10, // Optional: Padding for the icons/text
            },

            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: focused ? '700' : null,
                  color: 'black',
                }}>
                {route.name}
              </Text>
            ),
          })}>
          <Tab.Screen
            name="Alarm"
            component={Alarm}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size, focused}) => (
                <View
                  style={[
                    styles.iconContainer,
                    {backgroundColor: focused ? '#66f268' : 'transparent'},
                  ]}>
                  <MaterialCommunityIcons
                    name="alarm"
                    size={focused ? 40 : 30}
                    color={color}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Clock"
            component={Clock}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size, focused}) => (
                <View
                  style={[
                    styles.iconContainer,
                    {backgroundColor: focused ? '#66f268' : 'transparent'},
                  ]}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={focused ? 40 : 30}
                    color={color}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="StopWatch"
            component={StopWatch}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size, focused}) => (
                <View
                  style={[
                    styles.iconContainer,
                    {backgroundColor: focused ? '#66f268' : 'transparent'},
                  ]}>
                  <Ionicons
                    name="stopwatch-outline"
                    size={focused ? 40 : 30}
                    color={color}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Timer"
            component={Timer}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size, focused}) => (
                <View
                  style={[
                    styles.iconContainer,
                    {backgroundColor: focused ? '#66f268' : 'transparent'},
                  ]}>
                  <MaterialCommunityIcons
                    name="timer-sand"
                    size={focused ? 37 : 30}
                    color={color}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    // padding: 5,
    borderRadius: 50, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 65,
  },
});

export default App;
