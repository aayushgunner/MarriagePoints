import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Naherne = ({ route }) => {
  const { names } = route.params;
  const [selectedNames, setSelectedNames] = useState(
    Array.from({ length: names.length }, () => false)
  );

 const navigation = useNavigation();

  const handleNameClick = (index) => {
    const updatedSelectedNames = [...selectedNames];
    updatedSelectedNames[index] = !updatedSelectedNames[index];
    setSelectedNames(updatedSelectedNames);
  };


  const handleButton = () => {

        navigation.navigate('Finisher', {names : names, selectedNames:selectedNames})

  }
  return (
    <View style={styles.container}>
      <Text>Select names which are not seen</Text>
      {names.map((name, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleNameClick(index)}
        >
          <Text
            style={{
              ...styles.selectableText,
              color: selectedNames[index] ? "green" : "blue",
            }}
          >
            {name}
          </Text>
        </TouchableOpacity>

      ))}
         <Text>Naherne haru</Text>
      {names.map((name,index)=>{
        
        if (selectedNames[index]) {
            return (<Text>{name}</Text>)
        }



       })}

       <Text> Herne haru</Text>
     {names.map((name,index)=>{
        if (!selectedNames[index]) {
            return (<Text>{name}</Text>)
        }
     })}
       <Button title ="Finisher" onPress={handleButton} />
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
  selectableText: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default Naherne;
