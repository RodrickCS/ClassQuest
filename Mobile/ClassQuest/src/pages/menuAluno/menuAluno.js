import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

import Professor from '../professorHome/professorHome';
import Aluno from '../alunoHome/alunoHome';

export default function Menu({ navigation }) {

    return (
        <Drawer.Navigator
            drawerStyle={{ backgroudColor: "#fdf", paddingVertical: 20 }}
            drawerContentOptions={{ activeBackgroudColor: "#ff0", inactiveTintColor: "#f0f" }}
        screenOptions={{ headerShown: false }}
        >
            {/* <Drawer.Screen name="Home" component={Home}
                options={{
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#000' : '#aaa' }}>Primeira tela</Text>),
                    // drawerIcon: (({ focused }) => <Icon color={focused ? '#313131' : '#ddd'} name="home" />)
                }}>
            </Drawer.Screen> */}
            <Drawer.Screen name="Home" component={Aluno}
                options={{
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#000' : '#aaa' }}>Terceira tela</Text>),
                    // drawerIcon: (({ focused }) => <Icon color={focused ? '#313131' : '#fff'} name="home" />)
                }}>
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}