import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/login/login';
import Professor from './src/pages/professorHome/professorHome';
import Aluno from './src/pages/alunoHome/alunoHome';
import Cadastro from './src/pages/cadastro/cadastro';
import Menu from './src/pages/menu/menu';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Professor" component={Professor} /> 
                <Stack.Screen name="Menu" component={Menu} /> 
                <Stack.Screen name="Aluno" component={Aluno} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}