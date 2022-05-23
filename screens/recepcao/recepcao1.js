import React from 'react';
import { StyleSheet, Image,  TouchableOpacity, View, ImageBackground} from 'react-native';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';


const Background = styled.View`
    flex: 1;
    background-color : 	#ADD8E6;
    justify-content: center;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    ballon: {
      width: 295,
      height: 260,
      marginTop: -90,
      marginLeft:35,
    },

    ballon1: {
      width: 325,
      height: 250,
      marginTop: 70,
      marginLeft:30,
    },

    ballon2: {
      width: 155,
      height: 150,
      marginTop: -170,
      marginLeft:-5,
      
    },

    seta: {
      width: 115,
      height: 110,
      marginTop:350,
      marginLeft:"70%",
      
    },


    image: {
      flex: 1,
      justifyContent: "center"
    },

    text: {
      color: "black",
      fontSize: 42,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "center",
    },

    textBallon: {
      padding:0,
      color: "black",
      fontSize: 18,
      lineHeight: 30,
      fontWeight: "bold",
      height:100,
      backgroundColor: "#eaeaea",
      borderColor: "#778899",
      borderWidth: 1,
      borderRadius: 30,
      textAlign: "center",
      marginHorizontal: 10,
      marginTop: 40,
    }, 

    button: {
      alignItems: "center",
      padding: 10,
      marginHorizontal: 100,
    }
  });

    export function Recepcao1({navigation}) {
      return (
          <Background>
            
            <ImageBackground source={require("./1recep.gif")}  style={styles.image}  >
              
            <Image
                            style={styles.ballon1}
                            source={require("./balao1pac.png") } // olá, aqui na recepção...
                        />
                <View>
                <TouchableOpacity style={{ height: 530, marginTop:2}}
                    onPress={() => navigation.navigate("Selecionar")}
                >    
                <Animatable.View
                
                marginLeft={80}
                animation="fadeIn"
                useNativeDriver
                duration={3000}
                > 
                  
                </Animatable.View>
                
                
                <View >
                  <Image
                              style={styles.seta}
                              source={require("./seta.png") }
                          />
                </View> 
                      </TouchableOpacity>
                      
                </View> 
                     
                      </ImageBackground>
                      
          </Background>  
      );
    }


