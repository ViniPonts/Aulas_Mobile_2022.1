import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity ,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'


export default function Game({navigation}){

    return(
        <SafeAreaView style={styles.Container}>
            <View style={styles.IconSound} >
                <Icon name="sound" size={40} color="#FFFFFF"/>
            </View>
            <Text style={styles.title}>
                ~TITULOS~
            </Text>
            <Text style={styles.MainText}>
            [TEXTO CENA 5 - ROTA B]
            </Text>

            <TouchableOpacity
                style={styles.EscolhaButton}
                onPress={() => navigation.navigate('RotaB_Cena6')}>
                <Text style={styles.EscolhaText}>
                [INTERÇÃO MANTER ROTA]
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.EscolhaButton}
                onPress={() => navigation.navigate('RotaC_Cena6')}>
                <Text style={styles.EscolhaText}>
                [INTERÇÃO MUDAR ROTA C]
                </Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.ButtonNavegate}
                    onPress={() => navigation.navigate('MainMenu')}>
                        <Text style={styles.ButtonNavegateText}>
                        ~RECOMECAR~
                        </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.ButtonNavegate}
                onPress={() => navigation.navigate('RotaB_Cena5')}>
                    <Text style={styles.ButtonNavegateText}>
                    ~X~
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    

    )

}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'black',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    title:{
        paddingVertical: 10,
        fontSize: 30,
        marginTop: 100,
        marginHorizontal: 30,
        textAlign : "center",
        color: "#FFFFFF",
    },
    MainText: {
        paddingVertical: 10,
        fontSize: 27,
        marginHorizontal: 30,
        textAlign : "left",
        minHeight: 300,
        maxHeight: 300,
        color: "#FFFFFF",

    },
    EscolhaText: {
        fontSize: 24,
        backgroundColor: 'black',
        marginLeft: 40,
        paddingVertical : 40,
        textAlign : "left",
        minHeight: 10,
        maxHeight: 10,
        color : "#FFFFFF",
    },    
    EscolhaButton: {
        backgroundColor: "black",
        
        
    },
    ButtonNavegate: {
        backgroundColor: "black",
        width:100, height: 45,
        marginTop: 100,
        marginLeft: 20,
        marginRight: '37%',
        textAlign : "left",
        
    },
    row:{
        flexDirection: "row",
        //flexWrap: "wrap",
    },
    ButtonNavegateText: {
        fontSize: 14,
        color: 'white',
        textAlign : "center",
        justifyContent: "center",
    },
    IconSound:{
        marginTop: 30,
        paddingBottom: '1%',
        marginHorizontal: 350,
  
    },
  });