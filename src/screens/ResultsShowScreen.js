import React, { useState, useEffect } from "react"; //💫💫[COMUNICATING SCREENS]💫💫 also we need the 'useState' and also the 'useEffect' to not sent to many requests to the API
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp"; //💫💫[COMUNICATING SCREENS]💫💫 need it to take the 'id' from the Yelp API

//🦟🦟[RELATED CONTENTS]🦟🦟
const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null); //💫💫[COMUNICATING SCREENS]💫💫 we need a default value of an Array, meaning an empty Array that will be filled when the User sent some request and the API will comunicate some 'result'
  const id = route.params.id; //💫💫[COMUNICATING SCREENS]💫💫

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data); //💫💫[COMUNICATING SCREENS]💫💫 getting the 'id' from the YELP API servers, note that this method of taking the 'id' can be different for others App's, because every API can have different 'id' method, links, etc
  };
  useEffect(() => {
    getResult(id);
  }, []); //💫💫[COMUNICATING SCREENS]💫💫 sending only one resuest to the API and not to much to overflow the data flowing

  if (!result) {
    return null;
  } //💫💫[COMUNICATING SCREENS]💫💫 return an empty Array if there are no results returned from the API, also here we can set an Error message if we want

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  ); //always use <FlatList/> when you want to display and Array of IMG's or any multiple contents that can be loaded as a List
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
