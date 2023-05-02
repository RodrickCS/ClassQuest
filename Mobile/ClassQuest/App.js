import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/pages/login/login';
import Home from './src/pages/home/home';
import Professor from './src/pages/professor/professor';
import Aluno from './src/pages/aluno/aluno';
import Cadastro from './src/pages/cadastro/cadastro';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Professor" component={Professor} />
                <Stack.Screen name="Aluno" component={Aluno} />
            </Stack.Navigator>
            {/* <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Professor" component={Professor} />
                <Tab.Screen name="Aluno" component={Aluno} />
            </Tab.Navigator> */}
        </NavigationContainer>
    );
}