import React, { useState, Component, useEffect } from "react";
import { StyleSheet, Text, View , Alert, ImageBackground, NavigatorIOS} from 'react-native';
import CheckBox from 'expo-checkbox';
import { Button } from 'react-native-ios-kit';


const styles = StyleSheet.create({

    container: {
        marginHorizontal:30,
        backgroundColor: "#eaeaea",
        marginTop: 40,
        borderRadius: 15,
      },

    checkboxContainer: {
        paddingLeft: 50,
        flexDirection: "row",
        fontWeight: "normal",
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
      fontWeight: "normal",
      textAlign: "center",
    },

    button: {
      alignItems: "center",
      padding: 10,
      marginHorizontal: 100,
    },

    buttonContinuar: {
        padding: 40,
        marginRight: 10,
        marginHorizontal: 160,
      },
    
 
    textBallon: {
        padding:10,
        color: "black",
        fontSize: 20,
        
        fontWeight: "normal",
        
        backgroundColor: "#eaeaea",
        borderColor: "#5F9EA0",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
      },

      textBallon2: {
        padding:10,
        color: "black",
        fontSize: 25,
        lineHeight: 30,
        
        height:150,
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
      },


  });



    export function Selecionar({navigation}) {
        
        const [isSelected, setSelection1] = useState(false);
        const [isSelected2, setSelection2] = useState(false);
        const [isSelected3, setSelection3] = useState(false);
        const [isSelected4, setSelection4] = useState(false);
        
        var auxiliar= true;
        function confere() {
            
            if (isSelected && isSelected3 && !isSelected2 && !isSelected4) {
                Alert.alert('É isso mesmo!', 'Leve um documento com foto e a guia da cirurgia.');
                auxiliar = false;
                navigation.navigate("Quarto1")
            }else {
                Alert.alert("Incorreto!","Tente novamente");
                }
            }
        
        return (
                    <ImageBackground source={require("./recep2.jpg") } resizeMode="cover" style={styles.image}>
                        <View marginTop={-90}>
                            <Text style={styles.textBallon}> Selecione os itens que devem ser entregues na recepção: </Text> 
                        
                        <View style={styles.container}>
                             
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection1}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Guia do procedimento</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected2}
                                    onValueChange={setSelection2}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Carteira de vacinação</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected3}
                                    onValueChange={setSelection3}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Documento com foto</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected4}
                                    onValueChange={setSelection4}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Comprovante de residência</Text>
                            </View>
                            
                            <View marginVertical={20}>
                                <Button style={styles.button} inverted rounded  
                                mode="contained"
                                onPress={() => confere() }>
                                Conferir
                                </Button>
                            </View>
                             
                            </View>
                            
                        </View>
                        
                        
                  </ImageBackground>
      );
    
    
    }
    
  
    
    
    
    

    

   