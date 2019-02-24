import {createStackNavigator} from 'react-navigation';
import Detail from './src/components/Detail';
import Home from './src/containers/Home';

const Stack = createStackNavigator({
  Home: {
    screen: Home
  },
  Detail: {
    screen: Detail
  }}, {
    navigationOptions: {
      header: null
    }
  }
);
export default Stack;
