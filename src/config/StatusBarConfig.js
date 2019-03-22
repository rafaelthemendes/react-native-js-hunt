import { StatusBar, Platform } from 'react-native';
import Colors from '../globals/Colors';

if (Platform.OS === 'ios') {
  StatusBar.setBarStyle('light-content');
}
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor(Colors.orange);
}
