import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white', // White background
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#4A4A4A', // Dark gray for better contrast
      marginBottom: 10,
      textAlign: 'center',
    },
    subHeader: {
      fontSize: 20,
      fontWeight: '600',
      color: '#555555', // Medium-dark gray
      marginBottom: 30,
      textAlign: 'center',
    },
    label: {
      fontSize: 16,
      fontWeight: '500',
      color: '#666666', // Slightly lighter gray for labels
      marginBottom: 5,
      alignSelf: 'flex-start',
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#AAAAAA', // Light gray border to differentiate from white
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      backgroundColor: '#F8F8F8', // Light gray background for input fields
      color: '#333333', // Dark text inside inputs
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#5e46b4', // Keep purple button for a strong color accent
      padding: 12,
      borderRadius: 10,
      marginBottom: 20,
      width: '80%',
    },
    buttonText: {
      fontSize: 18,
      color: 'white', // Keep white text for the purple button
      textAlign: 'center',
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginBottom: 20,
    },
  });
  
 export const pickerStyles = {
    inputAndroid: {
      width: '100%',
      height: 50,
      backgroundColor: '#F8F8F8',
      borderRadius: 10,
      borderColor: '#AAAAAA', // Light gray border
      borderWidth: 1,
      paddingHorizontal: 10,
      fontSize: 16,
      color: '#333333', // Dark gray text
      marginBottom: 20,
    },
    inputIOS: {
      width: '100%',
      height: 50,
      backgroundColor: '#F8F8F8',
      borderRadius: 8,
      borderColor: '#AAAAAA',
      borderWidth: 1,
      paddingHorizontal: 10,
      fontSize: 16,
      color: '#333333',
      marginBottom: 20,
    },
  };
  