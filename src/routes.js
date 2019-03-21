import { createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import Colors from './globals/Colors';

export default createStackNavigator(
  {
    Main
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.orange
      },
      headerTintColor: Colors.white
    }
  }
);
