import React, { useState } from "react";
import { StyleSheet, Text, View , Alert, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-ios-kit';

const styles = StyleSheet.create({

    container: {
        marginHorizontal:30,
        backgroundColor: "#eaeaea",
        marginTop: 0,
        borderRadius: 15,
      },

    checkboxContainer: {
        paddingLeft: 50,
        flexDirection: "row",
        fontWeight: "bold",
        marginVertical:20,
    },

    checkbox: {
        alignSelf: "center",
        
    },

    label: {
        margin: 8,
    },

    image: {
      flex: 1,
      justifyContent: "center",
    },

    text: {
      color: "black",
      fontSize: 42,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "center",
    },

    text2: {
      color: "black",
      fontSize: 30,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "center",
    },

    button: {
      alignItems: "center",
      
      paddingTop: 320,
      marginHorizontal: 0,
    },

    buttonContinuar: {
        padding: 40,
        marginHorizontal: 90,
      },

    buttonContinuar2: {
      padding: 40,
      marginRight: 10,
      marginHorizontal: 160,
    },
    
 
    textBallon: {
        padding:5,
        color: "black",
        fontSize: 21,
        lineHeight: 30,
        fontWeight: "bold",
        height:75,
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
      }, 

      textBallon2: {
        padding:5,
        color: "black",
        fontSize: 23,
        lineHeight: 30,
        fontWeight: "bold",
        height:130,
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
        marginVertical: 380,
        marginTop: 0,
      }, 

      textBallon3: {
        padding:5,
        color: "black",
        fontSize: 23,
        lineHeight: 30,
        fontWeight: "bold",
        height:90,
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
        marginVertical: 190,
        marginTop: 0,
      }, 
  });

  export function Recepcao7({navigation}){
    return (
      <ImageBackground source={require("./recep2.jpg") } resizeMode="cover" style={styles.image}>
        <Text style={styles.text2}> O que é autonomia? </Text> 
        <View style={{backgroundColor:'#eaeaea', borderRadius:20}}>
          
            <Text style={{fontSize:20}}>  É o direito ao livre arbítrio que faz com que a pessoa esteja apta para tomar suas próprias decisões</Text>
        </View>
        
        <Text style={styles.text2}> Qual o conteúdo do TCI? </Text> 
        <View style={{backgroundColor:'#eaeaea', borderRadius:20}}>
        <Text style={{fontSize:20}}> Os profissionais do hospital tem o dever de informar a respeito da gravidade de seu caso de maneira clara; eles não podem efetuar nada sem ter sua autorização. É proibido o médico deixar de informar ao paciente o diagnóstico, prognóstico, riscos e objetivos do tratamento; ao menos que essa comunicação direta possa lhe causar dano, nesse caso a comunicação é feita com seu representante legal</Text>          
        </View>

            <View style={styles.buttonContinuar2 }>
              <Button 
                title="Continuar"
                />
            </View>
            
      </ImageBackground>
    );
}