import React from 'react';
import { View, Text, StyleSheet,  Alert} from 'react-native';
import {Recepcao1} from './screens/recepcao/recepcao1';
import {Selecionar} from './screens/recepcao/recepcao2';
import {SaibaMais} from './screens/quarto/quarto2';
import {Selecionar2, Quarto3, Quarto4, Quarto5, Quarto51, Quarto52, Quarto6, Quarto7, Quarto8, Quarto9, Quarto10,
        Quarto11, Quarto12, Quarto13, Quarto14, Quarto15} from './screens/quarto/quarto2';
import {Quarto1, Quarto1p1} from './screens/quarto/quarto1';
import {Cirurgia1, Cirurgia2, Cirurgia3, Cirurgia4, Cirurgia5, Cirurgia6} from './screens/cirurgia/cirurgia1';
import {Posop1, Posop2, Posop3, Posop4, Fim1, Resumo} from './screens/posop/posop';
import {ResumoMed} from './screens/jogoMedico/saida/saida';
import { EscolhaPlayer } from './screens/Escolha';
import {Tela1, Tela2, Tela3, Tela4, Tela5, Tela6, Tela7, Tela8, Tela9, Tela10, Tela11, Tela12} from './screens/jogoMedico/quarto2/tela1';
import {Telacir1, Telacir2, Telacir3, Telacir4, Telacir5, Telacir7, Telacir8} from './screens/jogoMedico/cirurgia2/tela1';
import styled from "styled-components";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-ios-kit';

const styles = StyleSheet.create({

  container: {
      marginHorizontal:30,
      marginTop: 40,
      borderRadius: 15,
      fontWeight: 'bold'
    },

  titulo: {
    color: "white",
    textTransform: 'uppercase',
    fontSize: 35,
    },
});

const Background = styled.View`
    flex: 1;
    background-color : 	#ADD8E6;
    align-items: center;
    justify-content: center;
`;

const Texto = styled.View`
  flex-direction: row;
`;

Texto.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;


export function HomeScreen({ navigation }) {
  return (
    <Background>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
        
        <Animatable.Text animation="fadeIn" useNativeDriver duration={2000} style={styles.titulo}> Cirurgia Segura</Animatable.Text>
        
        <Texto>
          <Texto.SubTitle>Salve a cirurgia</Texto.SubTitle>
        </Texto>
        <View marginTop={60} style={styles.container}>
                                <Button  inverted rounded
                                mode="contained"
                                onPress={() => navigation.navigate("EscolhaPlayer") }>
                                Jogar
                                </Button>
                            </View>
      </View>
      
    </Background>
  )
}
// ===============================================================

const AppStack = createStackNavigator();

function Stack() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      <AppStack.Screen name="EscolhaPlayer" component={EscolhaPlayer} />
      <AppStack.Screen name="Recepção" component={Recepcao1} />
      <AppStack.Screen name="Selecionar" component={Selecionar} />
      <AppStack.Screen name="Quarto1" component={Quarto1} />
      <AppStack.Screen name="Q1p1" component={Quarto1p1} />
      <AppStack.Screen name="Quarto2" component={Selecionar2} />
      <AppStack.Screen name="SB" component={SaibaMais} />
      <AppStack.Screen name="Q3" component={Quarto3} />
      <AppStack.Screen name="Q4" component={Quarto4} />
      <AppStack.Screen name="Q5" component={Quarto5} />
      <AppStack.Screen name="Q5.1" component={Quarto51} />
      <AppStack.Screen name="Q5.2" component={Quarto52} />
      <AppStack.Screen name="Q6" component={Quarto6} />
      <AppStack.Screen name="Q7" component={Quarto7} />
      <AppStack.Screen name="Q8" component={Quarto8} />
      <AppStack.Screen name="Q9" component={Quarto9} />
      <AppStack.Screen name="Q10" component={Quarto10} />
      <AppStack.Screen name="Q11" component={Quarto11} />
      <AppStack.Screen name="Q12" component={Quarto12} />
      <AppStack.Screen name="Q13" component={Quarto13} />
      <AppStack.Screen name="Q14" component={Quarto14} />
      <AppStack.Screen name="Q15" component={Quarto15} />
      <AppStack.Screen name="C1" component={Cirurgia1} />
      <AppStack.Screen name="C2" component={Cirurgia2} />
      <AppStack.Screen name="C3" component={Cirurgia3} />
      <AppStack.Screen name="C4" component={Cirurgia4} />
      <AppStack.Screen name="C5" component={Cirurgia5} />
      <AppStack.Screen name="C6" component={Cirurgia6} />
      <AppStack.Screen name="PO1" component={Posop1} />
      <AppStack.Screen name="PO2" component={Posop2} />
      <AppStack.Screen name="PO3" component={Posop3} />
      <AppStack.Screen name="PO4" component={Posop4} />
      
      <AppStack.Screen name="T1" component={Tela1} />
      <AppStack.Screen name="T2" component={Tela2} />
      <AppStack.Screen name="T3" component={Tela3} />
      <AppStack.Screen name="T4" component={Tela4} />
      <AppStack.Screen name="T5" component={Tela5} />
      <AppStack.Screen name="T6" component={Tela6} />
      <AppStack.Screen name="T7" component={Tela7} />
      <AppStack.Screen name="T8" component={Tela8} />
      <AppStack.Screen name="T9" component={Tela9} />
      <AppStack.Screen name="T10" component={Tela10} />
      <AppStack.Screen name="T11" component={Tela11} />
      <AppStack.Screen name="T12" component={Tela12} />

      <AppStack.Screen name="Tcir1" component={Telacir1} />
      <AppStack.Screen name="Tcir2" component={Telacir2} />
      <AppStack.Screen name="Tcir3" component={Telacir3} />
      <AppStack.Screen name="Tcir4" component={Telacir4} />
      <AppStack.Screen name="Tcir5" component={Telacir5} />
      <AppStack.Screen name="Tcir7" component={Telacir7} />
      <AppStack.Screen name="Tcir8" component={Telacir8} />

      <AppStack.Screen name="F1" component={Fim1} />
      <AppStack.Screen name="Resumo" component={Resumo} />
      <AppStack.Screen name="ResumoMed" component={ResumoMed}/>

    </AppStack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
