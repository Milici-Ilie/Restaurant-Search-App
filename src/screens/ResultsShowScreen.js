import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

//🦟🦟[RELATED CONTENTS]🦟🦟
const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id; //💫💫[COMUNICATING SCREENS]💫💫

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data); //💫💫[COMUNICATING SCREENS]💫💫 getting the 'id' from the YELP API servers, note that this method of taking the 'id' can be different for others App's, because every API can have different 'id' method, links, etc
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

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
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
