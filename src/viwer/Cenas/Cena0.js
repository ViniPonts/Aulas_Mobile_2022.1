import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity ,SafeAreaView, Keyboard, Alert, } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Game({navigation}){

    const [nome, setNome] = useState('')

    async function salvar() {         
        const usuario = {
            nome
        }
        await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
     }
     
     async function mostrarUsuario(){
        const json = await AsyncStorage.getItem("usuario");
        const usuario = JSON.parse(json);
        Alert.alert
        {usuario.nome}'então ...'

        if(!json){
            Alert.alert
            'Nome não foi informado'
        }
     }

    return(
        <SafeAreaView style={styles.Container}>
                <View style={styles.IconSound} >
                    <Icon name="sound" size={40} color="#FFFFFF"/>
                </View>
            <Text style={styles.title}>
                ~Seja bem Vindo~
            </Text>
            <Text style={styles.MainText}>
            [Para Que Possamos Começar Gostaria de Nome]
            </Text>

            <TextInput
                style={styles.MainText}
                value={nome}
                onChangeText={text => setNome(text)}
                placeholder="Digite o nome"
                />

            
            <TouchableOpacity 
            style ={styles.EscolhaButton}
            onPress={salvar}{...mostrarUsuario}
            >
                <Text style={styles.EscolhaText}>Corfirmar Nome</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.EscolhaButton}
                onPress={() => navigation.navigate('RotaA_Cena1')}>
                <Text style={styles.EscolhaText}>
                [AVANÇAR]
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
                onPress={() => navigation.navigate('RotaA_Cena1')}>
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
        alignItems: 'right',
        justifyContent: 'center',
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
        fontSize: 14,
        color: 'white',
        textAlign : "center",
        justifyContent: "center",
    },
    IconSound:{
        marginTop: 30,
        paddingBottom: '1%',
        marginHorizontal: 10,
      },
  });