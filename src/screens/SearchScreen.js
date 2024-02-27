import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar"; //🔍🔍[SEARCH BAR]🔍🔍 importing the SearchBar
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState(""); //🔤🔤[RECEVEING DATA]🔤🔤 taking data from the Search Input Text
  const [searchApi, results, errorMessage] = useResults(); //🔤🔤[RECEVEING DATA]🔤🔤 Receveing data from the Input Text === NOTE ❗❗❗ Note that here we called the 'useRescults' file an take the PROPS 'searchApi, results, errorMessage' that we exported in the 'useResults.js' to use them in this file ❗❗❗
  // ⛵⛵[DISPLAYING DEFAULT RESULTS]⛵⛵ calling the PROP 'searchApi'

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        //⛵⛵[DISPLAYING DEFAULT RESULTS]⛵⛵ 'onTermSubmit={()=> searchApi(term)}', here we are setting the default content that must be displayed by default
        //🔤🔤[RECEVEING DATA]🔤🔤after the User hits the Enter Key this is how we submit the data/info;s of what he typed in, we also need to pass this State (onTermSubmit) as a Prop to 'SearchBar.js' for this to work
      />
      {/* 🔤🔤[RECEVEING DATA]🔤🔤 connecting the Search Bar with the data receveid from the Input Text --- ❗❗❗ Now we can pass those States 'term, onTermChange and onTermSubmit' as PROPS to our 'SearchBar.js' file */}
      {/* 🔍🔍[SEARCH BAR]🔍🔍 placing the SearchBar component */}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* 🌋🌋[HANDLING ERRORS]🌋🌋 here we are implementing the Error message if is true or false  */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
