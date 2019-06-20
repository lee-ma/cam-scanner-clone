import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import Results from '.screens/Results';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Confirmation: {screen: ConfirmScreen},
  Result: {screen: Results},
});

const App = createAppContainer(MainNavigator);

export default App;