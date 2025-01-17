import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Homepage from './src/components/Homepage';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ResultView from './src/components/ResultView';
const Stack=createStackNavigator();
export default function ResultViewer() {
  console.log('app.js')
  return (

     <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName='Homepage'>
          <Stack.Screen  name='Homepage' component={Homepage}/>
          <Stack.Screen name='ResultView' component ={ResultView}/>
        </Stack.Navigator>
      </NavigationContainer>
   

     
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
