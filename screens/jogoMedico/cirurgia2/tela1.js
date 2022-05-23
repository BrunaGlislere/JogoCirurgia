import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Alert} from 'react-native';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';
import CheckBox from 'expo-checkbox';
import { Button } from 'react-native-ios-kit';
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Background = styled.View`
    flex: 1;
    background-color : 	white;
    justify-content: center;
`;

const styles = StyleSheet.create({
    container: {
        marginHorizontal:30,
        backgroundColor: "#eaeaea",
        marginTop: 40,
        borderRadius: 15,
      },
      
      ballon: {
        width: 305,
        height: 260,
        marginTop: -120,
        marginLeft:-40,
      },
      seta: {
        width: 115,
        height: 110,
        marginEnd:"0%",
        marginLeft:"70%",
        marginTop: 170,
      },
    

      ballon2: {
        width: 155,
        height: 150,
        marginTop: -170,
        marginLeft:-5,
        
      },

    image: {
      flex: 1,
      justifyContent: "center"
    },

    tinyLogo: {
        width: 150,
        height: 190,
        marginTop: 80,
        marginLeft:0,
      },

      tinyLogo2: {
        width: 40,
        height: 40,
        marginTop: 30,
        marginLeft:30,
      },

      tinyLogo3: {
        width: 20,
        height: 18,
        marginTop: -5,
        
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
        fontSize: 19,
        lineHeight: 24,
        fontWeight: "bold",
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        marginTop:25,
        marginHorizontal: 10,
      },

      textBallon3: {
        padding:8,
        color: "black",
        fontSize: 22,
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
        fontSize: 19,
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
        paddingLeft: 20,
        flexDirection: "row",
        fontWeight: "bold",
        marginVertical:15,
        marginRight:15,
    },
    checkbox: {
        alignSelf: "center",
        
    },

    label: {
        margin: 10,
    },

    image: {
      flex: 1,
      
    },

    text: {
      color: "black",
      fontSize: 42,
      lineHeight: 65,
      fontWeight: "bold",
      textAlign: "center",
    },
  });



    export function Telacir1({navigation}) {
      return (
          <Background>
            <ImageBackground source={require("./salacirurgia2.jpg")}  style={styles.image} duration={3000} >
              <View>
                <Animatable.Text 
                style={styles.textBallon3}
                animation="fadeIn"
                useNativeDriver
                duration={3000}
                > 
                No preparo, o primeiro passo é confirmar todos os membros da equipe, apresentando-os por nome e função.
                </Animatable.Text>
                <Text> Clique em cada profissional </Text>
                </View>
                  
                
                <TouchableOpacity style={{ marginTop:60, marginRight:285, marginLeft:30,  height: 370} }
                    onPress={() => Alert.alert('', 'Meu nome é Beatriz, e eu sou a cirurgiã principal')  }  
                >  
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop:-360, marginRight:190, marginLeft:115,  height: 150}}
                    onPress={() => Alert.alert('','Meu nome é Lidia, sou a instrumentadora.')  }  
                >  
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop:-140, marginRight:110, marginLeft:200,  height: 130} } 
                    onPress={() => Alert.alert('','Eu sou João, o anestesista.')  }  
                >  
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop:-110, marginRight:30, marginLeft:285,  height: 360}}
                    onPress={() => Alert.alert('','Me chamo Guilherme, serei o enfermeiro.')  }  
                >  
                </TouchableOpacity>
                
                
                <View style={styles.buttonContinuar} marginTop={-70}>
                    <Button inverted rounded
                        
                        mode="contained"
                        onPress={() => navigation.navigate("Tcir2")}
                        >Continuar</Button>
                </View>
                      
                      </ImageBackground>
                      
          </Background>
          
      );
    }

    export function Telacir2({navigation}) {
        
        const [isSelected, setSelection] = useState(false);
        const [isSelected2, setSelection2] = useState(false);
        const [isSelected3, setSelection3] = useState(false);

        function confere9() {
            
            if (isSelected && !isSelected2 && !isSelected3) {
                Alert.alert('Correto!');
                navigation.navigate("Tcir3")
            }else {
                Alert.alert("Incorreto!","Tente novamente");
                }
            }
        return (
            <Background backgroundColor={"white"}>
                    <ImageBackground source={require("./salacirurgia2.jpg") } resizeMode="cover" style={styles.image}  marginTop={-150} marginVertical={120} >
                        <View marginTop={10} >
                        
                            <Text style={styles.textBallon3}> Marque a frase correta: </Text> 
                        
                        <View style={styles.container} marginTop={200} marginRight={30}>
                             
                            <View style={styles.checkboxContainer} >
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Precisa-se da confirmação verbal da cirurgiã, do anestesista, do enfermeiro do paciente e do local do procedimento.</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected2}
                                    onValueChange={setSelection2}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Precisa-se da confirmação verbal da mãe e do pai do paciente, da cirurgiã e o local da cirurgia.</Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected3}
                                    onValueChange={setSelection3}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Precisa-se apenas uma confirmação por escrito dos responsáveis pela cirurgia.</Text>
                            </View>
                        

                            <View style={styles.button} marginTop={5} marginHorizontal={30} marginVertical={10} >
                                <Button inverted rounded
                                    mode="contained"
                                   
                                    onPress={() => confere9()}
                                >Conferir</Button>
                            </View>
                            </View>
                        </View>
    
                  </ImageBackground>
                  </Background>
      );
    }

    export function Telacir3({navigation}) {

        
        
        const [isSelected, setSelection] = useState(false);
        const [isSelected2, setSelection2] = useState(false);
        const [isSelected3, setSelection3] = useState(false);
        const [isSelected4, setSelection4] = useState(false);
        const [isSelected5, setSelection5] = useState(false);
        const [isSelected6, setSelection6] = useState(false);
        const [isSelected7, setSelection7] = useState(false);
        const [isSelected8, setSelection8] = useState(false);
       
        function confere10() {
            
            if (isSelected && isSelected2 && !isSelected3 && isSelected4 && isSelected5 && !isSelected6 && isSelected7 && !isSelected8) {
                
                navigation.navigate("Tcir4")
            }else {
                Alert.alert("Incorreto!","Tente novamente");
                }
            }

          

        return (
                    <ImageBackground source={require("./desfoc1.jpg") } marginTop= {10} resizeMode="cover" style={styles.image} >
                        <View marginTop={-50}>
                        <Image
                            style={styles.tinyLogo}
                            source={require("./anest.png") }
                        />
                        
                            <Text style={styles.textBallon}> Marque 5 coisas que precisamos revisar na preparação para a cirurgia </Text> 
                        
                        <View style={styles.container} marginTop={20} marginHorizontal={10} >
                             
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    
                                    style={styles.checkbox}
                                    
                                />
                                <Text style={styles.label}>Etapas {isSelected ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                                
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected2}
                                    onValueChange={setSelection2}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Anestesia {isSelected2 ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                                
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected3}
                                    onValueChange={setSelection3}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Hemograma {isSelected3 ? "👎" : ""}</Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected4}
                                    onValueChange={setSelection4}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Esterilização {isSelected4 ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                            </View>
                        <View marginTop={-275} marginLeft={180}>
                            <View style={styles.checkboxContainer} >
                                <CheckBox
                                    value={isSelected5}
                                    onValueChange={setSelection5}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Equipamentos {isSelected5 ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                            </View>

                            <View style={styles.checkboxContainer} >
                                <CheckBox
                                    value={isSelected6}
                                    onValueChange={setSelection6}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Raio-x {isSelected6 ? "👎" : ""}</Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected7}
                                    onValueChange={setSelection7}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Profilaxia {isSelected7 ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected8}
                                    onValueChange={setSelection8}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Consentimento {isSelected8 ? "👎" : ""}</Text>
                            </View>
                            </View>

                            <View style={styles.button} marginTop={5} marginHorizontal={30} marginVertical={10} >
                                <Button inverted rounded
                                    mode="contained"
                                    
                                    onPress={() => confere10()}
                                >Continuar</Button>
                            </View>
                            </View>
                        </View>
    
                  </ImageBackground>
      );
    }

    export function Telacir4({navigation}) {


        return (
            <Background>
               <ImageBackground  source={require("./desfoc1.jpg") }  marginTop= {-230} marginVertical={-200} style={styles.image} >
               <Text style={styles.textBallon3} > Clique nas respostas verificadas para conferir mais detalhes </Text> 
               <View marginTop={-10}>
                        <Image
                            style={styles.tinyLogo2}
                            source={require("./icverif.png") }
                        />

                        <Image
                            style={styles.tinyLogo2}
                            source={require("./icverif.png") }
                        />

                        <Image
                            style={styles.tinyLogo2}
                            source={require("./icverif.png") }
                        />

                        <Image
                            style={styles.tinyLogo2}
                            source={require("./icverif.png") }
                        />

                        <Image
                            style={styles.tinyLogo2}
                            source={require("./icverif.png") }
                        />  
                </View>
                <View marginTop={-330} marginLeft={60} >
                    <Text style={styles.textBallon2} > Etapas </Text> 
                    </View>
                <View marginTop={5} marginLeft={60} >
                   
                    <Text style={styles.textBallon2} > Anestesia </Text> 
                    </View>
                <View marginTop={10} marginLeft={60} > 
                    <Text style={styles.textBallon2}> Esterilização </Text> 
                    </View>
                <View marginTop={10} marginLeft={60} >
                    <Text style={styles.textBallon2}> Equipamentos </Text> 
                    </View>
                <View marginTop={5} marginLeft={60} >
                   
                    <Text style={styles.textBallon2}> Profilaxia </Text> 
                </View>
                  
                <TouchableOpacity style={{ marginTop:-310, marginRight:10, marginLeft:40,  height: 36}}
                    onPress={() => Alert.alert('', 'Revise com toda equipe as etapas críticas que ocorrerão durante o procedimento')  }  
                >  
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop:30, marginRight:10, marginLeft:40,  height: 36}}
                    onPress={() => Alert.alert('', 'Lembre de revisar com o anestesiologista as possíveis complicações anestésicas do caso')  }  
                >  
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop:35, marginRight:10, marginLeft:40,  height: 36}}
                    onPress={() => Alert.alert('', 'Importante rever a esterilização e se certificar foi feita a antissepsia no paciente, assim como as mãos de toda a equipe cirúrgica; e que os campos e materiais estão estéreis e que ninguém os contaminou')  }  
                >  
                </TouchableOpacity>
                    
                <TouchableOpacity style={{ marginTop:36, marginRight:10, marginLeft:40,  height: 36}}
                    onPress={() => Alert.alert('', 'É imprescindível a revisão os equipamentos, se tem-se todos os necessários para operação. O ideal é que a confirmação dos materiais seja feita antes de o paciente estar na sala')  }  
                >  
                </TouchableOpacity>
                   
                <TouchableOpacity style={{ marginTop:30, marginRight:10, marginLeft:40,  height: 36}}
                    onPress={() => Alert.alert('', 'É de extrema importância fazer a revisão de profilaxia antimicrobiana que deve ter sido realizada nos últimos 60 minutos')  }  
                >  
                </TouchableOpacity>

                <View marginTop={100}>
                    <TouchableOpacity style={{ height: 540}}
                      onPress={() => navigation.navigate("Tcir5")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={-150}
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
            </Background>
        );
      }

      export function Telacir5({navigation}) {
        
        return (
            <Background>
               <ImageBackground source={require("./anestexplica.jpg") } resizeMode="cover" style={styles.image} >
               <View marginTop={-35} marginLeft={40}>
                  <Animatable.View
                  style={styles.textBallon4}
                  animation="fadeIn"
                  useNativeDriver
                  duration={3000}
                  > 
                
                <Image
                            style={styles.ballon}
                            source={require("./balao10.png") }
                        />
                  </Animatable.View>
                  </View>
                         
                  <View>
                    <TouchableOpacity style={{ height: 540}}
                      onPress={() => navigation.navigate("Tcir7")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={170}
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
            </Background>
        );
      }


     
      export function Telacir7({navigation}) {

        var primeiro = false;
        var segundo = false;
        var terceiro = false;
        var quarto = false;
        var quinto = false;
        var sexto = false;
        var setimo = false;
        var [isSelected, setSelection] = useState(false);
        var [isSelected2, setSelection2] = useState(false);
        var [isSelected3, setSelection3] = useState(false);
        var [isSelected4, setSelection4] = useState(false);
        var [isSelected5, setSelection5] = useState(false);
        var [isSelected6, setSelection6] = useState(false);
        var [isSelected7, setSelection7] = useState(false);
        
        function confere11() {
            
            if (primeiro) {
                Alert.alert("ok");
                isSelected==true;
              
            }else {
                Alert.alert("Incorreto!","Tente novamente");
                }
            }

            function confere12() {
               primeiro= true;
            }

            function confere13() {
                primeiro= true;
             }

             function confere14() {
                primeiro= true;
             }

             function confere15() {
                primeiro= true;
             }

             function confere16() {
                primeiro= true;
             }

             function confere17() {
                primeiro= true;
             }

             function confere18() {
                primeiro= true;
             }
            

        return (
            <Background >
               <ImageBackground source={require("./abdome.png") }  style={styles.image} >
                <View marginTop={5} marginLeft={10}>
                  <Animatable.Text 
                  style={styles.textBallon2}
                  animation="fadeIn"
                  useNativeDriver
                  
                  duration={3000}
                  > 
                
                No caso dessa cirurgia, foram usadas 20 compressas e 5 pinças, mas voltaram apenas 15 compressas e 3 pinças. Ache, clique nos materiais faltantes e depois retire os materiais:
                  </Animatable.Text>
                  </View>
                    
                  <View style={styles.buttonContinuar} marginRight={80} marginLeft={80} marginTop={430}>
                      <Button inverted rounded
                          //onPress={() => navigation.navigate("ResumoMed")}  
                          onPress={() => navigation.navigate("Tcir8")}
                          mode="contained"
                          >Retirar os materiais</Button>
                  </View>

                  <TouchableOpacity style={{ marginTop:-490, marginRight:250, marginLeft:40,  height: 50, backgroundColor:"red"}}
                    onPress ={ () => confere12()  } 
                ></TouchableOpacity>  

                <TouchableOpacity style={{ marginTop:-70, marginRight:5, marginLeft:310,  height: 50}}
                   // onPress={() => Alert.alert('', 'Importante rever a esterilização e se certificar foi feita a antissepsia no paciente, assim como as mãos de toda a equipe cirúrgica; e que os campos e materiais estão estéreis e que ninguém os contaminou')  } 
                ></TouchableOpacity>  

                <TouchableOpacity style={{ marginTop:40, marginRight:170, marginLeft:160,  height: 50}}
                   // onPress={() => Alert.alert('', '')  } 
                ></TouchableOpacity> 

                <TouchableOpacity style={{ marginTop:20, marginRight:230, marginLeft:120,  height: 50}}
                   // onPress={() => Alert.alert('', '')  } 
                ></TouchableOpacity> 

                <TouchableOpacity style={{ marginTop:-50, marginRight:150, marginLeft:200,  height: 50}}
                   // onPress={() => Alert.alert('', '')  } 
                ></TouchableOpacity> 

                <TouchableOpacity style={{ marginTop:95, marginRight:240, marginLeft:110,  height: 50}}
                   // onPress={() => Alert.alert('', '')  } 
                ></TouchableOpacity> 

                <TouchableOpacity style={{ marginTop:50, marginRight:340,  height: 50}}
                   // onPress={() => Alert.alert('', '')  } 
                ></TouchableOpacity> 

                  <View style={styles.checkboxContainer} marginTop={0}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    
                                    style={styles.checkbox}
                                    
                                />
                                <Text style={styles.label}>{isSelected ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                                
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected2}
                                    onValueChange={setSelection2}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}> {isSelected2 ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                                
                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected3}
                                    onValueChange={setSelection3}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}> {isSelected3 ? "👎" : ""}</Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected4}
                                    onValueChange={setSelection4}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}> {isSelected4 ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                            </View>
                        <View marginTop={-275} marginLeft={180}>
                            <View style={styles.checkboxContainer} >
                                <CheckBox
                                    value={isSelected5}
                                    onValueChange={setSelection5}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}> {isSelected5 ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                            </View>

                            <View style={styles.checkboxContainer} >
                                <CheckBox
                                    value={isSelected6}
                                    onValueChange={setSelection6}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}> {isSelected6 ? "👎" : ""}</Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected7}
                                    onValueChange={setSelection7}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}> {isSelected7 ? 
                                (<Image 
                                    style={styles.tinyLogo3} 
                                    source={require("./icverif.png") }/>) : ""} </Text>
                            </View>
                            </View>


                        
                </ImageBackground>
            </Background>

            
        );
      }

      export function Telacir8({navigation}) {
        
        return (
            <Background>
               
               <View marginTop={-35} marginLeft={40}>
                  <Animatable.View
                  style={styles.textBallon4}
                  animation="fadeIn"
                  useNativeDriver
                  duration={3000}
                  > 
                
                <Text style={styles.textBallon3} >*Animação dos materias sendo retirados*</Text>
                  </Animatable.View>
                  </View>
                         
                  <View>
                    <TouchableOpacity style={{ height: 540}}
                      onPress={() => navigation.navigate("ResumoMed")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={170}
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
                        
                
            </Background>
        );
      }
