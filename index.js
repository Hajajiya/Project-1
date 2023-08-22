import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import HomeScreen from './Home';

import AboutScreen from './jiya';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CodePush from 'react-native-code-push';

const Stack = createNativeStackNavigator();
let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {appendReleaseDescription: true},
};
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

export default CodePush(codePushOptions)(App);

AppRegistry.registerComponent(appName, () => App);
