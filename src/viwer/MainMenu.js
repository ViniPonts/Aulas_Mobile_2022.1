import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity ,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default function MainMenu({navigation}){


  return(
    <SafeAreaView style={styles.Container}>
      <View style={styles.IconSound} >
      <Icon name="sound" size={40} color="#FFFFFF"/>
      </View>
      <View>
        <Image style={styles.icon} source={{ uri: 'https://www.hypeness.com.br/1/2019/11/a%CC%81rvores-em-preto-e-branco-9.jpg' }}>
        </Image>
        <Text style={styles.Title}
        >Find Some Wood</Text>
      <View style={styles.ButtonArea}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('RotaA_Cena1')}>
            <Text style={styles.ButtonText}>
              ~Começar o jogo~
            </Text>
          </TouchableOpacity>
      </View>
      
        <StatusBar style="auto" />

      </View>
    </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: 'black',
    },
    IconSound:{
      marginTop: 30,
      paddingBottom: '1%',
      marginHorizontal: 350,
    },
    Title: {
      fontSize: 30,
      backgroundColor: 'black',
      color : "#FFFFFF",
      paddingVertical : 10,
      marginHorizontal: 90,
  
    },
    icon: {
      width : 350, height: 300,
      marginTop : 70,
      marginHorizontal: 30,
      paddingHorizontal : 10,
      paddingVertical : 10,
    },
    ButtonArea: {
      marginHorizontal: 35,
      paddingVertical : 100,
    },
    //butão
    button:{
      alignItems: "center",
      backgroundColor: "#DDDDDD",
    },
    ButtonText:{
      fontSize: 40,
      color: 'white',
    }
  })