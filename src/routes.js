import { createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import Product from './pages/Product';
import Colors from './globals/Colors';

export default createStackNavigator(
  {
    Main,
    Product
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
