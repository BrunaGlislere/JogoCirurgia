import React, { Component, useState } from "react";
import { StyleSheet, Text, View , Alert,  ImageBackground,  TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CheckBox from 'expo-checkbox';
import Video from 'react-native-video';
import { Button } from 'react-native-ios-kit';

const styles = StyleSheet.create({

    container: {
        marginHorizontal:30,
        backgroundColor: "#eaeaea",
        marginTop: 40,
        borderRadius: 15,
      },

      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },

    checkboxContainer: {
        paddingLeft: 50,
        flexDirection: "row",
        
        marginVertical:20,
    },
    checkbox: {
        alignSelf: "center",
        
    },
    
    label: {
        margin: 8,
    },

    image: {
      flex:1,
      
      justifyContent: "center",
      
    },

    seta: {
        width: 115,
        height: 110,
        marginEnd:"0%",
        marginLeft:"70%",
        marginTop: 170,
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
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "bold",
        backgroundColor: "#eaeaea",
        borderColor: "#5F9EA0",
        borderWidth: 2,
        borderRadius: 30,
        marginLeft: 150,
        marginRight:5,
        
      },

      tinyLogo: {
        width: 260,
        height: 350,
        marginTop: 30,
        marginHorizontal:72,
      },

      tinyLogo2: {
        width: 90,
        height: 50,
        marginTop: -10,
        marginHorizontal:52,
      },

      tinyLogo3: {
        width: 50,
        height: 50,
        marginTop: -10,
        marginHorizontal:62,
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
        padding:7,
        color: "black",
        fontSize: 20,
        lineHeight: 26,
        
        
        backgroundColor: "#eaeaea",
        borderColor: "#778899",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
        marginVertical:10,
        
      },

      textBallon4: {
        textAlign: "center",
        padding:9,
        color: "black",
        fontSize: 19,
        lineHeight: 30,
        fontWeight: "bold",
        marginLeft: 150,
        marginTop:60,
      },

      ballon1: {
        width: 355,
        height: 285,
        marginTop:250,
        marginLeft:80,
      },

      ballon2: {
        width: 400,
        height: 330,
        marginTop: -20,
        marginLeft:-30,
      },

      ballon3: {
        width: 300,
        height: 220,
        marginTop: -50,
        marginLeft:30,
      },

      ballon4: {
        width: 260,
        height: 320,
        marginTop: -140,
        marginLeft:-25,
      },

      textBallon5: {
        padding:16,
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

      textBallon6: {
        padding:8,
        color: "white",
        fontSize: 20,
        lineHeight:30,
        fontWeight: "normal",
        backgroundColor: "#4682B4",
        borderColor: "#5F9EA0",
        borderWidth: 2,
        borderRadius: 30,
        textAlign: "center",
        marginHorizontal: 10,
      },
  });

  export function Selecionar2({navigation}) {
        
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);

    function confere2() {
        if (!isSelected && isSelected2 && !isSelected3) {
            navigation.navigate("Q3");   
        }else {
            Alert.alert("Incorreto!","Tente novamente");
        } 
        
    }
    
    return (
        <View width={"100%"} height={"100%"} flexDirection={"row"}>
                <ImageBackground source={require("./pernafosco.jpg") } resizeMode="cover" style={styles.image} >
                    <View marginTop={-80}>
                        <Text style={styles.textBallon3}> Você terá que assinar o Termo de Consentimento Informado. Esse documento garantirá a 
                                                            ____ e o _____ do paciente </Text> 
                    
                    <View style={styles.container}>
                         
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Responsabilidade - Dever</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={isSelected2}
                                onValueChange={setSelection2}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Autonomia - Consentimento</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={isSelected3}
                                onValueChange={setSelection3}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Regras - Cargo</Text>
                        </View>
                        
                        
                        
                        <View marginVertical={20} marginTop={-10}>
                                <Button style={styles.button} inverted rounded inline centered
                                mode="contained"
                                onPress={() => confere2() }>
                                Conferir
                                </Button>
                            </View>
                            </View>
                        
                    </View>

              </ImageBackground>
            </View>
  );
}

