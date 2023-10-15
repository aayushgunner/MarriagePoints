import React, { useDebugValue, useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid} from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Finisher from "./Finisher";


const Calculation = ({route}) => {
    const{names,submittedPoints,selectedNames,finisherName} = route.params;
    const [totalPoints,setTotalPoints] = useState(0);
    const[count , setCount] = useState (0);
    const [isSelected, setIsSelected] = useState(false);
    const [eachPoint , setEachPoint] = useState([]);

    var total = 0;
  var c = 0;

    const pointCalculation =() => {
        submittedPoints.forEach((points) => {
            total += Number(points); // or use +points;
            c= c+1;
        });
      setTotalPoints(total);
      setCount(c);
      let maalarray= [];
        
     {names.map((name,index)=> {
     
        maal = 0;
        if (index!=finisherName && !selectedNames[index]) {
            maal = total + 3 - (c * Number(submittedPoints[index]));
            
        }
        else if (index!=finisherName && selectedNames[index]) {
            maal = total + 10;
        }
        maalarray[index] = maal;
        setEachPoint(maalarray);
     })}

      setIsSelected(true);
     

    }
    return (
        <View>
        <Text>This is calculation page</Text>
        <Button title="Calculate"  onPress={pointCalculation}  disabled= {isSelected}/>
        <Text>The total point is {totalPoints}</Text>
        {names.map((name,index)=>{
            if (index!=finisherName) {
                return(<Text>{name} should pay  {eachPoint[index]} to {names[finisherName]}</Text>)
            }
        })}
        </View>
    )
}

export default Calculation;