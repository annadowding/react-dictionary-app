import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded]= useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit (event) {
    event.preventDefault();
    search();
    alert(`Searching for ${keyword} definition`);
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChangeSet(event) {
    setKeyword(event.target.value);
  }

  function load () {
    setLoaded(true);
    search();
  }

if (loaded) {
  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit} className="searchbar">
          <input type="search" onChange={handleKeywordChangeSet} autocomplete="sunset"/>
        </form>
        <span>e.g. enchant, battle, delight</span>
      </section>
      <Results results={results} />
    </div>
  );
} else {
    load();
}
  
}
