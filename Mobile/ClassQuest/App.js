import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/login/login';
import Cadastro from './src/pages/cadastro/cadastro';
import MenuAluno from './src/pages/menuAluno/menuAluno';
import MenuProf from './src/pages/menuProfessor/menuProfessor';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Login" component={Login} /> */}
                {/* <Stack.Screen name="Cadastro" component={Cadastro} /> */}
                <Stack.Screen name="MenuAluno" component={MenuAluno} /> 
                <Stack.Screen name="MenuProf" component={MenuProf} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}