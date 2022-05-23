import React, { useState } from "react";
import { StyleSheet, Text, Image,  View , Alert, TouchableOpacity,  ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CheckBox from 'expo-checkbox';
import { Button } from 'react-native-ios-kit';

const styles = StyleSheet.create({

    container: {
        marginHorizontal:30,
        
        marginTop: 80,
        borderRadius: 15,
        
      },

    checkboxContainer: {
        paddingLeft: 20,
        flexDirection: "row",
        fontWeight: "bold",
        marginVertical:20,
        
    },
    checkbox: {
        alignSelf: "center",
        
    },

    image: {
      flex: 1,
      
    },

    image2: {
      flex: 1,
      height:320,
    },

    text: {
      color: "black",
      fontSize: 42,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "center",
    },

    button: {
        
        alignItems: "center",
        padding: 10,
        marginHorizontal: 100,
        marginTop:30,
      
    },

    buttonContinuar: {
        padding: 40,
        marginRight: 10,
        marginHorizontal: 160,
        marginTop:60,
        
      },

    buttonContinuar2: {
        padding: 40,
        marginRight: 0,
        marginHorizontal: 160,
        marginTop:300,
        borderRadius:3,
      },
    
    textBallon: {
        textAlign: "center",
        padding:5,
        color: "black",
        fontSize: 19,
        fontWeight: "bold",
        backgroundColor: "#eaeaea",
        borderColor: "#5F9EA0",
        borderWidth: 2,
        borderRadius: 30,
        marginLeft: 150,
        marginTop:60,   
      },

      textBallon2: {  
        alignItems:"center",
        padding:4,
        color: "black",
        fontSize: 17,
        lineHeight: 24,
        fontWeight: "bold",
        backgroundColor: "#eaeaea",
        borderColor: "#5F9EA0",
        borderWidth: 2,
        borderRadius: 30,
        marginHorizontal: 10,
      },

      textBallon3: {
        padding:10,
        color: "black",
        fontSize: 24,
        lineHeight: 30,
        fontWeight: "bold",
        backgroundColor: "#eaeaea",
        borderColor: "#5F9EA0",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
        marginVertical:20,
      },

      seta: {
        width: 115,
        height: 110,
        marginEnd:"0%",
        marginLeft:"70%",
        marginTop: 170,
      },
      textBallon4: {
        textAlign: "center",
        padding:9,
        color: "black",
        fontSize: 16,
        lineHeight: 25,
        fontWeight: "bold",
        marginLeft: 150,
        marginTop:60,
      },
  });


export function Cirurgia1({navigation}) {
    
    return (
        
                <ImageBackground source={require("./cir1.gif") } resizeMode="cover" style={styles.image}>
                    <Animatable.View animation="fadeIn" useNativeDriver duration={4000}>
                    <View marginTop={0}  >
                        <Text style={styles.textBallon3}> Sua cirurgia irá começar em breve!  </Text>
                    </View> 
                    </Animatable.View>
                    
                    <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={5000} >
                    <View marginTop={-60} marginLeft={-50} marginRight={10}>
                        <Text style={styles.textBallon}> Antes me confirme por favor: Qual é o seu nome? E qual é a sua cirurgia?</Text>
                    </View> 
                    </Animatable.View>
                    
                    <View >
                    <TouchableOpacity style={{ height: 600}}
                      onPress={() => navigation.navigate("C2")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={230}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={0}>
                            <Image
                                            style={styles.seta}
                                            source={require("./seta.png") }
                                        /> 
                        </View>
                               
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
              </ImageBackground>
  );
}

export function Cirurgia2({navigation}) {
    
  return (
      
              <ImageBackground source={require("./cir2.gif") } resizeMode="cover" style={styles.image}>
   
                  <View marginTop={150}>
                    <TouchableOpacity style={{ height: 600}}
                      onPress={() => navigation.navigate("C3")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={280}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={0}>
                            <Image
                                            style={styles.seta}
                                            source={require("./seta.png") }
                                        /> 
                        </View>
                               
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
);
}

export function Cirurgia3({navigation}) {
    
  return (
      
              <ImageBackground source={require("./cir3.gif") } resizeMode="cover" style={styles.image} marginTop={-100}>
                 
                  
                  <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={100} >
                  <View marginTop={50} marginLeft={-100} marginRight={140} >
                      <Text style={styles.textBallon4}> Agora irei precisar fazer um acesso venoso no seu braço. </Text>
                  </View> 
                  </Animatable.View>
                  
                 <View style={styles.buttonContinuar} marginHorizontal={50} marginTop={390}>
                      <Button rounded inverted
                          mode="contained"
                          onPress={() => navigation.navigate("C5")}
                      >Por que é preciso esse acesso?</Button>
                  </View>
            </ImageBackground>
);
}

export function Cirurgia4({navigation}) {
    
  return (
      
              <ImageBackground source={require("./cir4.gif") } resizeMode="cover" style={styles.image}>
                 
                  
                  <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={100} >
                  <View marginTop={90} marginLeft={-70} marginRight={90}>
                      <Text style={styles.textBallon4}> Por que é preciso esse acesso?</Text>
                  </View> 
                  </Animatable.View>
                  
                 <View style={styles.buttonContinuar} marginTop={360}>
                      <Button rounded inverted
                          
                          mode="contained"
                          onPress={() => navigation.navigate("C5")}
                      >Conferir</Button>
                  </View>
            </ImageBackground>
);
}

export function Cirurgia5({navigation}) {
    
  return (
      
              <ImageBackground source={require("./cir3.gif") } resizeMode="cover" style={styles.image}>
                 
                  
                  <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={100} >
                  <View marginTop={90} marginLeft={-110} marginRight={130}>
                      <Text style={styles.textBallon4}> Com esse acesso à sua veia será possível administrar soro e medicação durante a cirurgia</Text>
                  </View> 
                  </Animatable.View>
                  
                  <View >
                    <TouchableOpacity style={{ height: 550}}
                      onPress={() => navigation.navigate("C6")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={140}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={0}>
                            <Image
                                            style={styles.seta}
                                            source={require("./seta.png") }
                                        /> 
                        </View>
                               
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
);
}

export function Cirurgia6({navigation}) {   

  
 

  return (
    <ImageBackground source={require("./JogoLigacao.jpg") }  style={styles.image2} marginTop={165} marginRight={-40}>
   
      
      <View>
                <Animatable.Text 
                style={styles.textBallon3}
                animation="fadeIn"
                useNativeDriver
                duration={3000}
                > 
                Clique em cada profissional para conhecer os membros da equipe
                </Animatable.Text>
                
                </View>
                  
                
                <TouchableOpacity style={{ marginTop:40, marginRight:350,  height: 370} }
                   
                   onPress={() => Alert.alert('','Eu sou João, o anestesista.')  }  
                >  
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop:-370, marginRight:265, marginLeft:83,  height: 370}}
                    onPress={() => Alert.alert('','Meu nome é Augusto, sou cirurgião.')  }  
                >  
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop:-370, marginRight:180, marginLeft:167,  height: 370} } 
                    onPress={() => Alert.alert('', 'Meu nome é Beatriz, e eu sou a cirurgiã principal')  }  
                >  
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop:-370, marginRight:96, marginLeft:253,  height: 370}}
                    onPress={() => Alert.alert('','Meu nome é Lidia, sou a instrumentadora.')  }  
                >  
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop:-370, marginLeft:335,  height: 360}}
                    onPress={() => Alert.alert('','Me chamo Guilherme, serei o circulante.')  }  
                >  
                </TouchableOpacity>
                
                
                <View >
                    <TouchableOpacity style={{ height: 550}}
                      onPress={() => navigation.navigate("PO1")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={-110}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={0}>
                            <Image
                                            style={styles.seta}
                                            source={require("./seta.png") }
                                        /> 
                        </View>
                               
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
                
      </ImageBackground>
      
      );}
    

