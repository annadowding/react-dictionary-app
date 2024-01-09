import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    alert(response.data.meanings[0].definition);
  }

  //documentation: https://www.shecodes.io/learn/apis/dictionary
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
    let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChangeSet(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary container">
      <form onSubmit={search} className="searchbar">
        <input type="search" autofocus onChange={handleKeywordChangeSet} />
      </form>
    </div>
  );
}
