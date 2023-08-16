import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import jiyaScreen from './jiya';
import HomeScreen from './Home';

const stack = createNativeStackNavigator();
// export class Myapp extends Component {
//   render() {
//     return (
//       <View style={{backgroundColor: 'black', height: 400}}>
//         <View>
//         <Text style={{color: 'white'}}>{'jiya'}</Text>
//         </View>
//       </View>
//     );
//   }
// }
const navigater = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="jiya"
          component={jiyaScreen}
          options={{title: 'jiya'}}
        />
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default navigater;
