import React, { useState } from "react";
import { StyleSheet, Text,  View , ScrollView, TouchableOpacity,  ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CheckBox from 'expo-checkbox';
import { Button } from 'react-native-ios-kit';

const styles = StyleSheet.create({

    container: {
        marginHorizontal:30,
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
      flex: 0,
      height:'100%',
    },

    image2: {
      flex: 1,
      height:350
    },

    text: {
      color: "black",
      fontSize: 42,
      lineHeight: 65,
      
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
        padding:9,
        color: "black",
        fontSize: 19,
        height: 90,
        fontWeight: "normal",
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 4,
        borderRadius: 30,
        marginLeft: 150,
        marginTop:60,
        
        
      },

      textBallon2: {
        textAlign: "center",
        padding:4,
        color: "black",
        fontSize: 17,
        lineHeight: 24,
        
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        
        marginHorizontal: 10,
      },

      textBallon3: {
        padding:10,
        color: "black",
        fontSize: 24,
        lineHeight: 30,
        
        
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
        marginVertical:20,
      },

      textBallon4: {
        textAlign: "center",
        padding:9,
        color: "black",
        fontSize: 18,
        lineHeight: 25,
        
        marginLeft: 150,
        marginTop:60,
        
        
      },

      textBallon5: {
        padding:10,
        color: "black",
        fontSize: 24,
        lineHeight: 30,
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 0,
        marginVertical:5,
        marginRight:150,
      },
  });




export function Posop1({navigation}) {
    
  return (
      
              <ImageBackground source={require("./posop1.gif") }   style={styles.image}>
                 
                  
                  <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={100} >
                  <View marginTop={85} marginLeft={0} marginRight={50} >
                      <Text style={styles.textBallon4}> Sua cirurgia terminou! Esta é a sala de recuperação pós-anestésica. </Text>
                  </View> 
                  </Animatable.View>
                  
                  <View marginTop={-290}>
                    <TouchableOpacity style={{ height: 710}}
                        onPress={() => navigation.navigate("PO2")}
                    >
                            
                         
                      </TouchableOpacity>
                    </View>
            </ImageBackground>
);
}

export function Posop2({navigation}) {
    
    return (
        
                <ImageBackground source={require("./posop1.gif") }   style={styles.image}>
                   
                    
                    <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={100} >
                    <View marginTop={85} marginLeft={-20} marginRight={20} >
                        <Text style={styles.textBallon4}> É normal acordar levemente desorientado nesse processo de recuperação da consciência </Text>
                    </View> 
                    </Animatable.View>
                    
                    <View marginTop={-290}>
                    <TouchableOpacity style={{ height: 710}}
                        onPress={() => navigation.navigate("PO3")}
                    >
                            
                         
                      </TouchableOpacity>
                    </View>
              </ImageBackground>
  );
  }

  export function Posop3({navigation}) {
    
    return (
        
                <ImageBackground source={require("./posop1.gif") } resizeMode="cover" style={styles.image}>
                   
                    
                    <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={100} >
                    <View marginTop={100} marginLeft={-20} marginRight={20} >
                        <Text style={styles.textBallon4}> Agora você irá passar por uma avaliação da enfermagem e receberá alta pelo anestesista </Text>
                    </View> 
                    </Animatable.View>
                    
                    <View marginTop={-290}>
                    <TouchableOpacity style={{ height: 710}}
                        onPress={() => navigation.navigate("PO4")}
                    >
                            
                         
                      </TouchableOpacity>
                    </View>
              </ImageBackground>
  );
  }

  export function Posop4({navigation}) {
    
    return (
        
                <ImageBackground source={require("./posop1.gif") } resizeMode="cover" style={styles.image}>
                   
                    
                    <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={100} >
                    <View marginTop={88} marginLeft={-40} marginRight={-8} >
                        <Text style={styles.textBallon4}> Terminamos sua avaliação. Agora você pode retornar para o quarto onde você continuará sua recuperação até sua alta hospitalar </Text>
                    </View> 
                    </Animatable.View>
                    <View>
                    <TouchableOpacity style={{ height: 710}}
                        onPress={() => navigation.navigate("F1")}
                    >
                            
                         
                      </TouchableOpacity>
                    </View>
              </ImageBackground>
  );
  }

  export function Fim1({navigation}) {
    
    return (
        
                <ImageBackground backgroundColor={"rgba(201, 76, 76, 0.3)"}  style={styles.image2}>
                   
                    
                    <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={100} >
                    <View marginTop={110}  >
                        <Text style={styles.textBallon3}> FIM DO JOGO   </Text>

                      

                    </View> 
                    </Animatable.View>
                    
                    <View style={styles.button} marginTop={200} >
                  <Button inverted rounded
                    
                    mode="contained"
                    onPress={() => navigation.navigate("Resumo")}
                >Ver resumo</Button>
                  </View>
                    
                  <View style={styles.button} marginTop={5} >
                  <Button inverted rounded
                    mode="contained"
                    onPress={() => navigation.navigate("EscolhaPlayer")}
                > Voltar ao início</Button>
                  </View>
              </ImageBackground>
  );
  }

  export function Resumo({navigation}){
    return (
      <ScrollView>
        <View width={"100%"} height={"100%"}  >
            <ImageBackground source={require("./posopfot.jpg") } resizeMode="cover" style={styles.image}>
    
        <View style={styles.textBallon3} borderWidth={0}>
        <Text style={styles.textBallon5}  > Recepção </Text> 
            <Text style={{fontSize:20}}>- Confirmação da identidade, procedimento, local da cirurgia e direcionamento.</Text>
            <Text style={{fontSize:20}}>- Entregar documento com foto e guia do procedimento.</Text>
        </View>
        
        
        <View style={styles.textBallon3} borderWidth={0}>
        <Text style={styles.textBallon5}  > Quarto </Text> 
            <Text style={{fontSize:20}}>- Vestir a camisola do hospital sem a roupa íntima.</Text>
            <Text style={{fontSize:20}}>- Assinar o Termo de Consentimento Informado.</Text>
            <Text style={{fontSize:20}}>- Estar em jejum anter da cirurgia.</Text>
            <Text style={{fontSize:20}}>- Avisar sobre alergias.</Text>
            <Text style={{fontSize:20}}>- Não aparar os pelos em casa.</Text>
            <Text style={{fontSize:20}}>- Tomar banho com sabonete antisséptico se o médico solicitar.</Text>
            <Text style={{fontSize:20}}>- Retirar quaiquer adornos do corpo, como joias, maquiagem, adesivos medicamentosos na pele ou absorventes internos.</Text>
            <Text style={{fontSize:20}}>- Local da cirurgia será marcado com uma caneta.</Text>
        </View>

        <View style={styles.textBallon3} borderWidth={0}>
        <Text style={styles.textBallon5}> Cirurgia </Text> 
            <Text style={{fontSize:20}}>- Confirmação do nome do paciente, local da cirurgia e procedimento.</Text>
            <Text style={{fontSize:20}}>- Acesso venoso.</Text>
            <Text style={{fontSize:20}}>- Na sala de cirurgia estarão o anestesista, cirurgião principal e secundário, instrumentador e curculante.</Text>
        </View>

        <View style={styles.textBallon3} borderWidth={0}>
        <Text style={styles.textBallon5}> Pós operatório </Text> 
            <Text style={{fontSize:20}}>- O paciente pode acordar desorientado por conta da anestesia.</Text>
            <Text style={{fontSize:20}}>- Avaliação da enfermagem.</Text>
            <Text style={{fontSize:20}}>- Retorno ao quarto até a alta.</Text>
            
        </View>
        
        <View style={styles.buttonContinuar} >
                  <Button inverted rounded
                    mode="contained"
                    onPress={() => navigation.navigate("EscolhaPlayer")}
                > Voltar ao início</Button>
                  </View>
            
      </ImageBackground>
      </View>
      </ScrollView>
    );
}