export function Quarto3({navigation}) {
    
    return (
        <View width={"100%"} height={"100%"}  >
                <ImageBackground source={require("./medicaponta.gif") } marginTop={-10} marginRight={-25} resizeMode="cover" style={styles.image} >
                <Image
                            style={styles.ballon1}
                            source={require("./balao4pac.png") }// acertou na mosca
                        />

                <View style={styles.buttonContinuar} marginLeft={190} marginTop={-20} >
                   <Button  inverted rounded centered
                                mode="contained"
                                onPress={() => navigation.navigate("SB") }>
                                Saiba mais
                                </Button>
                    </View>
                <TouchableOpacity style={{ height: 530, marginTop:5}}
                      onPress={() => navigation.navigate("Q4")}
                  >
                <Animatable.View
                marginLeft={"10%"}
                animation="fadeIn"
                useNativeDriver
                duration={3000}
                > 
                  

                  <Image
                              style={styles.seta}
                              source={require("./seta.png") }
                          />
                          
                  
                </Animatable.View>
                </TouchableOpacity>
       
              </ImageBackground>
              </View>
  );
}

export function SaibaMais({navigation}){
    return (
        <View width={"100%"} height={"100%"}  >
            <ImageBackground source={require("./recep2.jpg") } resizeMode="cover" style={styles.image}>
    
        <View style={styles.textBallon3} borderWidth={0}>
        <Text style={styles.textBallon3} > O que é autonomia? </Text> 
            <Text style={{fontSize:20}}>É o direito ao livre arbítrio que faz com que a pessoa esteja apta para tomar suas próprias decisões</Text>
        </View>
        
        
        <View style={styles.textBallon3} borderWidth={0}>
        <Text style={styles.textBallon3}> Qual o conteúdo do TCI? </Text> 
        <Text style={{fontSize:20}}> Os profissionais do hospital tem o dever de informar a respeito da gravidade de seu caso de maneira clara; eles não podem efetuar nada sem ter sua autorização. É proibido o médico deixar de informar ao paciente o diagnóstico, prognóstico, riscos e objetivos do tratamento; ao menos que essa comunicação direta possa lhe causar dano, nesse caso a comunicação é feita com seu representante legal</Text>          
        </View>

        <View style={styles.buttonContinuar} marginTop={-10}>
                   <Button  inverted rounded  centered
                                mode="contained"
                                onPress={() => navigation.navigate("Q4") }>
                                Continuar
                                </Button>
                    </View>
            
      </ImageBackground>
      </View>
    );
}

export function Quarto4({navigation}) {
    
    return (
                <ImageBackground source={require("./anestesia1.gif") } resizeMode="cover" style={styles.image}>
                    <Animatable.View
                    animation="fadeIn"
                    useNativeDriver
                    duration={3000}
                    > 
                  <Image
                            style={styles.ballon2}
                            source={require("./balao5pac.png") }
                        />
                </Animatable.View>
                    
                   <View style={styles.buttonContinuar2} marginTop={280} marginLeft={170} marginRight={-10}>
                        <Button inverted rounded
                            
                            mode="contained"  
                            onPress={() => navigation.navigate("Q5")}> Falar com o médico</Button>
                        
                    </View>
              </ImageBackground>
  );
}

export function Quarto5({navigation}) {
    
    return (
        
                <ImageBackground source={require("./anestesia2.gif") } resizeMode="cover" style={styles.image}>
                    <Animatable.View
                    animation="fadeIn"
                    useNativeDriver
                    duration={3000}
                    > 
                  <Image
                            style={styles.ballon3}
                            source={require("./balao6pac.png") }
                        />
                    </Animatable.View>
                        
                        <View style={styles.button} marginLeft={-10} marginTop={350}>
                           <Button inverted rounded
                            
                            mode="contained" 
                            onPress={() => navigation.navigate("Q5.1")}>Sim</Button>
                    </View>
                    <View style={styles.button} marginLeft={210} marginTop={-61}>
                        <Button inverted rounded
                            
                            mode="contained" 
                            onPress={() => navigation.navigate("Q5.2")}>Não</Button>
                    </View>
                    
              </ImageBackground>
  );
}

