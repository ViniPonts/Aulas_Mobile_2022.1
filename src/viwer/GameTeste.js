import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity ,SafeAreaView } from 'react-native';



export default function Game({navigation}){

    return(
        <SafeAreaView style={styles.Container}>
            
            <Text style={styles.title}>
                ~COMEÇO~
            </Text>
            <Text style={styles.MainText}>
            [TEXTO CENA 1 - ROTA A]
            </Text>

            <TouchableOpacity
                style={styles.EscolhaButton}
                onPress={() => navigation.navigate('MainMenu')}>
                <Text style={styles.EscolhaText}>
                [INTERÇÃO SIMPLES]
                </Text>
            </TouchableOpacity>
            

            
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.ButtonNavegate}
                    onPress={() => navigation.navigate('MainMenu')}>
                        <Text style={styles.ButtonNavegateText}>
                        ~voltar~
                        </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={styles.ButtonNavegate}
                onPress={() => navigation.navigate('MainMenu')}>
                    <Text style={styles.ButtonNavegateText}>
                    ~Avançar~
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    

    )

    const Escolha=() =>{
            
    }
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
        marginLeft: 100,
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
        fontSize: 20,
        color: 'white',
        textAlign : "center",
        justifyContent: "center",
    },
    ButtonStart:{
  
    },
  });