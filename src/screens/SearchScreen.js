import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native"; //🍧🍧[DISPLAYING IMAGES]🍧🍧 we need to import the 'ScrollView'
import SearchBar from "../components/SearchBar"; //🔍🔍[SEARCH BAR]🔍🔍 importing the SearchBar
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList"; //🎊🎊[DISPLAYING CONTENT FROM API]🎊🎊 importing the results from the API list

const SearchScreen = () => {
  const [term, setTerm] = useState(""); //🔤🔤[RECEVEING DATA]🔤🔤 taking data from the Search Input Text
  const [searchApi, results, errorMessage] = useResults(); //🔤🔤[RECEVEING DATA]🔤🔤 Receveing data from the Input Text === NOTE ❗❗❗ Note that here we called the 'useRescults' file an take the PROPS 'searchApi, results, errorMessage' that we exported in the 'useResults.js' to use them in this file ❗❗❗
  // ⛵⛵[DISPLAYING DEFAULT RESULTS]⛵⛵ calling the PROP 'searchApi'

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price; //also note that we are 'filter'ing in all the 'results' that we get from the 'ResultsList.js' and separate the dollar symbols to create our lists
    }); //🎊🎊[DISPLAYING CONTENT FROM API]🎊🎊 here we are grouping the restaurents depending on the 'price' that we get from the API, the API provides us price that result in dollar symbols, from cheaper to expensive $, $$ or exepensive $$$
  }; //🎊🎊[DISPLAYING CONTENT FROM API]🎊🎊 we implement this function bellow 👇 in the <ResultsList .../>, there we are calling this function and include the term that distinguish data from another data 'filterResultsByPrice('$') or ('$$'), etc'

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
        {/* 🍧🍧[DISPLAYING IMAGES]🍧🍧 here we need to wrap all our content inside <ScrollView>...here...</ScrollView> that must be scrooled if there is to much content --- NOTE ❗❗❗ on Android can be a problem with the Vertical scrooling, to solve that problem of the content that dont expand at maximum capacity we need to set those content to "style={{flex:1}}", this will strech the content on all the available space === BUT all of this can be simply replaced with empty fragments <>  ... </>, use the 'flex:1' only when is need it. */}
        {/* 🎊🎊[DISPLAYING CONTENT FROM API]🎊🎊 our <ResultsList/> 👇 here we are passing all the code that we need using the PROPS, check the code in the 'ResultList.js' */}
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
