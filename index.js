import {AppRegistry} from 'react-native';

// import App from './App';

import {name as appName} from './app.json';

import HomeScreen from './Home';

import AboutScreen from './jiya';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="about"
          component={AboutScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

AppRegistry.registerComponent(appName, () => App);
