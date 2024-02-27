import { useEffect, useState } from "react";
import yelp from "../api/yelp";

//this file was created for Customed HOOKS that can be reused in different places
//🌋🌋[HANDLING ERRORS]🌋🌋 handling the errors
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //⛵⛵[DISPLAYING DEFAULT RESULTS]⛵⛵ we pass the 'searchApi' as a PROP to our 'SearchScreen.js' file for displaying the content by default when the App is open
  const searchApi = async (searchTerm) => {
    console.log("Hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  }; //🌋🌋[HANDLING ERRORS]🌋🌋

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  //⛵⛵[DISPLAYING DEFAULT RESULTS]⛵⛵ implementing the 'useEffect' state to call the 'searchApi' variable
  useEffect(() => {
    searchApi("pasta");
  }, []); //⛵⛵[DISPLAYING DEFAULT RESULTS]⛵⛵ this is a bad practice becasue the code will always rerender the call of the 'SearchScreen.js' and will create a LOOP to search for new contents all the time

  return [searchApi, results, errorMessage];
};
