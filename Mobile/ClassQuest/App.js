import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/pages/login/login';
import Home from './src/pages/home/home';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import SideMenu from 'react-native-side-menu'

// class ContentView extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+Control+Z for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// class Application extends React.Component {
//   render() {
//     const menu = <Menu navigator={navigator}/>;

//     return (
//       <SideMenu menu={menu}>
//         <ContentView/>
//       </SideMenu>
//     );
//   }
// }