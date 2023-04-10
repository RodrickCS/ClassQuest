import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image, View, Text } from 'react-native';

import Login from './src/pages/login/login';
import Home from './src/pages/home/home';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View>
    //   {/* <Image style={styles.image} source={require('../ClassQuest/assets/logo.jpeg')} /> */}
    //   <Text>coisa</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   image: {
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: '#000',
//   },
//   fundo: {
//     backgroundColor: '#000',
//   },
// });