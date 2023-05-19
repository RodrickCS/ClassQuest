import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/login/login';
import Cadastro from './src/pages/cadastro/cadastro';
import MenuAluno from './src/components/menuAluno/menuAluno';
import MenuProfessor from './src/components/menuProfessor/menuProfessor';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="MenuAluno" component={MenuAluno} /> 
                <Stack.Screen name="MenuProfessor" component={MenuProfessor} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}