export function Quarto51({navigation}) {
    
    return (
                <ImageBackground source={require("./anestesia2.gif") } resizeMode="cover" style={styles.image}>
                    <View marginLeft={-90} marginTop={-50}>
                    <Image
                            style={styles.ballon1}
                            source={require("./balao7pac.png") }
                        />  
                        
                   
                    
                    <TouchableOpacity style={{ height: 530, marginTop:165}}
                      onPress={() => navigation.navigate("Q6")}
                  >
                <Animatable.View
                marginLeft={"10%"}
                animation="fadeIn"
                useNativeDriver
                duration={3000}
                > 
                  

                  <Image
                              style={styles.seta}
                              source={require("./seta.png") }
                          />
                          
                  
                </Animatable.View>
                </TouchableOpacity>
                </View>
              </ImageBackground>
  );
}

export function Quarto52({navigation}) {
    
    return (
                <ImageBackground source={require("./anestesia2.gif") } resizeMode="cover" style={styles.image}>
                    <View marginLeft={-90} marginTop={-50}>
                    <Image
                            style={styles.ballon1}
                            
                            source={require("./balao8pac.png") }
                        /> 
                        </View>
                        <View>
                        <TouchableOpacity style={{ height: 530, marginTop:185}}
                      onPress={() => navigation.navigate("Q6")}
                  >
                <Animatable.View
                marginLeft={"10%"}
                animation="fadeIn"
                useNativeDriver
                duration={3000}
                > 
                  

                  <Image
                              style={styles.seta}
                              source={require("./seta.png") }
                          />
                          
                  
                </Animatable.View>
                </TouchableOpacity>
                </View>
                   

              </ImageBackground>
  );
}

export function Quarto6({navigation}) {
    
    return (
        
                <ImageBackground source={require("./fezjejum.gif") } resizeMode="cover" style={styles.image}>

                <View marginTop={25} marginLeft={-15}>
                    <Image
                            style={styles.ballon3}
                            source={require("./balao9pac.png") }
                        /> 
                        
                        </View>

                   <View style={styles.button} marginTop={350} marginRight={200}>
                        <Button inverted rounded
                            
                            mode="contained"  
                            onPress={() =>navigation.navigate("Q7")}> Sim</Button>
                        
                    </View>

                    <View style={styles.button} marginTop={-60} marginLeft={200}>
                        <Button inverted rounded
                            
                            mode="contained"  
                            onPress={() =>navigation.navigate("Q8")}> Não</Button>
                        
                    </View>
              </ImageBackground>
  );
}



export function Quarto7({navigation}) {

    function Jejum(){
        Alert.alert('', 'Se o estômago estiver cheio durante a anestesia na cirurgia, o conteúdo dele pode acabar indo para os pulmões (chamado broncoaspiração); podendo causar danos à esse órgão. Quando estamos em estado normal, sem anestesia, nosso corpo tem mecanismos para evitar que isso aconteça');
        navigation.navigate("Q9")
    }
    
    return (
        
                <ImageBackground source={require("./anestesia1.gif") } resizeMode="cover" style={styles.image}>

                    <View  marginTop={-40}>
                    <Image
                            style={styles.ballon2}
                            source={require("./balao10pac.png") }
                        /> 
                    </View>

                    <View style={styles.button} marginTop={310} marginLeft={200} marginRight={5}>
                        <Button inverted rounded
                            
                            mode="contained"  
                            onPress={() => Jejum()}>Por que fazer jejum? </Button>
                        
                    </View>

                    
                   
              </ImageBackground>
  );
}


export function Quarto8({navigation}) {
    
    return (
        
                <ImageBackground source={require("./gameover.jpg") } resizeMode="cover" style={styles.image}>
                    
                    <View marginTop={-15}>
                        <Text style={styles.textBallon3}> Sua cirurgia foi cancelada.  </Text>
                        
                    </View>
                    <View style={styles.button} marginTop={28} marginRight={90} >
                        <Button inverted rounded
                                
                                mode="contained"
                                onPress={() => Alert.alert("","Com o estômago cheio durante a anestesia na cirurgia, o conteúdo dele pode acabar indo para os pulmões (chamado broncoaspiração); podendo causar danos à esse órgão. Quando estamos em estado normal, sem anestesia, nosso corpo tem mecanismos para evitar que isso aconteça.")}  
                            > Entenda o porquê</Button>
                    </View>
                    <View>
                        <Image
                                style={styles.tinyLogo}
                                source={require("./iconego.png") }
                            />
                    </View>
                    

                    <View style={styles.button} marginTop={80} marginRight={0} marginLeft={190}>
                        <Button inverted rounded
                            title="Voltar ao início"
                            mode="contained"
                            onPress={() =>navigation.navigate("Q1p1")}  
                        > Voltar ao início</Button>
                    </View>
              </ImageBackground>
  );
}

