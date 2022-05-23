import React from "react";
import { Text,  View , ScrollView, ImageBackground, StyleSheet} from 'react-native';
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
        fontSize: 18,
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

export function ResumoMed({navigation}){

    return (
      <ScrollView>
        <View width={"100%"} height={"100%"}  >
            <ImageBackground source={require("./posopfot.jpg") } resizeMode="cover" style={styles.image}>
    
        <View style={styles.textBallon3} borderWidth={0}>
        <Text style={styles.textBallon5}> Entrada </Text> 
            <Text style={{fontSize:20}}>- Identificação antes da indução anestésica.</Text>
            <Text style={{fontSize:20}}>- Confirmação de identidade, local, procedimento e consentimento.</Text>
            <Text style={{fontSize:20}}>- Marcação do local, caso se aplique.</Text>
            <Text style={{fontSize:20}}>- Verificação de segurança anestésica.</Text>
            <Text style={{fontSize:20}}>- Posicionamento de oxímetro de pulso.</Text>
            <Text style={{fontSize:20}}>- Verificação de alergias.</Text>
            <Text style={{fontSize:20}}>- Verificação de vias aéreas e risco de broncoaspiração.</Text>
            <Text style={{fontSize:20}}>- Verificação de risco de perda sanguínea.</Text>
        </View>

        <View style={styles.textBallon3} borderWidth={0} >
        <Text style={styles.textBallon5}> Preparo </Text> 
        <Text style={{fontSize:20}}>- Confirmação antes da incisão cirúrgica.</Text>
        <Text style={{fontSize:20}}>- Confirmação de todos os membros da equipe e apresentação por nome e função.</Text>
        <Text style={{fontSize:20}}>- Confirmação verbal do cirurgião, do anestesiologista e do enfermeiro da identificação do paciente, do local cirúrgico e do procedimento. </Text>
        <Text style={{fontSize:20}}>- Revisão de etapas críticas previstas do procedimento. </Text>
        <Text style={{fontSize:20}}>- Revisão da equipe de anestesia sobre possíveis complicações. </Text>
        <Text style={{fontSize:20}}>- Revisão de esterilização. </Text>
        <Text style={{fontSize:20}}>- Revisão de equipamentos e matérias disponíveis. </Text>  
        <Text style={{fontSize:20}}>- Revisão de profilaxia antimicrobiana que deve ter sido realizada nos últimos 60 minutos. </Text> 
        <Text style={{fontSize:20}}>- Disposição de exames de imagem essenciais.</Text>
        </View>
        
        
    

        <View style={styles.textBallon3} borderWidth={0}>
        <Text style={styles.textBallon5}> Saída </Text> 
            <Text style={{fontSize:20}}>- Registro completo do procedimento.</Text>
            <Text style={{fontSize:20}}>- Contagens de instrumentos, compressas e materiais.</Text>
            <Text style={{fontSize:20}}>- Amostra patológica identificada, se for o caso.</Text>
            <Text style={{fontSize:20}}>- Planejamento do cirurgião e do anestesiologista sobre a recuperação e manejo do paciente .</Text>
        </View>
        
        <View style={styles.buttonContinuar}>
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