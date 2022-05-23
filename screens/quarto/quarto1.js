import React from 'react';
import { StyleSheet, Image,  View, ImageBackground, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-ios-kit';

const Background = styled.View`
    flex: 1;
    background-color : 	#ADD8E6;
    justify-content: space-between;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    ballon1: {
      width: 325,
      height: 250,
      marginTop: 80,
      marginLeft:20,
    },

    image: {
      flex: 0.99,
      
      justifyContent: "space-between"
    },

    text: {
      color: "black",
      fontSize: 42,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "center",
    },

    seta: {
      width: 115,
      height: 110,
      marginEnd:"-10%",
      marginLeft:"65%",
      
    },

    buttonContinuar: {
      padding: 40,
      marginRight: 10,
      marginHorizontal: 160,
      marginTop:60,
      
    },
  });

    export function Quarto1({navigation}) {
      return (
          <Background>
            <ImageBackground source={require("./enfMostraQt.gif")}  style={styles.image} duration={3000}  >
            
                              
                <View marginTop={-40}>
                <Image
                            style={styles.ballon1}
                            source={require("./balao2pac.png") } //olá meu nome é nina
                        />
                  <TouchableOpacity style={{ height: 530, marginTop:100}}
                      onPress={() => navigation.navigate("Quarto2")}
                  >
                    <Animatable.View
                
                marginLeft={"18%"}
                animation="fadeIn"
                useNativeDriver
                duration={3000}
                > 
                  
                <View marginTop={210}>
                <Image
                              style={styles.seta}
                              source={require("./seta.png") }
                          />
                </View>
                  
                </Animatable.View>
                  </TouchableOpacity>
                </View>

                </ImageBackground>       
          </Background>
      );
    }

    export function Quarto1p1({navigation}) {
      return (
          <Background>
            <ImageBackground source={require("./menor4.gif")}  style={styles.image} duration={3000} >
            <Animatable.View
                
                marginLeft={80}
                animation="fadeIn"
                useNativeDriver
                duration={3000}
                > 
                  <Image
                            style={styles.ballon1}
                            source={require("./balao3pac.png") } // bem vindo novamente...
                        />
                </Animatable.View>
                  
                    
                    
                <View>
                <TouchableOpacity style={{ height: 700, marginTop:40}}
                    onPress={() => navigation.navigate("Quarto2")}
                >
                            
                         
                      </TouchableOpacity>
                </View>
                      
                      </ImageBackground>
                      
          </Background>
          
      );
    }