import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native"; //🦟🦟[RELATED CONTENTS]🦟🦟 we need the 'TouchableOpacity' to see where the use just tapped and to know what we should activate, check bellow hwo to implement this touch opacity 👇
import { useNavigation } from "@react-navigation/native"; //🦟🦟[RELATED CONTENTS]🦟🦟 here we call the 'navigation' to connect our contents/bound them when the User press a content
import ResultsDetail from "./ResultsDetail"; //🍾🍾[SINGLE CONTENT]🍾🍾 importing the results

// 🎊🎊[DISPLAYING CONTENT FROM API]🎊🎊
//🦟🦟[RELATED CONTENTS]🦟🦟 implementing the 'navigation' 👇
const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false} // hiding the scrollbar
        data={results}
        keyExtractor={(result) => result.id}
        // the unique id, this 'id' is recevied from the API server wich is unique
        renderItem={({ item }) => {
          return (
            //🦟🦟[RELATED CONTENTS]🦟🦟 here 👇 we need to wrap our content inside of it
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              } //here we are telling to the 'navigator' with what content to bound when is pressed, in our case is 'ResultsShow', this is the 'ResultsShowScreen.js' file, check the 'App.js' file to see the connection
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          ); //🍾🍾[SINGLE CONTENT]🍾🍾 returning the <ResultsDetail/>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
