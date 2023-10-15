import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button} from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Points = ({ route }) => {
  const { names, selectedNames, finisherName } = route.params; // Extract names from the route params
  const [points, setPoints] = useState(Array.from({ length: names.length }, () => ""));
  const [submittedPoints, setSubmittedPoints] = useState([]);
  const [displayNames, setDisplayNames] = useState([]);
  const [displayText , setDisplayText] = useState("");

  const navigation = useNavigation();

  const handlePointsChange = (text, index) => {
    const updatedPoints = [...points];
    updatedPoints[index] = text;
    setPoints(updatedPoints);
  };

  const handlePointsSubmission = (names, points) => {
    // Handle points submission logic here
    const updatedPoints = [...points]
    {names.map((name,index)=>{
    if (selectedNames[index]) {
          updatedPoints[index] = 0;
    }
  })}
    setDisplayText(':');
    setDisplayNames(names);
  setSubmittedPoints(updatedPoints);
  
    // You can send the names and corresponding points to your backend/API or perform any other actions.
  };



  const Shower=()=> {
    // navigation.navigate('Finisher', {names:displayNames,points:submittedPoints} );
  navigation.navigate('Calculation', {names:names, submittedPoints:submittedPoints, selectedNames:selectedNames,finisherName:finisherName} )
    
  };
  

  return (
    <View style={styles.container}>
      <View>
        <Text>Enter Points for Each Player:</Text>
        {names.map((name, index) => {
          if (!selectedNames[index]) {
        return (  <View key={index} style={styles.playerRow}>
            <Text>{name}:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter points"
              keyboardType="numeric"
              value={points[index]}
              onChangeText={(text) => handlePointsChange(text, index)}
            />
          </View>
        )
          }
})}
      </View>
      <Button title="Submit" onPress={() => handlePointsSubmission(names, points)} />
      <View>
        {names.map((name,index) => (
            <Text key = {index}>
                {displayNames[index]}{displayText}{submittedPoints[index]}
                </Text>
        ))}
      </View>
      <Button title = "Next " onPress={Shower} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 80,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
});

export default Points;
