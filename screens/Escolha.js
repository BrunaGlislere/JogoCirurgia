import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Alert} from 'react-native-ios-kit';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    width: 200,
    fontFamily: 'Open Sans',
  
  },
  button: {
    
    padding: 20,
    width: 200,
    
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});


const Background = styled.View`
    flex: 1;
    
    background-color : 	#ADD8E6;
    align-items: center;
    justify-content: center;
`;

const TopBar = styled.View`
  flex-direction: row;
  color: white;
  font-weight: bold;
  
`;

const Middle = styled.View`
  justify-content: space-between;
`;

     
export function EscolhaPlayer({navigation}) {
    return (
        <Background>
            <TopBar>
                <Text>Salve a cirurgia</Text>
            </TopBar>

            <Text>
                Você é:
            </Text>
            
            <Middle>
              <View style={styles.container}>

                <Button style={styles.button} inverted rounded
                  
                  mode="contained"
                  onPress={() => navigation.navigate("T1") }>
                  Profissional de saúde
                  </Button>
              </View>
              <View style={styles.container}>
              <Button style={styles.button} inverted rounded
                  
                  mode="contained"
                  onPress={() => navigation.navigate("Recepção") }>
                  Paciente
                  </Button>
              </View>
            </Middle>

        </Background>
    );

  }
 
  const AppStack = createStackNavigator();

  function Stack() {
    return (
      <AppStack.Navigator>
   
        <AppStack.Screen name="Selecionar" component={Recepcao2} />
      </AppStack.Navigator>
    );
  }
  
  
  function App2() {
    return (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );
  }


  