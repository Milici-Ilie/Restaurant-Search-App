import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

//🍾🍾[SINGLE CONTENT]🍾🍾
const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      {/* 🍧🍧[DISPLAYING IMAGES]🍧🍧 sliding more than the content to create a fallback effect */}
      <Image style={styles.image} source={{ uri: result.image_url }} />
      {/* 🍧🍧[DISPLAYING IMAGES]🍧🍧 importing the image */}
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  ); //🍾🍾[SINGLE CONTENT]🍾🍾
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  }, //🍧🍧[DISPLAYING IMAGES]🍧🍧 here we are creating the effect of sliding at the end and coming back
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  }, //🍧🍧[DISPLAYING IMAGES]🍧🍧
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
