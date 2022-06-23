import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'

import MainMenu from './src/viwer/MainMenu';
import RotaA_Cena1 from './src/viwer/Cenas/RotaA/RotaA_Cena1'
import RotaA_Cena2 from './src/viwer/Cenas/RotaA/RotaA_Cena2'
import RotaA_Cena3 from './src/viwer/Cenas/RotaA/RotaA_Cena3'
import RotaA_Cena4 from './src/viwer/Cenas/RotaA/RotaA_Cena4'
import RotaA_Cena5 from './src/viwer/Cenas/RotaA/RotaA_Cena5'
import RotaA_Cena6 from './src/viwer/Cenas/RotaA/RotaA_Cena6'

import RotaB_Cena3 from './src/viwer/Cenas/RotaB/RotaB_Cena3'
import RotaB_Cena4 from './src/viwer/Cenas/RotaB/RotaB_Cena4'
import RotaB_Cena5 from './src/viwer/Cenas/RotaB/RotaB_Cena5'
import RotaB_Cena6 from './src/viwer/Cenas/RotaB/RotaB_Cena6'

import RotaC_Cena4 from './src/viwer/Cenas/RotaC/RotaC_Cena4'
import RotaC_Cena5 from './src/viwer/Cenas/RotaC/RotaC_Cena5'
import RotaC_Cena6 from './src/viwer/Cenas/RotaC/RotaC_Cena6'
import Cena0 from       './src/viwer/Cenas/Cena0'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="Cena0" component={Cena0}/>

      <Stack.Screen name="RotaA_Cena1" component={RotaA_Cena1}/>
      <Stack.Screen name="RotaA_Cena2" component={RotaA_Cena2}/>
      <Stack.Screen name="RotaA_Cena3" component={RotaA_Cena3}/>
      <Stack.Screen name="RotaA_Cena4" component={RotaA_Cena4}/>
      <Stack.Screen name="RotaA_Cena5" component={RotaA_Cena5}/>
      <Stack.Screen name="RotaA_Cena6" component={RotaA_Cena6}/>

      <Stack.Screen name="RotaB_Cena3" component={RotaB_Cena3}/>
      <Stack.Screen name="RotaB_Cena4" component={RotaB_Cena4}/>
      <Stack.Screen name="RotaB_Cena5" component={RotaB_Cena5}/>
      <Stack.Screen name="RotaB_Cena6" component={RotaB_Cena6}/>

      <Stack.Screen name="RotaC_Cena4" component={RotaC_Cena4}/>
      <Stack.Screen name="RotaC_Cena5" component={RotaC_Cena5}/>
      <Stack.Screen name="RotaC_Cena6" component={RotaC_Cena6}/>

      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}