  import React, { useState } from "react";
  import { StyleSheet, Text, View, TextInput, Button , TouchableOpacity} from "react-native";
  import { useNavigation, NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";

  const Finisher = ({ route }) => {
    const { names, selectedNames } = route.params;
    const [finisherName, setFinisherName] = useState();
    // const [finisherStatus, setFinisherStatus] =useState(Array.from({ length: names.length }, () => false));
    

    const navigation = useNavigation();
   


    const handleNameClick = (index) => {
      // const updatedSelectedNames = [...finisherStatus];
      // updatedSelectedNames[index] = !updatedSelectedNames[index];
      // setFinisherStatus(updatedSelectedNames);
      setFinisherName([index]);
   
    };

    const handleButton = () => {
     navigation.navigate('Points', {names:names, selectedNames:selectedNames, finisherName:finisherName})

    }

    
    return (
      <View style={styles.container}>
        <Text>Who finished the game </Text>
        {names.map((name, index) => {
          if (!selectedNames[index]) {
          return (
          <TouchableOpacity
            key = {index}
            onPress={() => handleNameClick(index)}
            // disabled={isNamePressed && !finisherName[index]}
            >
            <Text
            style={{
              ...styles.selectableText,
              color: finisherName==index ? "green" : "blue",
            }}>
              {name}</Text>
            </TouchableOpacity>
          );
          }
        })}
        <Text>Finisher is </Text>
        {names.map((name,index)=>{
          if (index ==finisherName) {
            return (<Text>{name}{finisherName}</Text>)
          }
          
  })}
  <Button title="Points" onPress={handleButton} />
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

  export default Finisher;