export function Quarto9({navigation}) {

    function Sim(){
        Alert.alert( 'Incorreto!', 'Isso é feito no centro cirúrgico alguns minutos antes da cirurgia com uma máquina depilatória para diminuir as chances de infecção');
        navigation.navigate("Q10")
    }

    function Nao(){
        Alert.alert( 'Correto!', 'Isso é feito no centro cirúrgico alguns minutos antes da cirurgia com uma máquina depilatória para diminuir as chances de infecção');
        navigation.navigate("Q10")
    }
    
    return (
        
                <ImageBackground source={require("./pelos.gif") } resizeMode="cover" style={styles.image}>

                    <Animatable.View animation="fadeIn" useNativeDriver duration={4000} marginTop={-85} >
                    
                    <View marginTop={-200} marginLeft={-20}>
                    <Image
                            style={styles.ballon1}
                            source={require("./balao11pac.png") }
                        />
                        
                    </View>
                    
                    </Animatable.View>
                    
                    <View style={styles.button} marginTop={350} marginRight={200}>
                        <Button inverted rounded
                            mode="contained"  
                            onPress={() => Sim()}
                        > Sim</Button>
                    </View>

                    <View style={styles.button} marginTop={-61} marginLeft={200}>
                        <Button inverted rounded
                            mode="contained"  
                            onPress={() => Nao()}
                        > Não</Button>
                    </View>

                   
              </ImageBackground>
  );
}

export function Quarto10({navigation}) {
    
    return (
        
                <ImageBackground source={require("./sabonete.gif") } marginLeft={-100} marginTop={-20} resizeMode="cover" style={styles.image}>

                <View marginTop={250} marginLeft={-10}>
                    <Image
                            style={styles.ballon1}
                            source={require("./balao15pac.png") }
                        />
                        
                    </View> 
                    

                <View marginTop={80}>
                    <TouchableOpacity style={{ height: 700}}
                      onPress={() => navigation.navigate("Q11")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                            <Image
                                        style={styles.seta}
                                        source={require("./seta.png") }
                                    />    
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
              </ImageBackground>
  );
}

export function Quarto11({navigation}) {   
    return (
                <ImageBackground source={require("./cliqueMedica.gif") } resizeMode="cover" style={styles.image}>
                    <View marginTop={-350} marginLeft={-115}>
                        <Image
                                style={styles.ballon1}
                                source={require("./balao12pac.png") }
                            /> 
                    </View>  
                        
                        
                    
                    <Animatable.View animation="fadeIn" useNativeDriver duration={4000} marginLeft={160} marginTop={320} >
                    <Text padding={2}>  *Clique na médica para confirmar </Text>        
                    </Animatable.View>

                    <View  marginLeft={250} marginRight={20} marginTop={-540}>
                    
                    <TouchableOpacity style={{ height: 450}}
                        onPress={() => navigation.navigate("Q12")}
                    >
                                
                            
                        </TouchableOpacity>
                </View>
            
              </ImageBackground>
  );
}

export function Quarto12({navigation}) {   
    
    return (
                <ImageBackground source={require("./medexplica.gif") } resizeMode="cover" style={styles.image}>
                <Animatable.View animation="fadeIn" useNativeDriver duration={4000} >
                    <View marginTop={-150} marginLeft={-110}>
                        <Image 
                            style={styles.ballon1}
                            source={require("./balao13pac.png") }/>
                    </View> 

                    
                </Animatable.View>

                <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={5500} >
                    <View marginTop={100}  marginRight={170} padding={25}>
                    <Image 
                            style={styles.ballon4}
                            source={require("./balao14pac.png") }/>
                    </View> 
                </Animatable.View>

              

                <View >
                    <TouchableOpacity style={{ height: 200}}
                      onPress={() => navigation.navigate("Q13")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={-200}
                        animation="fadeIn"
                        useNativeDriver
                        duration={3000}
                        > 
                        <View marginTop={0}>
                            <Image
                                            style={styles.seta}
                                            source={require("./seta2.png") }
                                        /> 
                        </View>
                               
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            
              </ImageBackground>
  );
}

export function Quarto13({navigation}) {   
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    
    function confereQ13() {
            
        if (isSelected && isSelected2 && isSelected3 && isSelected4 && isSelected5 && isSelected6) {
            Alert.alert("Certo!");
            navigation.navigate("Q14")
        }else if (isSelected && isSelected2 && isSelected3 && (isSelected4 || isSelected5)) {
            Alert.alert("Quase lá!");
            navigation.navigate("Q14")
            } else if (!isSelected && !isSelected2 && !isSelected3 && !isSelected4 && !isSelected5 && !isSelected6) {
                Alert.alert("Selecione os itens para continuar.");
            } else{
                navigation.navigate("Q14")
            }
        
        }

    return (
        <ImageBackground source={require("./quarto15.jpg") } resizeMode="cover" style={styles.image}>
        <View>
            <Text style={styles.textBallon3}> Selecione os itens que você acha que deve ser RETIRADOS para a cirurgia: </Text> 
        
        <View style={styles.container} marginTop={7}>
             
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Dentadura</Text>

                
                        <Image
                                style={styles.tinyLogo2}
                                source={require("./dentadura.png") }
                            />
                    
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected2}
                    onValueChange={setSelection2}
                    style={styles.checkbox}
                />
                <Text style={styles.label}> Esmalte</Text>

                <View>
                        <Image
                                style={styles.tinyLogo2}
                                source={require("./esmalte.png") }
                            />
                    </View>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected3}
                    onValueChange={setSelection3}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Piercings</Text>
                <View>
                        <Image
                                style={styles.tinyLogo3}
                                source={require("./piercing.png") }
                            />
                    </View>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected4}
                    onValueChange={setSelection4}
                    style={styles.checkbox}
                />
                <Text style={styles.label}> Brincos</Text>
                <View>
                        <Image
                                style={styles.tinyLogo3}
                                source={require("./brincos.png") }
                            />
                    </View>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected5}
                    onValueChange={setSelection5}
                    style={styles.checkbox}
                />
                <Text style={styles.label}> Absorvente</Text>
                <View marginHorizontal={-30}>
                        <Image
                                style={styles.tinyLogo3}
                                source={require("./abs.png") }
                            />
                    </View>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected6}
                    onValueChange={setSelection6}
                    style={styles.checkbox}
                />
                <Text style={styles.label}> Colar</Text>
                <View>
                        <Image
                                style={styles.tinyLogo2}
                                source={require("./colar.png") }
                            />
                    </View>
            </View>
            
            <View >
                <Button inverted rounded centered  
                    
                    mode="contained"
                    onPress={() => confereQ13()}
            > Conferir</Button>
            </View>
            </View>
            
        </View>
        
  </ImageBackground>
  );
}

