import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
const Drawer = createDrawerNavigator();
import Home from '../home/home';
import Professor from '../professorHome/professorHome';
import Aluno from '../alunoHome/alunoHome';

export default function Menu({ navigation }) {

    return (
            <Drawer.Navigator
                drawerStyle={{ backgroudColor: "#313131", paddingVertical: 20 }}
                drawerContentOptions={{ activeBackgroudColor: "#fff", inactiveTintColor: "#fff" }}>
                <Drawer.Screen name="Home" component={Home}
                    options={{
                        drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#313131' : '#fff' }}>Primeira tela</Text>),
                        // drawerIcon: (({ focused }) => <Icon color={focused ? '#313131' : '#fff'} name="home" />)
                    }}>
                </Drawer.Screen>
                <Drawer.Screen name="Professor" component={Professor}
                    options={{
                        drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#313131' : '#fff' }}>Segunda tela</Text>),
                        // drawerIcon: (({ focused }) => <Icon color={focused ? '#313131' : '#fff'} name="home" />)
                    }}>
                </Drawer.Screen>
                <Drawer.Screen name="Aluno" component={Aluno}
                    options={{
                        drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#313131' : '#fff' }}>Terceira tela</Text>),
                        // drawerIcon: (({ focused }) => <Icon color={focused ? '#313131' : '#fff'} name="home" />)
                    }}>
                </Drawer.Screen>
            </Drawer.Navigator>
    )
}