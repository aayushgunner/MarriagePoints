// NewScreen.js
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Points from "./Points";

import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Names = ({ route }) => {
  const { number } = route.params;
  const [playerNames, setPlayerNames] = useState(
    Array.from({ length: number }, () => "")
  );

  const [submittedNames, setSubmittedNames] = useState([]);
  const [displayText , setDisplayText] = useState("");
//   const navigationRef = React.createRef();
const navigation = useNavigation();

  const handleInputChange = (text, index) => {
    const updatedPlayerNames = [...playerNames];
    updatedPlayerNames[index] = text;
    setPlayerNames(updatedPlayerNames);
  };

  const handleSubmit = () => {
    // Handle the collected player names, for example, send them to an API or process as needed
    setDisplayText("Players are");
    setSubmittedNames(playerNames.filter((name) => name.trim() !== ""));
   
  };

  const NahernePage = ()=> {

    navigation.navigate('Naherne', {names:submittedNames});

  };

  return (
    <View style={styles.container}>
      <Text>
        Enter player names for {number} players
      </Text>
      {playerNames.map((name, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Player ${index + 1}`}
          value={name}
          onChangeText={(text) => handleInputChange(text, index)}
        />
      ))}
      <Button title="Submit" onPress={handleSubmit} />

      <View>
        <Text>{displayText}</Text>
        {submittedNames.map((name, index) => (
          <Text key={index}>Player{index+1}: {name}</Text>
        ))}
      </View>
      
      <Button title = "Naherne" onPress={NahernePage}/>
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
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Names;
