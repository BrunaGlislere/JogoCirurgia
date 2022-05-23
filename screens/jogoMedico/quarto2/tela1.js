import React, { useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground, Image, Alert} from 'react-native';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';
import CheckBox from 'expo-checkbox';
import { Button } from 'react-native-ios-kit';

const Background = styled.View`
    flex: 1;
    background-color : 	#ADD8E6;
    justify-content: center;
`;

const styles = StyleSheet.create({
    container: {
        marginHorizontal:30,
        backgroundColor: "#eaeaea",
        marginTop: 40,
        borderRadius: 15,
      },

    image: {
      flex: 1,
      justifyContent: "center"
    },

    tinyLogo: {
        width: 190,
        height: 270,
        marginTop: 20,
        marginLeft:-17,
      },

      tinyLogo2: {
        width: 45,
        height: 40,
        marginTop: 230,
        marginLeft:57,
      },

      ballon: {
        width: 295,
        height: 260,
        marginTop: -90,
        marginLeft:35,
      },

      ballon1: {
        width: 295,
        height: 260,
        marginTop: -90,
        marginLeft:-10,
      },

      ballon2: {
        width: 155,
        height: 150,
        marginTop: -170,
        marginLeft:-5,
        
      },

    text: {
      color: "black",
      fontSize: 42,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "center",
    },

    textBallon: {
        textAlign: "center",
        padding:9,
        color: "black",
        fontSize: 19,
        lineHeight: 30,
        fontWeight: "bold",
        backgroundColor: "#eaeaea",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 140,
        marginRight: 10,
        marginTop:-150,
     
      },

    textBallon2: {
        textAlign: "center",
        padding:4,
        color: "black",
        fontSize: 17,
        lineHeight: 24,
        fontWeight: "bold",
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        marginHorizontal: 10,
      },

      textBallon3: {
        padding:10,
        color: "black",
        fontSize: 22,
        lineHeight: 30,
        fontWeight: "bold",
        backgroundColor: "#eaeaea",
        borderColor: "#DCDCDC",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
        marginVertical:20,
      },

    textBallon4: {
        textAlign: "center",
        padding:9,
        color: "white",
        fontSize: 16,
        lineHeight: 25,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop:120,
        marginRight:73,
      },

      textBallon5: {
        textAlign: "center",
        padding:9,
        color: "black",
        fontSize: 19,
        lineHeight: 25,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop:120,
        marginRight:73,
      },

    buttonContinuar: {
      padding: 40,
      marginRight: 10,
      marginHorizontal: 160,
      marginTop:340,
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
    },
    seta: {
        width: 115,
        height: 110,
        marginEnd:"-10%",
        marginLeft:"65%",
        
      },
    text: {
      color: "black",
      fontSize: 42,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "center",
    },
  });


    export function Tela1({navigation}) {
      return (
          <Background>
            <ImageBackground source={require("./tela1med.gif")}  style={styles.image} duration={3000} >
              <View>
                <Animatable.View
                style={styles.textBallon4}
                animation="fadeIn"
                useNativeDriver
                duration={3000}
                > 
              
              <Image
                            style={styles.ballon1}
                            source={require("./balao1.png") }
                        />
                </Animatable.View>
                </View>

                <View >
                    <TouchableOpacity style={{ height: 600}}
                      onPress={() => navigation.navigate("T2")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={260}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={30}>
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

    export function Tela2({navigation}) {
        
        const [isSelected, setSelection] = useState(false);
        const [isSelected2, setSelection2] = useState(false);
        const [isSelected3, setSelection3] = useState(false);
       
        function confere4() {
            
            if (!isSelected && isSelected2 && !isSelected3 ) {
                Alert.alert('Isso mesmo!');
                navigation.navigate("T3")
            }else {
                Alert.alert("Incorreto!","Tente novamente");
                }
            }
        return (
                    <ImageBackground source={require("./pernafosco.jpg") } resizeMode="cover" style={styles.image} >
                        <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require("./cir.png") }
                        />
                            <Text style={styles.textBallon} > A primeira informação é: </Text> 
                        
                        <View style={styles.container} marginTop={20}>
                             
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Idade</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected2}
                                    onValueChange={setSelection2}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Nome</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected3}
                                    onValueChange={setSelection3}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Nacionalidade</Text>
                            </View>
                        

                            <View style={styles.button} marginHorizontal={10} marginVertical={5} >
                            <Button inverted rounded
                                    mode="contained"
                                    onPress={() => confere4()}
                                > Conferir</Button>
                                </View>
                            </View>      
                        </View>
    
                  </ImageBackground>
      );
    }

    export function Tela3({navigation}) {
        return (
            <Background>
              <ImageBackground source={require("./tela3med.gif")}  style={styles.image} duration={3000} >
                <View marginTop={-35} marginLeft={40}>
                  <Animatable.View
                  style={styles.textBallon4}
                  animation="fadeIn"
                  useNativeDriver
                  duration={3000}
                  > 
                
                <Image
                            style={styles.ballon}
                            source={require("./balao2.png") }
                        />
                  </Animatable.View>
                  </View>

                <View marginTop={-50} marginLeft={100} marginRight={25}>
                    <Animatable.View
                    style={styles.textBallon4}
                    animation="fadeIn"
                    delay={4000}
                    useNativeDriver
                    duration={3000}
                    > 
                    <Image
                            style={styles.ballon2}
                            source={require("./balao3.png") }
                        />
                    </Animatable.View>
                </View>
 
                <View >
                    <TouchableOpacity style={{ height: 600}}
                      onPress={() => navigation.navigate("T4")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={220}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={30}>
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

      export function Tela4({navigation}) {
        
        const [isSelected, setSelection] = useState(false);
        const [isSelected2, setSelection2] = useState(false);
        const [isSelected3, setSelection3] = useState(false);

        function confere5() {
            
            if (!isSelected && !isSelected2 && isSelected3 ) {
                Alert.alert('Na mosca!');
                navigation.navigate("T5")
            }else {
                Alert.alert("Incorreto!","Tente novamente");
                }
            }
       
        return (
                    <ImageBackground source={require("./pernafosco.jpg") } resizeMode="cover" style={styles.image} >
                        <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require("./cir.png") }
                        />
                            <Text style={styles.textBallon}> A segunda informação é: </Text> 
                        
                        <View style={styles.container} marginTop={20}>
                             
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Data de nascimento</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected2}
                                    onValueChange={setSelection2}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Jejum</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected3}
                                    onValueChange={setSelection3}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Local da cirurgia</Text>
                            </View>
                            <View style={styles.button} marginHorizontal={10} marginVertical={5} >
                            <Button inverted rounded
                                    mode="contained"
                                    onPress={() => confere5()}
                                > Conferir</Button>
                                </View>
                        </View>
                        </View>
                  </ImageBackground>
      );
    }

    export function Tela5({navigation}) {
        return (
            <Background>
              <ImageBackground source={require("./tela3med.gif")}  style={styles.image} duration={3000} >
                <View marginTop={-35} marginLeft={40}>
                  <Animatable.View
                  style={styles.textBallon4}
                  animation="fadeIn"
                  useNativeDriver
                  duration={3000}
                  > 
                
                <Image
                            style={styles.ballon}
                            source={require("./balao4.png") }
                        />
                  </Animatable.View>
                  </View>

                <View marginTop={-50} marginLeft={100} marginRight={25}>
                    <Animatable.View
                    style={styles.textBallon4}
                    animation="fadeIn"
                    delay={4000}
                    useNativeDriver
                    duration={3000}
                    > 
                    <Image
                            style={styles.ballon2}
                            source={require("./balao5.png") }
                        />
                    </Animatable.View>
                </View>
 
                <View >
                    <TouchableOpacity style={{ height: 600}}
                      onPress={() => navigation.navigate("T6")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={220}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={30}>
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

      export function Tela6({navigation}) {
        
        const [isSelected, setSelection] = useState(false);
        const [isSelected2, setSelection2] = useState(false);
        const [isSelected3, setSelection3] = useState(false);
        
        function confere6() {
            
            if (!isSelected && isSelected2 && !isSelected3 ) {
                Alert.alert('Muito bem!');
                navigation.navigate("T7")
            }else {
                Alert.alert("Incorreto!","Tente novamente");
                }
            }

        return (
                    <ImageBackground source={require("./pernafosco.jpg") } resizeMode="cover" style={styles.image} >
                        <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require("./cir.png") }
                        />
                            <Text style={styles.textBallon}> A terceira informação é: </Text> 
                        
                        <View style={styles.container} marginTop={20}>
                             
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Histórico cardíaco</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected2}
                                    onValueChange={setSelection2}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Procedimento</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected3}
                                    onValueChange={setSelection3}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Confirmar eletrocardiograma</Text>
                            </View>
                            <View style={styles.button} marginHorizontal={10} marginVertical={5} >
                            <Button inverted rounded
                                    mode="contained"
                                    onPress={() => confere6()}
                                > Conferir</Button>
                                </View>
                        </View>

                            
                        </View>
    
                  </ImageBackground>
      );
    }

    export function Tela7({navigation}) {
        return (
            <Background>
              <ImageBackground source={require("./tela3med.gif")}  style={styles.image} duration={3000} >
                <View marginTop={-35} marginLeft={40}>
                  <Animatable.View
                  style={styles.textBallon4}
                  animation="fadeIn"
                  useNativeDriver
                  duration={3000}
                  > 
                
                <Image
                            style={styles.ballon}
                            source={require("./balao6.png") }
                        />
                  </Animatable.View>
                  </View>

                <View marginTop={-50} marginLeft={100} marginRight={25}>
                    <Animatable.View
                    style={styles.textBallon4}
                    animation="fadeIn"
                    delay={4000}
                    useNativeDriver
                    duration={3000}
                    > 
                    <Image
                            style={styles.ballon2}
                            source={require("./balao7.png") }
                        />
                    </Animatable.View>
                </View>
 
                <View >
                    <TouchableOpacity style={{ height: 600}}
                      onPress={() => navigation.navigate("T8")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={220}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={30}>
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

      export function Tela8({navigation}) {
        
        const [isSelected, setSelection] = useState(false);
        const [isSelected2, setSelection2] = useState(false);
        const [isSelected3, setSelection3] = useState(false);
        
        function confere7() {
            
            if (isSelected && !isSelected2 && !isSelected3 ) {
                Alert.alert('Correto!');
                navigation.navigate("T9")
            }else {
                Alert.alert("Incorreto!","Tente novamente");
                }
            }

        return (
            
                    <ImageBackground source={require("./pernafosco.jpg") } resizeMode="cover" style={styles.image} >
                        <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require("./cir.png") }
                        />
                            <Text style={styles.textBallon}> A quarta informação é: </Text> 
                        
                        <View style={styles.container} marginTop={20}>
                             
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Consentimento</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected2}
                                    onValueChange={setSelection2}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Autorização familiar</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected3}
                                    onValueChange={setSelection3}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Tipo sanguíneo</Text>
                            </View>
                            <View style={styles.button} marginHorizontal={10} marginVertical={5} >
                            <Button inverted rounded
                                    mode="contained"
                                    onPress={() => confere7()}
                                > Conferir</Button>
                                </View>
                            </View>
                            
                            
                        </View>
    
                  </ImageBackground>
      );
    }

    export function Tela9({navigation}) {
        return (
            <Background>
              <ImageBackground source={require("./tela3med.gif")}  style={styles.image} duration={3000} >
                <View marginTop={-35} marginLeft={40}>
                  <Animatable.View
                  style={styles.textBallon4}
                  animation="fadeIn"
                  useNativeDriver
                  duration={3000}
                  > 
                
                <Image
                            style={styles.ballon}
                            source={require("./balao8.png") }
                        />
                  </Animatable.View>
                  </View>

                <View marginTop={-50} marginLeft={100} marginRight={25}>
                    <Animatable.View
                    style={styles.textBallon4}
                    animation="fadeIn"
                    delay={4000}
                    useNativeDriver
                    duration={3000}
                    > 
                    <Image
                            style={styles.ballon2}
                            source={require("./balao9.png") }
                        />
                    </Animatable.View>
                </View>
                    
    
                <View >
                    <TouchableOpacity style={{ height: 600}}
                      onPress={() => navigation.navigate("T10")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={215}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={30}>
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

      export function Tela10({navigation}) {
        
        const [isSelected, setSelection] = useState(false);
        const [isSelected2, setSelection2] = useState(false);
        const [isSelected3, setSelection3] = useState(false);
        const [isSelected4, setSelection4] = useState(false);
        const [isSelected5, setSelection5] = useState(false);
       
        function confere8() {
            
            if (isSelected && !isSelected2 && isSelected3 && !isSelected4 && isSelected5 ) {
                Alert.alert('Isso mesmo!', 'Verifique se o paciente possui alguma alergia, além de verificar as vias aéreas, perda sanguínea e risco de broncoaspiração');
                navigation.navigate("T11")
            }else {
                Alert.alert("Incorreto!","Tente novamente");
                }
            }

        return (
                    <ImageBackground source={require("./pernafosco.jpg") } resizeMode="cover" style={styles.image} >
                        <View marginTop={-50}>
                        <Image
                            style={styles.tinyLogo}
                            source={require("./cir.png") }
                        />
                            <Text style={styles.textBallon} > Marque as 3 verificações que faltam na fase de entrada: </Text> 
                        
                        <View style={styles.container} marginTop={10} marginVertical={-20} >
                             
                            <View style={styles.checkboxContainer} >
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Alergias</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected2}
                                    onValueChange={setSelection2}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>História morbida familiar</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected3}
                                    onValueChange={setSelection3}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Vias aéreas</Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected4}
                                    onValueChange={setSelection4}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Condição e hábitos de vida</Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected5}
                                    onValueChange={setSelection5}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Perda sanguínea</Text>
                            </View>
                            <View style={styles.button} marginHorizontal={10} marginVertical={5} >
                            <Button inverted rounded
                                    mode="contained"
                                    onPress={() => confere8()}
                                > Conferir</Button>
                                </View>
                            </View>

                            
                        </View>
    
                  </ImageBackground>
      );
    }

    export function Tela11({navigation}) {

        function FuncaoAlertaSeguranca() {
            Alert.alert('Atenção', 'Não esqueça de verificar a segurança anestésica.');
        }

        return (
            <Background>
               <ImageBackground source={require("./marcarlocal.jpg") } resizeMode="cover" style={styles.image} >
                <View marginTop={10} marginLeft={10}>
                  <Animatable.Text 
                  style={styles.textBallon3}
                  animation="fadeIn"
                  useNativeDriver
                  duration={3000}
                  > 
                
                    Agora clique no local do procedimento confirmado pelo paciente para marcá-lo.
                  </Animatable.Text>
                  </View>

                    <Animatable.View animation="fadeIn" useNativeDriver duration={1000} delay={7000} marginTop={128} marginLeft={120}>
                            <Text style={styles.textBallon5} >\</Text>
                        </Animatable.View>

                    <Animatable.View animation="fadeIn" useNativeDriver duration={1000} delay={7000} marginTop={-163} marginLeft={120}>
                    <Text style={styles.textBallon5} >/</Text>
                    </Animatable.View>
                    
                    
                    <View marginTop={-40} marginRight={110} marginLeft={200}>
                    <TouchableOpacity style={{ height: 30}}
                        onPress={() => setTimeout(FuncaoAlertaSeguranca, 2500)}
                    >   
                      </TouchableOpacity>
                    </View> 

                  <View style={styles.buttonContinuar} marginTop={130}>
                      <Button inverted rounded
                          mode="contained"
                          onPress={() => navigation.navigate("T12")}
                        >Continuar</Button>
                  </View>
                        
                        </ImageBackground>
            </Background>
        );
      }

      export function Tela12({navigation}) {
        return (
            <Background>
               <ImageBackground source={require("./oxi.jpg") } resizeMode="cover" style={styles.image} >
                <View marginTop={5} marginLeft={10}>
                  <Animatable.Text 
                  style={styles.textBallon3}
                  animation="fadeIn"
                  useNativeDriver
                  duration={3000}
                  > 
                
                    Por fim, clique na mão da paciente para colocar o oxímetro.
                  </Animatable.Text>
                  </View>

                    <Animatable.View animation="fadeIn" useNativeDriver duration={1000} delay={5000} marginTop={115} marginLeft={120}>
                        <Image
                            style={styles.tinyLogo2}
                            source={require("./oximetro.png") }
                        />
                        </Animatable.View>

                    <View marginTop={-40} marginRight={170} marginLeft={150}>
                    <TouchableOpacity style={{ height: 30}}
                        
                    >   
                      </TouchableOpacity>
                    </View> 
                        
                  <View style={styles.buttonContinuar} marginTop={60}>
                      <Button inverted rounded
                          
                          mode="contained"
                          onPress={() => navigation.navigate("Tcir1")}
                        >Ir para a cirurgia</Button>
                  </View>
                        
                </ImageBackground>
            </Background>
        );
      }


     

     