import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Names from "./Names"; // Import the NewScreen component
import Points from "./Points";
import Finisher from "./Finisher"
import Naherne from "./Naherne";
import Calculation from "./Calculation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");
  const navigationRef = React.createRef();

  const handleButtonPress = () => {
    // Save the input value to storedValue state variable
    setStoredValue(inputValue);
    // Navigate to the new screen
    setInputValue('');
    navigationRef.current.navigate('Names', { number: inputValue });
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {() => (
            <View style={styles.container}>
              <Text>Enter number of players</Text>
              <View>
                <TextInput
                  value={inputValue}
                  placeholder="Haha"
                  keyboardType="numeric"
                  onChangeText={(text) => setInputValue(text)}
                />
                <Button title="Save Number" onPress={handleButtonPress} />
              </View>
              <Text>Stored Value: {storedValue}</Text>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Names" component={Names} />
        <Stack.Screen name="Naherne" component = {Naherne} />
        <Stack.Screen name="Finisher" component = {Finisher} />
        <Stack.Screen name ="Points" component={Points} />
        <Stack.Screen name ="Calculation" component={Calculation} />
        {/* <Stack.Screen name ="Calculation" component={Calculation} /> */}
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
