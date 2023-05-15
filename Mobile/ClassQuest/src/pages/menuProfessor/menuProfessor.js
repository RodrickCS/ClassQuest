import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

import Home from '../home/home';
import Professor from '../professorHome/professorHome';
import Aluno from '../alunoHome/alunoHome';

export default function Menu({ navigation }) {

    return (
        <Drawer.Navigator
            drawerStyle={{ backgroudColor: "#fdf", paddingVertical: 20 }}
            drawerContentOptions={{ activeBackgroudColor: "#ff0", inactiveTintColor: "#f0f" }}
        screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Home" component={Home}
                options={{
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#000' : '#aaa' }}>Primeira tela</Text>),
                    // drawerIcon: (({ focused }) => <Icon color={focused ? '#313131' : '#ddd'} name="home" />)
                }}>
            </Drawer.Screen>
            <Drawer.Screen name="Professor" component={Professor}
                options={{
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#000' : '#aaa' }}>Segunda tela</Text>),
                    // drawerIcon: (({ focused }) => <Icon color={focused ? '#f00' : '#ddd'} name="home" />)
                }}>
            </Drawer.Screen>
            <Drawer.Screen name="Aluno" component={Aluno}
                options={{
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#000' : '#aaa' }}>Terceira tela</Text>),
                    // drawerIcon: (({ focused }) => <Icon color={focused ? '#313131' : '#fff'} name="home" />)
                }}>
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}