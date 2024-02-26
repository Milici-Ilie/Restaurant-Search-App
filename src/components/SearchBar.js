import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"; //🔍🔍[SEARCH BAR]🔍🔍 importing the connection for our Icon

//🔍🔍[SEARCH BAR]🔍🔍
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  // 🔤🔤[RECEVEING DATA]🔤🔤 importing the PROPS from 'SearchScreen' and use them bellow in the <TextInput .../>
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      {/* 🔍🔍[SEARCH BAR]🔍🔍 positioning the Icon inside of our Search Bar component */}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        // 🔤🔤[RECEVEING DATA]🔤🔤 here 'onEndEditing={onTermSubmit}' we bring back a respons after the User hits the Enter key and waiting for a response from the API link
      />
      {/* 🔍🔍[SEARCH BAR]🔍🔍 <TextInput/> create the Input bar where we can text our search prefferences */}
    </View>
  ); //🔍🔍[SEARCH BAR]🔍🔍 creating the Search Bar component
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
}); //🔍🔍[SEARCH BAR]🔍🔍 styling the SearchBar component

export default SearchBar;
