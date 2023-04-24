import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home/Home';
import Score from './src/screens/ScoreScreen/ScoreScreen';
import CreateQuiz from './src/screens/CreateQuiz/CreateQuiz';
import Setting from './src/screens/SettingScreen/SettingScreen';
import Splash from './src/screens/SplashScreen/SplashScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import Notification from './src/screens/Notification/Notification';
import TakeQuiz from './src/screens/QuizScreen/QuizScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateQuiz"
          component={CreateQuiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TakeQuiz"
          component={TakeQuiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Score"
          component={Score}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default App;