export function Quarto14({navigation}) {
    
    return (
        
                <ImageBackground source={require("./anestesia1.gif") } resizeMode="cover" style={styles.image}>
                    <Animatable.View animation="fadeIn" useNativeDriver duration={4000}>
                    <View >
                        <Text style={styles.textBallon2}>  Você deverá retirar todos esses itens! Qualquer tipo de acessório (anel, pulseira, brinco) e próteses dentárias.  </Text>
                    </View> 
                    </Animatable.View>
                    
                    <Animatable.View animation="fadeIn" useNativeDriver duration={3000} delay={5000} >
                    <View marginTop={10} >
                        <Text style={styles.textBallon2}> Evite usar maquiagem, adesivos medicamentosos na pele e absorventes internos. Em caso de dúvida, pergunte para o seu médico.</Text>
                    </View> 
                    </Animatable.View>
                    
                    <View >
                    <TouchableOpacity style={{ height: 470}}
                      onPress={() => navigation.navigate("Q15")}
                    >
                        <Animatable.View
                        marginLeft={"5%"}
                        marginTop={180}
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

export function Quarto15({navigation}) {
    
    return (
        
                <ImageBackground source={require("./x.gif") } resizeMode="cover" style={styles.image}>
                    <Animatable.View animation="fadeIn" useNativeDriver duration={4000}>
                    <View marginTop={50} marginRight={50} >
                        <Text style={styles.textBallon3}> Agora a cirurgiã deve marcar o lugar da cirurgia com uma caneta.</Text>
                    </View> 
                    </Animatable.View>
                 
                   
                    
                    <View >
                    <TouchableOpacity style={{ height: 600}}
                      onPress={() => navigation.navigate("C1")}
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