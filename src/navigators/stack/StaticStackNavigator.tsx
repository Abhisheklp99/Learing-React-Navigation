import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStaticNavigation} from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import ProfileScreen from '../../screens/ProfileScreen';


/* const Stack= createNativeStackNavigator({
  screens:{
    Home:HomeScreen, 
    Details:DetailScreen,
    Profile:ProfileScreen
  }
}) ;//ye inernally  bolta aapke jitne bhi screen hai wo muhe laake dedo
 */

//styling 
const Stack= createNativeStackNavigator({
  screenOptions: {
    headerStyle: {
      backgroundColor: '#92d8b8',
    },
    headerTintColor: '#bb5465',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
    headerTitleAlign: 'center',
    animation: "flip"
  },
  screens:{
    Home:HomeScreen, 
    Details:DetailScreen,
    Profile:ProfileScreen
  }
}) ;//ye inernally  bolta aapke jitne bhi screen hai wo muhe laake dedo




const Navigation=createStaticNavigation(Stack);


export default function StaticStackNavigator(){
    return (
       
              <Navigation  />
          
    )
}