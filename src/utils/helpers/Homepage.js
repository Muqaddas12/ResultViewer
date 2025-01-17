import axios from "axios";
import { Alert } from "react-native";
/**
 viewResult checks the params 
 @session ,@semester,rollNumber
 @course and @navigation
 @navigation params is used for displaying the result based on params
 */
 export const viewResult =async (session,course,semester,rollNumber,navigation) => {

    // Check if all fields are filled
    if (!course || !session || !rollNumber || !semester) {
      Alert.alert('Input Validation', 'Please fill all fields!');
      return;
    }

  
let url=null
      if(session==='201819'){
         url = `http://103.57.178.67/${courese}2019`;
      }else{
         url = `http://103.57.178.67/S${session}/${course}${session}/${semester}.php?Enroll=${rollNumber}`;
      }

      try {
        const response = await axios.get(url);
        const data = response.data;
        const rurl=response.request.responseURL
       if(url===rurl){
        navigation.navigate('ResultView', { data });
       }
       else{
        return alert('invalid Course/Session/Semester/RollNumber')
       }
      } catch (error) {
        console.error('Error fetching result:', error);
        Alert.alert('Failed to fetch result. Please try again later.');
      } finally {
        
      }
   
  };


 export const generateSessionOptions = () => {
      const startYear = 2018;
      const currentYear = new Date().getFullYear();
     const sessionOptions = [];
      
      for (let year = startYear; year < currentYear; year++) {
        sessionOptions.push({
          label: `${year}-${year + 1}`,
          value: `${year}` + `${year + 1}`.slice(-2), // Extracts last 6 digits (e.g. 202324)
        });
      }
    
      return sessionOptions;
    };